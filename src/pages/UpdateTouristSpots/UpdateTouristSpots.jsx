import { useContext, useEffect, useState } from "react";
import loginBg from "../../assets/images/backgrounds/login-bg.jpg";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useParams } from "react-router-dom";

const UpdateTouristSpots = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [dataToBeUpdated, setDataToBeUpdated] = useState({});
  const [formData, setFormData] = useState({
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
  });

  useEffect(() => {
    fetch(`https://b9a10-server-side-mdsabbiralmamon.vercel.app/spot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Exclude _id from the received data
        const { _id, ...dataWithoutId } = data;
        setDataToBeUpdated(dataWithoutId);
        setFormData((prevFormData) => ({
          ...prevFormData,
          ...dataWithoutId,
        }));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...dataToBeUpdated,
    }));
  }, [dataToBeUpdated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

//   console.log(formData);

//   update data
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://b9a10-server-side-mdsabbiralmamon.vercel.app/spot/${id}`, {
      method: "PATCH",
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
        console.log("Tourist spot updated:", data);
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Tourist spot updated successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        // Show error alert
        Swal.fire({
          title: "Error!",
          text: "An error occurred while updating the tourist spot.",
          icon: "error",
          confirmButtonText: "OK",
        });
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
            Update Your Added Tourist Spot
          </h2>
          <p className="m-4 text-center">
            Got any updated information? Update them right now !!!
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
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTouristSpots;
