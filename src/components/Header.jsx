import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextAPI";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openSearchBox, setOpenSearchBox] = useState(false);

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery.length > 0
    )
      navigate(`/searchResult/${searchQuery}`);
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleOpenSearchBox = () => {
    setOpenSearchBox(!openSearchBox);
  };

  const { pathname } = useLocation();

  const pageName = pathname.split("/").filter(Boolean)?.[0];
  console.log(pageName);

  return (
    <>
      <div
        className="sticky top-0 py-3 z-10 flex flex-row items-center justify-between h-14 
    px-[16px] md:px-5 bg-white dark:bg-[#0F0F0F]"
      >
        {loading && <Loader />}
        <div className=".left h-5 flex items-center ">
          <div
            className="menu mr-4 md:hidden cursor-pointer h-10 w-10 flex 
          items-center justify-center rounded-full
         hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-[18px]" />
            ) : (
              <SlMenu className="text-white text-[18px]" />
            )}
          </div>

          <Link to="/" className="h-5 flex items-center">
            <img className="h-full hidden dark:md:block" src={ytLogo} alt="" />
            <img
              className={`${
                openSearchBox ? "hidden" : "flex"
              } h-full md:hidden`}
              src={ytLogoMobile}
              alt=""
            />
          </Link>
        </div>

        <div className="group flex items-center ">
          <div
            className={`${
              openSearchBox ? "flex rounded-r-3xl mr-2" : "hidden "
            } md:flex h-10 md:marker:ml-10 md:pl-5 border mr-0 border-[#303030] rounded-l-3xl md:rounded-r-none group-focus-within:border-blue-500 group-focus-within:ml-5 group-focus-within:pl-0`}
          >
            <div className="w-10 items-center justify-center hidden group-focus-within:flex">
              <IoIosSearch className="text-white text-xl" />
            </div>
            <input
              type="text"
              className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 md:pr-0 w-44 group-focus-within:pl-0 md:w-64 lg:w-[500px]"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              placeholder="Search"
              value={searchQuery}
            />
          </div>
          <button
            className={`${
              openSearchBox ? "flex" : "hidden"
            } hidden w-[40px] md:w-[60px] h-10  md:flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]`}
            onClick={() => searchQueryHandler("searchButton")}
          >
            <IoIosSearch className="text-white text-xl" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-6 ">
          <button
            className="md:hidden flex items-center justify-center hover:bg-[#303030]/[0.6] h-10 w-10 rounded-full"
            onClick={() => {
              searchQueryHandler("searchButton");
              handleOpenSearchBox();
            }}
          >
            <IoIosSearch className="text-white text-xl" />
          </button>
          <div className="hidden md:flex items-center gap-3">
            <div className="flex justify-center items-center cursor-pointer hover:bg-[#303030]/[0.6] h-10 w-10 rounded-full">
              <RiVideoAddLine className="text-white text-2xl" />
            </div>
            <div className="flex justify-center items-center cursor-pointer hover:bg-[#303030]/[0.6] h-10 w-10 rounded-full">
              <FiBell className="text-white text-2xl" />
            </div>
          </div>
          <div className="w-8 h-8 cursor-pointer rounded-full overflow-hidden mr-2 md:mr-4">
            <img
              src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
