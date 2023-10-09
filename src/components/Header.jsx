import React from "react";
import img1 from "../assets/Layer 156.svg";
import img2 from "../assets/Vector.svg";
import img3 from "../assets/Vector (1).svg";
import img4 from "../assets/Vector (2).svg";
import img5 from "../assets/Group 6.svg";

const Header = () => {
  return (
    <nav>
      <div className="div1">
        <img src={img1} alt="" />
        <p className="p1">Free Delivery</p>
        <div className="line"></div>
        <p className="p2"> Return Policy</p>
      </div>
      <div className="div2">
        <p className="p3">Login</p>
        <p className="p4">Follow Us</p>
        <div className="divimages">
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
