import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;

  const [allDataSetByUser, setAllDataSetByUser] = useState([]);

  

  // Fetch data from the server belonging to this email
  useEffect(() => {
    fetch(`https://b9a10-server-side-mdsabbiralmamon.vercel.app/spot/my-list/${email}`)
      .then((res) => res.json())
      .then((allData) => {
        setAllDataSetByUser(allData);
      });
  }, [email]);

  // Handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9a10-server-side-mdsabbiralmamon.vercel.app/spot/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setAllDataSetByUser(allDataSetByUser.filter(spotAddedByUser => spotAddedByUser._id !== id))
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the file.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting file:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the file.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="container mx-auto my-24">
      <div>
        <h2 className="font-bold font-satisfy text-theme_primary text-5xl text-center">
          My List
        </h2>
        <p className="text-lg text-theme_primary text-center">
          Tourist Spots Added By Me: {allDataSetByUser.length}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Spot Name</th>
              <th>Country Name</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {allDataSetByUser.map((spotData) => (
              <tr key={spotData._id}>
                <th>{spotData.tourists_spot_name}</th>
                <td>{spotData.country_Name}</td>
                <td>{spotData.location}</td>
                <td>
                  <Link to ={`/update-tourist-spot/${spotData._id}`}><button className="btn btn-warning mx-4">Update</button></Link>
                  <button onClick={() => handleDelete(spotData._id)} className="btn btn-error">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
