import PropTypes from "prop-types";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  // console.log(country);

  const { country_Name, featured_Image, short_description } = country;
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img src={featured_Image} alt={country_Name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{country_Name}</h2>
        <p>{short_description}</p>
        <div className="card-actions justify-end">
          <Link to={`/country/${country.country_Name}`}>
            <button className="btn bg-theme_primary border-theme_secondary text-theme_secondary m-4 hover:text-theme_primary">
              View All Tourist Spots <FaArrowAltCircleRight />{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object,
};

export default CountryCard;
