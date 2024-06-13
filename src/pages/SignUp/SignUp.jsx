import loginBg from "../../assets/images/backgrounds/signup-bg.jpg";
import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signUpUser, updateUserName, updatePhoto, googleSignIn, githubSignIn } =
    useContext(AuthContext);

  const [error, setError] = useState(null);

  const navigate = useNavigate();

    // send user data to database
    const sendUserDataToDatabase = (user) => {
      fetch("https://b9a10-server-side-mdsabbiralmamon.vercel.app/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("new user data", data);
            });
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const formData = e.target;

    const name = formData.name.value;
    const email = formData.email.value;
    const password = formData.password.value;
    const photoUrl = formData.photoUrl.value;

    const userData = {name: name, email: email, password: password, photo: photoUrl};

    // Password verification
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      Swal.fire({
        title: "Error!",
        text: "Password must be at least 6 characters long.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    } else if (!uppercaseRegex.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      Swal.fire({
        title: "Error!",
        text: "Password must contain at least one uppercase letter.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    } else if (!lowercaseRegex.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      Swal.fire({
        title: "Error!",
        text: "Password must contain at least one lowercase letter.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    signUpUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        // Update User
        updateUserName(name);
        updatePhoto(photoUrl);
        console.log("signed Up user with : ", user);
        Swal.fire({
          title: "Success!",
          text: "Successfully signed up",
          icon: "success",
          confirmButtonText: "let's back to business !!!",
        });
        // send data to DB
        sendUserDataToDatabase(userData);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError("Email already in use, Please use a different one"); // Set error message
        console.error("Sign in error:", errorMessage);
        Swal.fire({
          title: "Error!",
          text: "Email already exists",
          icon: "error",
          confirmButtonText: "OK",
        });
        // clear email field
        formData.email.value = "";
      });

    const user = {
      name: name,
      email: email,
      password: password,
      photoUrl: photoUrl,
    };

    console.log("Submitted", user);
  };

  // Google SignIn
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // user logged in
        const user = result.user;
        console.log("user logged in via google : ", user);
        Swal.fire({
          title: "SignIn Success!",
          text: "Successfully signed in, return to your destination!",
          icon: "success",
          confirmButtonText: "OK",
        });
        const userData = {name: user.displayName, email: user.email, photo: user.photoURL};
        sendUserDataToDatabase(userData);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  // github login
  const handleGitHubSignIn = () => {
    githubSignIn()
      .then((result) => {
        // user logged in
        const user = result.user;
        console.log("user logged in via Github : ", user);
        Swal.fire({
          title: "SignIn Success!",
          text: "Successfully signed in, return to your destination!",
          icon: "success",
          confirmButtonText: "OK",
        });
        const userData = {name: user.displayName, email: user.email, photo: user.photoURL};
        sendUserDataToDatabase(userData);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="card p-8 m-4 md:w-1/2 lg:w-1/2 glass">
        <form onSubmit={handleSubmit}>
          <h2 className="font-bold text-4xl text-center">
            Sign Up Your Account
          </h2>
          {/* Display error message */}
          {error && (
            <p className="font-bold text-theme_red text-center my-4 mx-2">
              {error}
            </p>
          )}{" "}
          <div className="divider"></div>
          {/* Name input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Email input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* Photo Url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          {/* Password input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="mt-6 w-full">
            <button className="btn btn-primary w-full">Sign Up</button>
          </div>
        </form>
        <h2 className="font-bold my-4 text-center">
          Already Have An Account?
          <a href="/signin" className="text-theme_secondary">
            {" "}
            Sign In
          </a>
        </h2>
        <div className="divider">or continue with</div>
        <div className="flex justify-center flex-wrap gap-6">
          <button onClick={handleGoogleSignIn} className="btn text-3xl">
            <FaGoogle />
          </button>
          <button onClick={handleGitHubSignIn} className="btn text-3xl">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
