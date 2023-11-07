import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/pages/Home/Home";
import About from "../ui/pages/About/About";
import Navbarr from "../ui/components/Navbar/Navbar";
import Login from "../ui/pages/Login/Login";
import Shope from "../ui/pages/Shope/Shope";
import Contect from "../ui/pages/Contact/Contect";
import { Provider } from "react-redux";
import { store } from "../Redux/app/Store";
import Logout from "../ui/pages/Logout/Logout";
import Dashbord from "../ui/pages/Admin/Dashbord/Dashbord";
import Signup from "../ui/pages/Regester/Signup";
import User from "../ui/pages/Admin/User/User";
import Allproduct from "../ui/pages/Admin/Product/Allproduct";
import ProductPage from "../ui/pages/Singleproduct/ProductPage";
import NavUser from "../ui/pages/Navbarauser/NavUser";
import Footer from "../ui/components/Footer/Footer";
import ProductEdit from "../ui/pages/Admin/Product/ProductEdit";
import CartSection from "../ui/pages/Cart/Cartpage";
export default function Routers() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbarr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Shope" element={<Shope />} />
            <Route path="/Contact" element={<Contect />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Signup" element={<Signup />} />

            <Route path="/Dashbord" element={<Dashbord />} />
            <Route path="/User" element={<User />} />
            <Route path="/Allproduct" element={<Allproduct />} />
            <Route path="/productpage/:id" element={<ProductPage />} />
            <Route path="/ProductEdit/:id" element={<ProductEdit />} />
            <Route path="/Usernavbar" element={<NavUser />} />
            <Route path="/cart" element={<CartSection />} />



            <Route path="*" element={<h1>401 not</h1>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </>
  );
}
