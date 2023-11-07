import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { fetchData } from "../../../../Redux/features/Product/ProductSlice";

export default function ProductEdit() {
  const { id } = useParams();
  //   console.log("🚀 ~ file: ProductEdit.jsx:11 ~ ProductEdit ~ id:", id);
  const { product } = useSelector((state) => state?.productReducer);
  //   console.log("🚀 ~ file: ProductEdit.jsx:12 ~ ProductEdit ~ product:", product)

  let [data, setdata] = useState({});
  console.log("🚀 ~ file: ProductEdit.jsx:16 ~ ProductEdit ~ data:", data);

  useEffect(() => {
    const newData = product.filter((e) => {
      return e._id == id;
    });
    setdata(newData);
    // console.log("🚀 ~ file: ProductEdit.jsx:19 ~ newData ~ newData:", newData)
  }, [id]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);
  return (
    <>
      {" "}
      <div>
        <Button color="danger" onClick={toggle}>
          Click Me
        </Button>

        <Modal isOpen={modal} fade={true} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <div className="container mt-5">
              <h2 className="mb-4">Add a New Product</h2>
              <form className="d-grid  ">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={data[0]?.title}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="brand" className="form-label">
                    Brand:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="brand"
                    name="brand"
                  />
                </div>
                <div className="mb-3  ">
                  <label htmlFor="gender" className="form-label me-2">
                    Gender:
                  </label>
                  <label htmlFor="">male</label>
                  <input type="radio" className="m-2" />
                  <label htmlFor="">female</label>
                  <input type="radio" className="m-2" />
                  <label htmlFor="">other</label>
                  <input type="radio" className="m-2" />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="thumbnail" className="form-label">
                    Thumbnail URL:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="thumbnail"
                    name="thumbnail"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="discountPercentage" className="form-label">
                    Discount Percentage:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="discountPercentage"
                    name="discountPercentage"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category:
                  </label>

                  <Select isMulti />
                </div>
                <div className="mb-3">
                  <label htmlFor="color" className="form-label">
                    Color:
                  </label>
                  <Select isMulti />
                </div>

                <div className="mb-3">
                  <label htmlFor="availableStock" className="form-label">
                    Available Stock:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="availableStock"
                    name="availableStock"
                  />
                </div>
              </form>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary">submit</Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
