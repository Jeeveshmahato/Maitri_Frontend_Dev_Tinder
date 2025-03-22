import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl } from "../Utiles/Constants";
import { removeLoginUser } from "../Utiles/userAuthSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginedUser = useSelector((store) => store?.userAuth?.loginDetails);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BaseUrl + "/logout", {
        withCredentials: true,
      });
      dispatch(removeLoginUser());
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            daisyUI
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={loginedUser?.img_Url}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/editProfile" className="justify-between">
                  Edit Profile
                  {/* <span className="badge">New</span> */}
                </Link>
              </li>
              <li>
                <Link to="/pendingrequests">Pending Requests</Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link onClick={(e) => handleLogout(e)}>Logout</Link>
              </li>
            </ul>
          </div>
          {loginedUser && <p>{loginedUser?.firstName}</p>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
