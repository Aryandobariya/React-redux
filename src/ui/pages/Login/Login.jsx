import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

// import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome styles if needed
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles if needed
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Label,
} from "reactstrap"; // Import Bootstrap React components if needed
import { login } from "../../../Redux/features/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [user, setuser] = useState({ email: "", password: "" });
  const Navigate = useNavigate();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const dispatch = useDispatch();

  function addData() {
    //  console.log("🚀 ~ file: Login.jsx:18 ~ Login ~ user:", user.email);
    axios
      .post(" http://localhost:9999/user/signin", user)
      .then((renData) => {
        dispatch(login(renData.data));
        // window.screenTop(0, 0)
        if (renData?.data?.data?.userType === "admin") {
          Navigate("/Dashbord");
          toast.success("Login success")
        } else {
          Navigate("/");
        }
      })
      .catch((err) => {
        // alert(err);
        toast.error(err)
      });
  }

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   if (name === 'name') {
  //     setName(value);
  //   } else if (name === 'email') {
  //     setEmail(value);
  //   }
  // };

  return (
    <div>
      <div className="text-center">
        <Button
          color="default"
          className="btn-rounded mb-4"
          onClick={toggleModal}
        >
          Launch Modal Subscription Form
        </Button>
      </div>
      <Modal isOpen={isModalOpen} toggle={toggleModal} size="md">
        <ModalHeader toggle={toggleModal} className="text-center">
          <h4 className="modal-title w-100 font-weight-bold">Subscribe</h4>
        </ModalHeader>
        <ModalBody>
          <div className="md-form mb-5">
            <i className="fas fa-user prefix grey-text"></i>
            <Label
              // className="ms-3"
              data-error="wrong"
              data-success="right"
              for="form3"
            >
              Your name
            </Label>
            <Input
              type="text"
              id="form3"
              className="form-control validate"
              name="name"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e?.target.value })}
            />
          </div>

          <div className="md-form mb-4">
            <i className="fas fa-envelope prefix grey-text"></i>
            <Label
              // className="ms-3"
              data-error="wrong"
              data-success="right"
              for="form2"
            >
              Your password
            </Label>
            <Input
              type="password"
              id="form2"
              className="form-control validate"
              name="pass"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e?.target.value })}
            />
          </div>
        </ModalBody>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
            };
          }}
          to={"/Signup"}
        >
          new user ? signin
        </NavLink>
        <ModalFooter className="d-flex justify-content-center">
          <Button color="indigo " onClick={() => addData()}>
            login
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Login;
