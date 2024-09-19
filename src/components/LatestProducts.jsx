import React from "react";
import "./latestProducts.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import ProductCard from "./ProductCard";
import { PulseLoader } from "react-spinners";

function LatestProducts() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="services">
        <div className="part">
          <i className="ri-truck-fill"></i>
          <h2>Free Shipping</h2>
          <h5>Shipping to your home for free</h5>
        </div>
        <div className="part">
          <i className="ri-secure-payment-line"></i>
          <h2>Safe delivery</h2>
          <h5>Safe and sound delivery to home</h5>
        </div>
        <div className="part">
          <i className="ri-lock-star-fill"></i>
          <h2>Secure Payment</h2>
          <h5>Do payment without worrying</h5>
        </div>
        <div className="part">
          <i className="ri-home-office-line"></i>
          <h2>Money Back Guarantee</h2>
          <h5>100% money back guarantee</h5>
        </div>
      </div>
      <div className="mainParent">
        <div className="latestProducts">
          <h4>Latest Products</h4>
          <h5>
            <NavLink to={"/products"}>View All Products</NavLink>
          </h5>
        </div>
        <div className="cardMain">
          {!products.length ? (
            <PulseLoader
              color="#ec4243"
              margin={5}
              size={20}
              speedMultiplier={1}
            />
          ) : (
            products.length > 0 &&
            products.slice(0, 8).map((item) => (
              <NavLink to={`/products/${item.id}`} key={item.title}>
                <ProductCard itemData={item} />
              </NavLink>
            ))
          )}
        </div>
        <div className="purchase">
          <div>
            <h3>Products of your choice and need</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              possimus soluta voluptatum necessitatibus voluptas suscipit?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestProducts;
