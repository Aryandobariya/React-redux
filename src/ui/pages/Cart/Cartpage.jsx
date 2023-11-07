import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../../../Redux/features/Card/cardslice";
import { fetchData } from "../../../Redux/features/Product/ProductSlice";

const CartSection = () => {
  const { product } = useSelector((state) => state?.productReducer);
  // console.log("🚀 ~ file: Cartpage.jsx:8 ~ CartSection ~ product:", product)

  const { productId } = useSelector((state) => state?.CartReducer.pro);
  // console.log("🚀 ~ file: Cartpage.jsx:12 ~ CartSection ~ productId:", productId)
  const data = useSelector((state) => state?.CartReducer);
  // console.log("🚀  data:", data)

  let [cartdata, setcartdata] = useState([]);
  console.log("🚀 ~ file: Cartpage.jsx:15 ~ CartSection ~ cartdata:", cartdata);

  useEffect(() => {
    const newData = product.filter((e) => {
      return e._id === productId._id;
    });
    setcartdata(newData);
  }, [product]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartData());
  }, []);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart - 2 items</h5>
              </div>
              <div className="card-body">
                {/* <!-- Single item --> */}
                {cartdata?.map?.((e, i) => {
                  return (
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        {/* <!-- Image --> */}
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={e.thumbnail}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </div>
                        {/* <!-- Image --> */}
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        {/* <!-- Data --> */}
                        <p>
                          <strong>{e.category[0]}</strong>
                        
                        </p>
                        <p>Color: {e.color}</p>
                        <p>Size: M</p>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm mb-2"
                          data-mdb-toggle="tooltip"
                          title="Move to the wish list"
                        >
                          <i className="fas fa-heart"></i>
                        </button>
                        {/* <!-- Data --> */}
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        {/* <!-- Quantity --> */}
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <button className="btn btn-primary px-3 me-2">
                            <i className="fas fa-minus"></i>
                          </button>
                          <div className="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              defaultValue="1"
                              type="number"
                              className="form-control"
                            />
                            <label className="form-label" htmlFor="form1">
                              Quantity
                            </label>
                          </div>
                          <button className="btn btn-primary px-3 ms-2">
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        {/* <!-- Quantity --> */}
                        {/* <!-- Price --> */}
                        <p className="text-start text-md-center">
                          <strong>$17.99</strong>
                        </p>
                        {/* <!-- Price --> */}
                      </div>
                    </div>
                  );
                })}

                <hr className="my-4" />

                {/* <!-- Single item --> */}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>$53.98</strong>
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
