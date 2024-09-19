import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
import ContactUs from "./components/ContactUs.jsx";
import AllProducts from "./components/AllProducts.jsx";
import Footer from "./components/Footer.jsx";
import SingleProduct from "./components/SingleProduct.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/products/:productId",
        element: <SingleProduct />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
