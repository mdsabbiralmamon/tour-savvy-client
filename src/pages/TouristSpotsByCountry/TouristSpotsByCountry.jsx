import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import TouristSpotCard from "../../assets/components/TouristSpotCard";
import { FaArrowAltCircleRight } from "react-icons/fa";

const TouristSpotsByCountry = () => {
  const { country } = useParams();
  const allTouristSpots = useLoaderData();
  const [displayCount, setDisplayCount] = useState(6);
  const [sortBy, setSortBy] = useState("");

  const displayTouristSpots = allTouristSpots.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 6);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Sorting system via selected criteria
  let sortedTouristSpots = [...displayTouristSpots];
  if (sortBy === "averageCost") {
    sortedTouristSpots.sort((a, b) => a.average_cost - b.average_cost);
  }

  return (
    <div>
      <div className="container mx-auto my-24">
        <div>
          <h2 className="font-bold font-satisfy text-theme_primary text-5xl text-center">
            Tourists Spots of {country}
          </h2>
          <p className="text-lg text-theme_primary text-center">
            Know more about {country}
            {"'"}s best tourist spots.
          </p>
          {/* Display counts and sort selections */}
          <div className="flex gap-4 justify-center md:justify-between items-center">
            <div>
              <h2>
                Showing data: {displayTouristSpots.length}/
                {allTouristSpots.length}
              </h2>
            </div>
            <div>
              <select
                className="select select-bordered w-full max-w-xs"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="">Sort by</option>
                <option value="averageCost">Average Cost</option>
              </select>
            </div>
          </div>
          <div className="grid gap-8 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sortedTouristSpots.map((touristSpot) => (
              <TouristSpotCard
                key={touristSpot._id}
                touristSpot={touristSpot}
              />
            ))}
          </div>
          {/* Show button only if there are more tourist spots to display */}
          {displayCount < allTouristSpots.length && (
            <div className="flex justify-center">
              <button
                className="btn bg-theme_primary border-theme_secondary text-theme_secondary m-4 hover:text-theme_primary"
                onClick={handleLoadMore}
              >
                Load More <FaArrowAltCircleRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TouristSpotsByCountry;
