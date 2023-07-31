import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import Cart from "../Cart/Cart";

const Navbar = ({ cartItems, removeItem }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <>
      <div className="navContainer">
        <div className="left">
          <div className="img">
            <img
              src="https://www.pngmart.com/files/13/American-Flag-Logo-PNG-Picture.png"
              alt=""
            />
            <KeyboardArrowDownIcon />
          </div>

          <div className="img">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className="product">
            <Link to="/products/men">Men</Link>
          </div>

          <div className="product">
            <Link to="/products/women">Women</Link>
          </div>

          <div className="product">
            <Link to="/products/shoes">Shoes</Link>
          </div>

          <div className="product">
            <Link to="/products/accessories">Accessories</Link>
          </div>
        </div>

        <div className="left-menu">
          <div className="arrow" onClick={handleMenu}>
            {openMenu ? (
              <KeyboardArrowUpOutlinedIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>
          <div className={`${openMenu ? "open" : "closed"}`}>
            <div className="img" onClick={handleMenu}>
              <Link>
                <img
                  src="https://www.pngmart.com/files/13/American-Flag-Logo-PNG-Picture.png"
                  alt=""
                />
              </Link>
              <KeyboardArrowDownIcon />
            </div>

            <div className="img" onClick={handleMenu}>
              <Link>
                <span>USD</span>
              </Link>
              <KeyboardArrowDownIcon />
            </div>

            <div className="product" onClick={handleMenu}>
              <Link to="/products/men">Men</Link>
            </div>

            <div className="product">
              <Link to="/products/women" onClick={handleMenu}>
                Women
              </Link>
            </div>

            <div className="product">
              <Link to="/products/children" onClick={handleMenu}>
                Children
              </Link>
            </div>

            <div className="product">
              <Link to="/products/accessories" onClick={handleMenu}>
                Accessories
              </Link>
            </div>
          </div>
        </div>
        <div className="center">
          <Link to="/">
            <h1> LAMASTORE </h1>
          </Link>
        </div>
        <div className="right">
          <div>
            <Link to="/">Homepage</Link>
          </div>

          <div>
            <Link to="/about">About</Link>
          </div>

          <div>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <Link to="/stores">Stores</Link>
          </div>
          <SearchIcon className="icon" />
          <PersonOutlineOutlinedIcon className="icon" />
          <FavoriteBorderOutlinedIcon className="icon" />
          <div className="cartButton">
            <ShoppingCartOutlinedIcon
              onClick={handleOpenCart}
              className="icon"
            />
            <span onClick={handleOpenCart}>{cartItems.length}</span>
            {openCart && (
              <div className="cart">
                <Cart cartItems={cartItems} removeItem={removeItem} />
              </div>
            )}
          </div>
        </div>

        <div className="right-icons">
          <div>
            <Link to="/">
              <HomeOutlinedIcon className="icon" />
            </Link>
          </div>
          <div>
            <Link to="/stores">
              <StoreOutlinedIcon className="icon" />
            </Link>
          </div>
          <SearchIcon className="icon" />
          <PersonOutlineOutlinedIcon className="icon" />
          <FavoriteBorderOutlinedIcon className="icon" />
          <div className="cartButton">
            <ShoppingCartOutlinedIcon
              onClick={handleOpenCart}
              className="icon"
            />
            <span onClick={handleOpenCart}>{cartItems.length}</span>
            {openCart && (
              <div className="cart">
                <Cart cartItems={cartItems} removeItem={removeItem} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
