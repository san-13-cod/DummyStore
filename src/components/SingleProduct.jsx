import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./singleProduct.css";
import axios from "axios";
import { ProductContext } from "../components/ProductContext";
import { ClockLoader } from "react-spinners";
import LazyLoad from "react-lazyload";
import { ToastContainer } from "react-toastify";

function SingleProduct() {
  const { productId } = useParams();
  const { handleAdd } = useContext(ProductContext);
  const [singleProductItem, setSingleProductItem] = useState({});
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`).then((res) => {
      setSingleProductItem(res.data);
      setImages(res.data.images);
    });
  }, [productId]);

  return (
    <>
      <button className={"goBack"} onClick={() => navigate(-1)}>
        Back
      </button>
      {Object.keys(singleProductItem).length === 0 ? (
        <ClockLoader color="#ec4243" size={80} className="loader" />
      ) : (
        <div className="single">
          <div className="left">
            <LazyLoad
              key={singleProductItem.id}
              height={200}
              offset={100}
              placeholder={<ClockLoader />}
            >
              {images.length > 0 && (
                <img
                  src={images[0]}
                  alt={singleProductItem.title}
                  loading="lazy"
                />
              )}
            </LazyLoad>
          </div>
          <div className="right">
            <h1>{singleProductItem.title}</h1>
            <h5>{singleProductItem.description}</h5>
            <h4>${Math.floor(singleProductItem.price)}</h4>
            <button onClick={() => handleAdd(singleProductItem)}>
              Add To Cart
            </button>
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </div>
      )}
    </>
  );
}

export default SingleProduct;
