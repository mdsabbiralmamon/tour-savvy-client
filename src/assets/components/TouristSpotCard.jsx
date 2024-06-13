import PropTypes from "prop-types";
import { FaArrowAltCircleRight, FaMoneyCheckAlt } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { MdTimeToLeave } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

const TouristSpotCard = ({ touristSpot }) => {
  const {
    tourists_spot_name,
    image,
    average_cost,
    totalVisitorsPerYear,
    seasonality,
    travel_time,
    _id
  } = touristSpot;
  //   console.log(_id);
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img src={image} alt={tourists_spot_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tourists_spot_name}</h2>
        <div>
          <img className=" rounded-lg" src={image} alt={tourists_spot_name} />
        </div>
        <div className="card-actions justify-between items-center">
          <div className="text-xl">
            <FaMoneyCheckAlt /> {average_cost} Tk
          </div>
          <div className="text-xl">
            <FaPeoplePulling /> {totalVisitorsPerYear}
          </div>
          <div className="text-xl">
            <TiWeatherPartlySunny /> {seasonality}
          </div>
          <div className="text-xl">
            <MdTimeToLeave /> {travel_time}
          </div>
          <Link to = {`/viewDetails/${_id}`}><button className="btn bg-theme_primary border-theme_secondary text-theme_secondary m-4 hover:text-theme_primary">View Details  <FaArrowAltCircleRight /> </button></Link>
        </div>
      </div>
    </div>
  );
};

TouristSpotCard.propTypes = {
  touristSpot: PropTypes.object,
};

export default TouristSpotCard;
