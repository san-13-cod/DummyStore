import React, { createElement, useState } from "react";
import axios from "axios";
import Slides from "./Slides";
import allProducts from "../Images/AllProducts.jpg";
import "./allProducts.css";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import ProductCard from "./ProductCard";
import { PulseLoader } from "react-spinners";
import { NavLink } from "react-router-dom";

function AllProducts() {
  const { products, productsCategory, handleChange } =
    useContext(ProductContext);

  return (
    <>
      <div className="allProductsParent">
        <Slides
          clas={"allProductsBanner"}
          {...{
            title: "All Products",
            text: "Your Choice, Our SHOP",
            image: allProducts,
          }}
        />
      </div>
      {/* <div className="productFilter">
        <h2>All Products</h2>
        <input type="text" placeholder="Search product" onKeyUp={handleSearch}/>
        <select onChange={handleChange}>
          <option value="All">All</option>
          {productsCategory.map((category, index) => (
            <option value={category.slug} key={category + index}>
              {category.slug}
            </option>
          ))}
        </select>
      </div> */}
      <div className="allProducts">
        {!products.length ? (
          <PulseLoader
            color="#ec4243"
            margin={5}
            size={20}
            speedMultiplier={1}
          />
        ) : (
          products.map((item, index) => (
            <NavLink
              to={`/products/${item.id}`}
              key={item.id || item.description || index}
            >
              <ProductCard itemData={item} />
            </NavLink>
          ))
        )}
      </div>
    </>
  );
}

export default AllProducts;
