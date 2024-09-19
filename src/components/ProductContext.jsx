import axios from "axios";
import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=28&skip=10")
      .then((response) => {
        setProducts(response?.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setProductsCategory(res.data));
  }, []);

  const handleAdd = (item) => {
    if (cart.some((itemCheck) => item.id === itemCheck.id)) {
      toast.warn("Product already added to cart!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setCart((prevItem) => [...prevItem, item]);
      toast.success("Product added to cart!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // const handleSearch = (e) => {
  //   console.log(e.target.value);
  //   const SearchProducts = products.map((searchItem) => {
  //    console.log( searchItem);
  //   })
  // setProducts(SearchProducts);
  // }

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "All") {
      axios
        .get(`https://dummyjson.com/products/category/${e.target.value}`)
        .then((res) => {
          console.log(e.target.value, "hello");
          setProducts(res.data);
          console.log(products);
        });
    }
  };

  function handleRemove(index) {
    console.log("eh");
    cart.splice(index, 1);
    setCart((prevItem) => [...prevItem]);
    console.log(cart);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        productsCategory,
        handleAdd,
        cart,
        handleChange,
        handleRemove,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
