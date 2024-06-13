import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const style = ({ isActive }) => {
    return isActive
      ? {
          backgroundColor: "transparent",
          borderBottom: "2px solid #657A42",
          borderRadius: "0px",
          color: "#657A42",
          fontWeight: "bold",
        }
      : {
          backgroundColor: "transparent",
          color: "#657A42",
          fontWeight: "normal",
        };
  };

  const navLink = (
    <>
      <li>
        <NavLink style={style} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink style={style} to="/all-tourists-spot">
          All Spots
        </NavLink>
      </li>
      <li>
        <NavLink style={style} to="/add-tourist-spot">
          Add Spots
        </NavLink>
      </li>
      <li>
        <NavLink style={style} to="/my-list">
          My List
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser();
  };

  const profileLink = (
    <>
      {user ? (
        <>
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user.displayName}
            data-tooltip-place="top"

            className="z-20"
          >
            {/* <div className="tooltip tooltip-bottom z-20 flex items-center flex-col lg:flex-row" data-tip={user.displayName}> */}
            <img
              src={user.photoURL}
              alt="Profile"
              className="rounded-full m-2 h-24 w-24 lg:h-10 lg:w-10 lg:mr-2"
            />
            {/* </div> */}
            <Tooltip id="my-tooltip" />
          </a>
          <button onClick={handleLogOut} className="btn">
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to="/signin" className="btn">
            Sign In
          </NavLink>
          <NavLink to="/signup" className="btn btn-primary ml-2">
            Sign Up
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
            {profileLink}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-theme_primary text-4xl">
          TourSavvy
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end hidden lg:flex">{profileLink}</div>
    </div>
  );
};

export default Navbar;
