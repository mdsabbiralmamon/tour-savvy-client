import { Link, useLoaderData } from "react-router-dom";
import Slider from "../../assets/components/Slider/Slider";
import TouristSpotCard from "../../assets/components/TouristSpotCard";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Map from "../../assets/components/Map/Map";
import { useEffect, useState } from "react";
import CountryCard from "../../assets/components/CountryCard";
import Marquee from "react-fast-marquee";

// slider photos
import logo1 from "../../assets/images/logos/airbnb.png"
import logo2 from "../../assets/images/logos/facebook.svg"
import logo3 from "../../assets/images/logos/google.png"
import logo4 from "../../assets/images/logos/qatar.png"
import logo5 from "../../assets/images/logos/twitter.png"

const Home = () => {
  const touristSpots = useLoaderData().slice(0, 6);
  // console.log(touristSpots);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://b9a10-server-side-mdsabbiralmamon.vercel.app/country")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // console.log(country);

  return (
    <div>
      <div className="mb-24">
        <Slider />
      </div>
      <div className="container mx-auto my-24">
        <div>
          <h2 className="font-bold font-satisfy text-theme_primary text-5xl text-center">
            Tourists Spots
          </h2>
          <p className="text-lg text-theme_primary text-center">
            Know more about south east asia{"'"}s best tourist spots.
          </p>
          <div className="grid gap-8 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {touristSpots.map((touristSpot) => (
              <TouristSpotCard
                key={touristSpot._id}
                touristSpot={touristSpot}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Link to="/all-tourists-spot">
              <button className="btn bg-theme_primary border-theme_secondary text-theme_secondary m-4 hover:text-theme_primary">
                View All <FaArrowAltCircleRight />{" "}
              </button>
            </Link>
          </div>
        </div>
        <div className=" my-24">
          <h2 className="font-bold font-satisfy text-5xl mt-20 text-center text-theme_primary">
            Our Honorable Sponsors
          </h2>
          <p className="font-bold mb-20 mt-4 text-center text-theme_primary">
            We had worked with world class companies like :
          </p>
          <Marquee pauseOnHover={true}>
            <img className="h-16 my-8 mx-14" src={logo1} alt="sponsor logo" />
            <img className="h-16 my-8 mx-14" src={logo2} alt="sponsor logo" />
            <img className="h-16 my-8 mx-14" src={logo3} alt="sponsor logo" />
            <img className="h-16 my-8 mx-14" src={logo4} alt="sponsor logo" />
            <img className="h-16 my-8 mx-14" src={logo5} alt="sponsor logo" />
          </Marquee>
        </div>
        <div className=" my-24">
          <h2 className="font-bold font-satisfy text-5xl mt-20 text-center text-theme_primary">
            Countries
          </h2>
          <p className="font-bold mb-20 mt-4 text-center text-theme_primary">
            Find Tourist Spots based on your favorite country
          </p>
          <div className="grid gap-8 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <CountryCard key={country._id} country={country} />
            ))}
          </div>
        </div>
      </div>
      <div className=" my-24">
        <h2 className="font-bold font-satisfy text-5xl mt-20 text-center text-theme_primary">
          Find Us On
        </h2>
        <p className="font-bold mb-20 mt-4 text-center text-theme_primary">
          You can come and talk with us in our more than 500 outlets beside you
        </p>
        <Map />
      </div>
    </div>
  );
};

export default Home;
