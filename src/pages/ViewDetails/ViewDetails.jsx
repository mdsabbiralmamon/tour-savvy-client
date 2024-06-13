import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();

  //   declaring state for holding spot data
  const [spotData, setSpotData] = useState({
    _id: "662cf095ce90c106c498ec7c",
    image: "https://i.ibb.co/vshYyzw/image.png",
    tourists_spot_name: "Sundarban",
    country_Name: "Bangladesh",
    location: "Khulna Division, Bangladesh",
    short_description:
      "Sundarban is the largest mangrove forest in the world, known for its Bengal tigers and diverse wildlife.",
    average_cost: "75000",
    seasonality: "Winter",
    travel_time: "8 h",
    totalVisitorsPerYear: "1 million",
    email: "md.sabbiralmamon@gmail.com",
    name: "Md Sabbir Al Mamon",
  });

  // fetching data from server for accessing details
  useEffect(() => {
    fetch(`https://b9a10-server-side-mdsabbiralmamon.vercel.app/spot/${id}`)
      .then((res) => res.json())
      .then((spotData) => {
        setSpotData(spotData);
        // console.log("data from server", spotData);
      });
  }, [id]);

  //    destructuring spots data
  const {
    image,
    tourists_spot_name,
    country_Name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
  } = spotData;

  return (
    <div className="container mx-auto my-20 text-theme_primary">
      <h2 className="font-bold font-satisfy text-5xl my-20 text-center">
        Want to visit {tourists_spot_name} ? Let us give you more detailed
        information.
      </h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={tourists_spot_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{}</h2>
          <p>
            <span className="font-bold">ID : </span> {id}{" "}
          </p>
          <p>
            <span className="font-bold">Tourist Spot Name : </span>{" "}
            {tourists_spot_name}{" "}
          </p>
          <p>
            <span className="font-bold">Country Name : </span> {country_Name}{" "}
          </p>
          <p>
            <span className="font-bold">Location : </span> {location}{" "}
          </p>
          <p>
            <span className="font-bold">Description : </span>{" "}
            {short_description}{" "}
          </p>
          <p>
            <span className="font-bold">Average Cost : </span> {average_cost}
            {"  Tk"}
          </p>
          <p>
            <span className="font-bold">Seasonality : </span> {seasonality}{" "}
          </p>
          <p>
            <span className="font-bold">Travel Time from Dhaka : </span>{" "}
            {travel_time}{" "}
          </p>
          <p>
            <span className="font-bold">Total Visitors PerYear : </span>{" "}
            {totalVisitorsPerYear}{" "}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Tickets Now</button>
            <button className="btn btn-info text-white">Add to wishList</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
