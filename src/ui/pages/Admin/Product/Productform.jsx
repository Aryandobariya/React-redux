// export default ProductForm;
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Select from "react-select";
import {
  addproduct,
  update,
} from "../../../../Redux/features/Product/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ModalExample(props) {
  console.log("🚀 ~ file: Productform.jsx:10 ~ ModalExample ~ props:", props);
  const location = useLocation();
  // const newdata = location.state;
  // const allData = useSelector((state) => state?.productReducer);

  const toggle = () => props.setModal(!props.modal);

  let [product, setproduct] = useState({
    title: "",
    description: "",
    brand: "",
    gender: "",
    price: "",
    thumbnail: "",
    discountPercentage: "",
    category: [],
    color: [],
    // size: [],
    availableStock: "",
  });
  useEffect(() => {
    if (props.newData && props.newData.data) {
      setproduct(props.newData.data);
    }
  }, [props.newData]);
  

  const options = [
    { value: "airpod", label: "airpod" },
    { value: "nickebands", label: "nickebands" },
    { value: "other", label: "other" },
  ];
  const colors = [
    { value: "black", label: "black" },
    { value: "white", label: "white" },
    { value: "red", label: "red" },
  ];

  function data(e) {
    const selectedValues = e.map((option) => option.value);

    setproduct({ ...product, category: selectedValues });
  }
  function colordata(e) {
    const selectedValues = e.map((option) => option.value);

    setproduct({ ...product, color: selectedValues });
  }
  const dispatch = useDispatch();
  const handelsubmit = () => {
    dispatch(addproduct(product));
    const priceAsNumber = parseFloat(product.price);
    const discountPercentageAsNumber = parseFloat(product.discountPercentage);

    if (!isNaN(priceAsNumber) && !isNaN(discountPercentageAsNumber)) {
      setproduct({
        ...product,
        price: priceAsNumber,
        discountPercentage: discountPercentageAsNumber,
      });
    } else {
      if (isNaN(priceAsNumber)) {
      }
      if (isNaN(discountPercentageAsNumber)) {
      }
    }
  };
  // console.log(
  //   "🚀 ~ file: Productform.jsx:30 ~ ModalExample ~ product:",
  //   product
  // );

  const updateData = () => {
    axios({
      method: "put",
      url: `http://localhost:9999/product/update/${product._id}`,
      data: product,
    }).then((resData) => {
      console.log("🚀 ~ file: Productform.jsx:85 ~ updateData ~ resData:", resData);
  
      // const index = parseInt(props.newData.index); 
  
      dispatch(
        update({
          Data: resData.data.data,
          index: props.newData.index, // Use the converted index
        })
      );
    });
    props.setModal(false)
  };
  

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>

      <Modal isOpen={props.modal} fade={true} toggle={toggle}>
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
                  value={product.title}
                  onChange={(e) =>
                    setproduct({ ...product, title: e.target.value })
                  }
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
                  value={product.description}
                  onChange={(e) =>
                    setproduct({ ...product, description: e.target.value })
                  }
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
                  value={product.brand}
                  onChange={(e) =>
                    setproduct({ ...product, brand: e.target.value })
                  }
                />
              </div>
              <div className="mb-3  ">
                <label htmlFor="gender" className="form-label me-2">
                  Gender:
                </label>
                <label htmlFor="">male</label>
                <input
                  checked={product.gender === "male"}
                  type="radio"
                  className="m-2"
                  onChange={() => setproduct({ ...product, gender: "male" })}
                />
                <label htmlFor="">female</label>
                <input
                  checked={product.gender === "female"}
                  type="radio"
                  className="m-2"
                  onChange={() => setproduct({ ...product, gender: "female" })}
                />
                <label htmlFor="">other</label>
                <input
                  checked={product.gender === "other"}
                  type="radio"
                  className="m-2"
                  onChange={() => setproduct({ ...product, gender: "other" })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={product.price}
                  name="price"
                  onChange={(e) =>
                    setproduct({ ...product, price: e.target.value })
                  }
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
                  value={product.thumbnail}
                  onChange={(e) =>
                    setproduct({ ...product, thumbnail: e.target.value })
                  }
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
                  value={product.discountPercentage}
                  name="discountPercentage"
                  onChange={(e) =>
                    setproduct({
                      ...product,
                      discountPercentage: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category:
                </label>

                <Select
                  defaultValue={options?.filter?.((e) =>
                    product?.category?.includes(e.value)
                  )}
                  options={options}
                  isMulti
                  onChange={(e) => data(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label">
                  Color:
                </label>
                <Select
                  options={colors}
                  isMulti
                  defaultValue={colors?.filter?.((e) =>
                    product?.color?.includes(e.value)
                  )}
                  onChange={(e) => colordata(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="availableStock" className="form-label">
                  Available Stock:
                </label>
                <input
                  type="number"
                  value={product.availableStock}
                  className="form-control"
                  id="availableStock"
                  name="availableStock"
                  onChange={(e) =>
                    setproduct({ ...product, availableStock: e.target.value })
                  }
                />
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => handelsubmit()}>
            submit
          </Button>
          <Button color="secondary" onClick={() => updateData()}>
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
