import React, { useRef, useState } from "react";
import man from "../assets/home-man.png";
import manStar from "../assets/home-man-star.png";
import arrow from "../assets/home-arrow.svg";
import footerArrow from "../assets/home-footer-star.svg";
import navStar from "../assets/home-nav-star.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import navOpen from '../assets/nav-open.svg';
import navClose from '../assets/nav-cross.svg';
import { HashLink } from "react-router-hash-link";


const Home = () => {
  const navArr = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "PRODUCT 1", id: "p1" },
        { name: "PRODUCT 2", id: "p2" },
        { name: "PRODUCT 3", id: "p3" },
        { name: "PRODUCT 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  // const [hideNav, setHideNav] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const [showNav, setShowNav] = useState("navbar");

  return (
    <div id="home">
      <img src={navStar} alt="" className="nav-star" />
      <div className="nav-head">
        <h1>ShopKart</h1>
        <div>
          <p style={{ marginRight: "10px" }}>WISHLIST (0) </p>
          <p>BAG (0)</p>
        </div>
        <button onClick={()=> setShowNav("show-nav")}>
          <img src={navOpen} alt="" />
        </button>
      </div>

      <div className={`${showNav}`}>
        <ul>
          {navArr.map((item) => {
            if (!item.child) {
              return (
                <li href={item.id}>
                  <a>{item.name}</a>
                </li>
              );
            } else {
              return (
                <li href={item.id} onClick={toggleSubMenu}>
                  <a>{item.name}</a>
                  {isSubMenuOpen && (
                    <SubMenu listItems={item.child} key={item.child.id} />
                  )}
                </li>
              );
            }
          })}
        </ul>
        <button onClick={()=>setShowNav("navbar")}>
          <img src={navClose} alt="" />
        </button>
      </div>

      <div className="lower-home">
        <div className="headings">
          <h1 className="fresh">Fresh</h1>
          <h1 className="two">2022</h1>
          <h1 className="look">Look</h1>
        </div>
        
        <div className="orange-banner">
        <img src={man} alt="" className="man" />
        <img src={manStar} alt="" className="man-star" />

          <p>OREGON JACKET</p>
          <span>$124</span>
        </div>

        <img src={footerArrow} alt="" className="footer-star" />

        <div className="footer-home">
          <div className="border-items">
            <a href="#">See more</a>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SubMenu = ({ listItems }) => (
  <div style={{ border: "1px solid white" }}>
    {listItems.map((items) => (
      <li
        href={items.id}
        style={{
          margin: "6px 0px",
          marginRight: "29px",
        }}
      >
        <a style={{ font: "300 14px 'work sans" }}>{items.name}</a>
      </li>
    ))}
  </div>
);

export default Home;
