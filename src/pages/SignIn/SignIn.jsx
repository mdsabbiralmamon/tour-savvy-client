import loginBg from "../../assets/images/backgrounds/login-bg.jpg";
import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(" ");

    const formData = e.target;

    const email = formData.email.value;
    const password = formData.password.value;

    console.log("Submitted", { email, password });

    // signin with email and password
    signInUser(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "SignIn Success!",
          text: "Successfully signed in, return to your destination!",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError("Invalid credentials, Please Recheck"); // Set error message
        console.error("Sign in error:", errorMessage);
        Swal.fire({
          title: "Error!",
          text: "Invalid credentials, Please Recheck",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
    // clear form data
    e.target.reset();
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
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  // Github SignIn
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
        navigate(location?.state ? location.state : "/");
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
      className="h-screen flex items-center justify-center"
    >
      <div className="card p-8 m-4 md:w-1/2 lg:w-1/2 glass">
        <form onSubmit={handleSubmit}>
          <h2 className="font-bold text-4xl text-center">
            Sign In Your Account
          </h2>
          {error && (
            <p className="text-theme_red font-bold text-center my-4 mx-2">
              {error}
            </p>
          )}
          {/* Display error message */}
          <div className="divider"></div>
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
            <button className="btn btn-primary w-full">Sign In</button>
          </div>
        </form>
        <h2 className="font-bold my-4 text-center">
          Do Not Have An Account?
          <a href="/signup" className=" text-theme_secondary">
            {" "}
            Sign Up
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

export default SignIn;
