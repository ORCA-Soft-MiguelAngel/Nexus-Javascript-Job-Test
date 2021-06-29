import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines, FaTimes, FaRegUserCircle } from "react-icons/fa";
import { BiLogOut, BiWorld } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import UserStore from "../../Stores/UserStore";
import useAuth from "../../Hooks/useAuth";

const Menu: React.FC = () => {
  //CUSTOM HOOKS
  const { singout } = useAuth();

  //STATES
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  //HANDLERS
  //open the mobile menu
  const handleMobileMenu = () => setMobileMenu(!mobileMenu);

  //Logout
  const handleLogout = async () => {
    singout() && window.location.reload();
  };

  return (
    <div className=" bg-blue-600 text-white">
      <div className="flex px-4 mx-auto items-center justify-between desktop-s:px-6 desktop-m:px-8">
        <div className="w-full desktop-s:w-1/4 p-4 flex flex-row items-center justify-between">
          <Link
            to="/dashboard"
            className="text-lg font-semibold tracking-widest uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            <div className="flex justify-center items-center">
              <span className="text-4xl">
                <BiWorld />
              </span>
              <span className="text-3xl tracking-wide ml-2 font-semibold">
                Courier
              </span>
            </div>
          </Link>
          <button
            onClick={handleMobileMenu}
            className="desktop-s:hidden rounded-lg focus:outline-none focus:shadow-outline text-xl"
          >
            {mobileMenu ? <FaTimes /> : <FaGripLines />}
          </button>
        </div>
        {/**lol */}
        <nav className="">
          <ul className="hidden desktop-s:flex justify-end">
            <li className="flex gap-2 justify-center items-center text-lg cursor-pointer px-3 border-r-2">
              <FiPackage />
              <span>Packages</span>
            </li>
            <li className="flex gap-2 justify-center items-center text-lg cursor-pointer px-3 border-r-2">
              <FaRegUserCircle />
              <span>{UserStore.getUser().fullName}</span>
            </li>
            <li
              onClick={handleLogout}
              className="flex gap-2 justify-center items-center text-lg cursor-pointer pl-3"
            >
              <BiLogOut />
              <span>Log Out</span>
            </li>
          </ul>
        </nav>
      </div>
      {mobileMenu && (
        <div className="px-8 pb-3">
          <ul className="desktop-s:hidden">
            <li className="flex gap-2 items-center text-lg cursor-pointer py-3">
              <FaRegUserCircle />
              <span>Full Name Of User</span>
            </li>
            <li className="flex gap-2 items-center text-lg cursor-pointer py-3">
              <FiPackage />
              <span>Packages</span>
            </li>

            <li
              onClick={handleLogout}
              className="flex gap-2 items-center text-lg cursor-pointer py-3"
            >
              <BiLogOut />
              <span>Log Out</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
