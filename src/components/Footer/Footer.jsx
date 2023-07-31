import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="category">
          <h1>Categories</h1>
          <p>
            <Link to="/products/women">Women</Link>
          </p>
          <p>
            <Link to="/products/men">Men</Link>
          </p>
          <p>
            <Link to="/products/shoes">Shoes</Link>
          </p>
          <p>
            <Link to="/products/accessories">Accessories</Link>
          </p>
          <p>
            <Link to="/products/new_arrivals">New Arrivals</Link>
          </p>
        </div>
        <div className="links">
          <h1>Links</h1>
          <p>
            <Link to="/products">FAQ</Link>
          </p>
          <p>
            <Link to="/products">Pages</Link>
          </p>
          <p>
            <Link to="/products">Stores</Link>
          </p>
          <p>
            <Link to="/products">Compare</Link>
          </p>
          <p>
            <Link to="/products">Cookies</Link>
          </p>
        </div>
        <div className="about">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia amet
            culpa sequi saepe quod ipsam iusto nihil, eius ratione, impedit
            provident ipsa consequatur voluptatibus, commodi blanditiis
            dignissimos odit consectetur in!
          </p>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
            repellendus corporis? Id quia unde reprehenderit sunt earum ea
            voluptate facilis laboriosam, cupiditate mollitia tempore distinctio
            culpa optio explicabo, labore ullam?
          </p>
        </div>
        <div className="rights">© LAMASTORE. All rigths reserved</div>
      </div>
    </>
  );
};

export default Footer;
