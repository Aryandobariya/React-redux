import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  topFiveData,
} from "../../../Redux/features/Product/ProductSlice";
import "./index.css";
import Cardd from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Shope() {
  const [product, setproduct] = useState([]);

  let Data = useSelector((state) => state?.productReducer?.product);
  let newdata = Data.filter((e) => {
    return e.brand === "boot"

    
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setproduct(newdata);
  }, [Data]);
  useEffect(() => {
    dispatch(fetchData());
    setproduct(newdata);
  }, []);

  // console.log("🚀 ~ file: Shope.jsx:58 ~ product.map ~ product:", product)
  const navigate = useNavigate();
  const redyreact = (id) => {
    navigate(`/productpage/${id}`);
  };
  return (
    <>
      <div className="container-fluid containe">
        <div className="row py-2">
          <div className="col-lg-6 col-md-6 col-sm-12 col-auto ">
            <div className="content ms-5  justify-content-center">
              <h1 className=" true ">True Wireless</h1>
              <h1 className="fw-bold earbuds ms-2">Earbuds</h1>
              <h3 className="p-2">Starting from ₹999*</h3>
              <button className="cart-button ms-3">
                <span className="add-to-cart">Add to cart</span>
                <span className="added">Added</span>
                <i className="fas fa-shopping-cart"></i>
                <i className="fas fa-box"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-auto ">
            <div className="img">
              {" "}
              <img
                src="https://www.boat-lifestyle.com/cdn/shop/files/img_1_desktop_4c81b094-8292-4d54-8b20-5eb3b823a4e6_2000x.png?v=1686650857"
                alt="Wireless Earbuds"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid  "
        style={{ backgroundColor: "beige" }}
      >
        <div className=" d-flex  flex-wrap  justify-content-lg-center  ">
          {product.map((e) => {
            return (
              <div className="hover">
                <Cardd key={e._id} product={e} onclick={redyreact} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
