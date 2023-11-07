import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../Redux/features/authSlice";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    number: "",
  });
  const [add, setadd] = useState({
    add: "",
    city: "",
    state: "",
    zip: "",
  });
  const navigate = useNavigate();
  // console.log("🚀 ~ file: Signup.jsx:11 ~ Signup ~ formData:", formData);
  // console.log("🚀 ~ file: Signup.jsx:17 ~ Signup ~ add:", add);
const dispatch = useDispatch();
  function addData(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9999/user/signUp",
      data: {
        ...formData,
        address: [add],
      },
    }).then((resData) => {
      console.log("🚀 ~ file: Signup.jsx:33 ~ addData ~ resData:", resData);
      dispatch(login(resData?.data))
      navigate("/")

    });
  }

  // localStorage.setItem("REGuser", JSON.stringify(data));
  // navigate("/Login");
  // console.log("🚀 ~ file: Signup.jsx:22 ~ addData ~ data:", data);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here, e.g., send data to a server.
  //   console.log(formData);
  // };

  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center">Sign Up</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e?.target.value })
            }
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e?.target.value })}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e?.target.value })
            }
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e?.target.value })
            }
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Number:
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e?.target.value })
            }
            className="form-control"
            required
          />
        </div>
        {/* address */}
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            address:
          </label>
          <input
            type="text"
            id="number"
            name="add"
            value={add.add}
            className="form-control"
            required
            onChange={(e) => setadd({ ...add, add: e?.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            city:
          </label>
          <input
            type="text"
            id="number"
            name="city"
            value={add.city}
            className="form-control"
            required
            onChange={(e) => setadd({ ...add, city: e?.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            state:
          </label>
          <input
            type="text"
            id="number"
            name="state"
            value={add.state}
            className="form-control"
            required
            onChange={(e) => setadd({ ...add, state: e?.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            zip:
          </label>
          <input
            type="text"
            id="number"
            name="zip"
            value={add.zip}
            className="form-control"
            required
            onChange={(e) => setadd({ ...add, zip: e?.target.value })}
          />
        </div>

        <button
          onClick={ addData}
          // type="submit"
          className="btn btn-primary"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
