import React, { useContext, useState } from 'react';
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

  const { loading, mobileMenu, setMobileMenu} = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if ((event?.key === "Enter" || event === "searchButton ") && searchQuery.length > 0)
      navigate(`/searchResult/${searchQuery}`)
  }

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu)
  };

  const { pathname } = useLocation();

  const pageName = pathname.split("/").filter(Boolean)?.[0]

  return (
    <>
    <div className='sticky top-0 z-10 flex flex-row items-center justify-between h-14 
    px-[16px] md:px-5 bg-white dark:bg-[#0F0F0F]'>
      {loading && <Loader />}
      <div className='.left h-5 flex items-center'>
        <div className="menu mr-4 md:hidden cursor-pointer h-10 w-10 flex items-center justify-center rounded-full hover:bg-[#303030]/[0.6]" onClick={mobileMenuToggle}>
          {mobileMenu ?
           <CgClose className='text-white text-[18px]'/> :
           <SlMenu className='text-white text-[18px]'/>}
        </div>

        <Link to="/" className='h-5 flex items-center'>
          <img className='h-full hidden dark:md:block' src={ytLogo} alt="" />
          <img className='h-full md:hidden' src={ytLogoMobile} alt="" />
        </Link>
      </div>


      <div className='center'></div>
      <div className='right'></div>
    </div>
    </>
  )
}

export default Header