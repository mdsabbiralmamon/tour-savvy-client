import { useContext, useState } from "react";
import loginBg from "../../assets/images/backgrounds/login-bg.jpg";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddSpots = () => {
  const { user } = useContext(AuthContext);
  const initialFormData = {
    image: "",
    tourists_spot_name: "",
    country_Name: "",
    location: "",
    short_description: "",
    average_cost: "",
    seasonality: "",
    travel_time: "",
    totalVisitorsPerYear: "",
    email: user.email,
    name: user.displayName,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://b9a10-server-side-mdsabbiralmamon.vercel.app/spot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Tourist spot to be added ", data);
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Tourist spot added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        // Clear form data
        setFormData(initialFormData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        // Show error alert
        Swal.fire({
          title: "Error!",
          text: "An error occurred while adding the tourist spot.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });

    console.log("Form submitted with data:", formData);
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
            Add your favorite tourist spot
          </h2>
          <p className="m-4 text-center">
            Why not share your recently visited or favorite tourist spots with
            others?
          </p>
          <div className="divider"></div>
          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="input input-bordered"
              required
            />
          </div>
          {/* Tourist Spot Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tourist Spot Name</span>
            </label>
            <input
              type="text"
              name="tourists_spot_name"
              value={formData.tourists_spot_name}
              onChange={handleChange}
              placeholder="Tourist Spot Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Country Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <input
              type="text"
              name="country_Name"
              value={formData.country_Name}
              onChange={handleChange}
              placeholder="Country Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="input input-bordered"
              required
            />
          </div>
          {/* Short Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <textarea
              name="short_description"
              value={formData.short_description}
              onChange={handleChange}
              placeholder="Short Description"
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>
          {/* Average Cost */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Average Cost</span>
            </label>
            <input
              type="text"
              name="average_cost"
              value={formData.average_cost}
              onChange={handleChange}
              placeholder="Average Cost"
              className="input input-bordered"
              required
            />
          </div>
          {/* Seasonality */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <input
              type="text"
              name="seasonality"
              value={formData.seasonality}
              onChange={handleChange}
              placeholder="Seasonality"
              className="input input-bordered"
              required
            />
          </div>
          {/* Travel Time */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Travel Time</span>
            </label>
            <input
              type="text"
              name="travel_time"
              value={formData.travel_time}
              onChange={handleChange}
              placeholder="Travel Time"
              className="input input-bordered"
              required
            />
          </div>
          {/* Total Visitors Per Year */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Total Visitors Per Year</span>
            </label>
            <input
              type="text"
              name="totalVisitorsPerYear"
              value={formData.totalVisitorsPerYear}
              onChange={handleChange}
              placeholder="Total Visitors Per Year"
              className="input input-bordered"
              required
            />
          </div>
          {/* User Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              //   onChange={handleChange}
              readOnly
              placeholder="User Email"
              className="input input-bordered"
              required
            />
          </div>
          {/* User Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={user.displayName}
              //   onChange={handleChange}
              readOnly
              placeholder="User Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Add Button */}
          <div className="mt-6 w-full">
            <button type="submit" className="btn btn-primary w-full">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSpots;
