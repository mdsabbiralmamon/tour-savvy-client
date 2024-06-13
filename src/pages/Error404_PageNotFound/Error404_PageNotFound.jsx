import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import error from "../../assets/lottie/NotFound.json";

const Error404_PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex justify-center items-center text-center">
      <div>
        <div>
          <Lottie  className=" h-96 w-full" animationData={error} />
        </div>
        <Link
          to={".."}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <button className="btn btn-primary"> Go Back </button>
        </Link>
      </div>
    </div>
  );
};

export default Error404_PageNotFound;
