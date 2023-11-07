import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Productpage.css";
import { useDispatch } from "react-redux";
import { addcart, cartData } from "../../../Redux/features/Card/cardslice";

export default function ProductPage() {
  let [data, setData] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartData());
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:9999/product/getProductById/${id}`)
      .then((resData) => {
        setData(resData.data.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  const addToCart = (data) => {
    console.log("🚀 data:", data)
    axios({
      method: "post",
      url: "http://localhost:9999/cart/create",
      data: {
        products: [
          {
            productId: data?._id,
          
          },
        ],
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((resData) => {
        console.log("🚀 ~ file: ProductPage.jsx:44 ~ .then ~ resData:", resData.data)
        dispatch(addcart(resData?.data));
      })
      .catch((err) => toast.error(err?.message));
  };


  return (
    <>
      <html>
        <body>
          <main>
            <div class="card">
              <div class="card__title">
                <div class="icon">
                  <a href="">
                    <i class="fa fa-arrow-left"></i>
                  </a>
                </div>
                <h3>New products</h3>
              </div>
              <div class="card__body">
                <div class="half">
                  <div class="featured_text">
                    <h2>{data.title}</h2>
                    <p class="price">Rs-{data.price}</p>
                  </div>
                  <div class="image">
                    <img src={data.thumbnail} alt="" />
                  </div>
                </div>
                <div class="half">
                  <div class="description">
                    <p>{data.description}</p>
                  </div>
                  <span class="stock">
                    <i class="fa fa-pen"></i> In stock
                  </span>
                  <div class="reviews">
                    <ul class="stars">
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <span>(64 reviews)</span>
                  </div>
                </div>
              </div>
              <div class="card__footer">
                <div class="recommend">
                  <p>Recommended by</p>
                  <h3>{data.brand}</h3>
                </div>
                <div class="action">
                  <button type="button" onClick={() => addToCart(data)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </main>
        </body>
      </html>
    </>
  );
}
