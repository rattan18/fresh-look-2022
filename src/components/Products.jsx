import React, { useEffect, useState } from "react";
import axios from "axios";
import img2 from "../assets/Arrow 1.svg";
import img1 from "../assets/Arrow 2.svg";
import imgStar from "../assets/Star products.svg";
import cardIcon from "../assets/product-card.svg";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const box = document.getElementById("product-list");

  const btnPressedPrev = () => {
    let width = box.clientWidth;
    box.scrollLeft -= width;
  };
  const btnPressedNext = () => {
    let width = box.clientWidth;
    box.scrollLeft += width;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      setProductList(data);
    };

    fetchProducts();
  });

  return (
    <div id="products">
      <div className="header-products">
        <h1>New products</h1>
        <img src={imgStar} alt="" className="star" />
        <div className="arrows">
          <img
            src={img1}
            alt=""
            style={{ paddingRight: "48px" }}
            onClick={btnPressedPrev}
          />
          <img src={img2} alt="" onClick={btnPressedNext} />
        </div>
      </div>

      <div className="products-container">
        <div className="products-category">
          <a href="#products">Apparel</a>
          <a href="#products">Accessories</a>
          <a href="#products">Best Sellers</a>
          <a href="#products">50% off</a>
        </div>

        <div id="product-list">
          {productList.map((item, index) => (
            <Productcard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Productcard = ({key, title, description, image, price}) => (
  <div className="product-card">
    <div className="card-images">
      <img src={image} alt="" />
      <img src={cardIcon} alt="" className="icon" />
    </div>

    <div className="info">
      <p
        style={{
          display: "block",
          font: "600 26px 'Syne'",
          paddingBottom: "8px",
          height: "30px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {title}
      </p>
      <span>{description}</span>
      <p
        style={{
          font: "600 26px 'Syne'",
          color: "black",
          paddingTop: "8px",
        }}
      >
        ${price}
      </p>
    </div>
  </div>
);

export default Products;
