import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cartData } from "../../../Redux/features/Card/cardslice";
import { useEffect } from "react";

function Navbarr() {
  const loginuser = useSelector((state) => state.authReducer);
  const data = useSelector((state) => state?.cartReducer?.pro);
  console.log("🚀 ~ file: Navbar.jsx:15 ~ Navbarr ~ data:", data)

  //  const userSlice= useSelector((state)=>{
  //   return state?.authReducer
  //  })

const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartData());
  }, []);

  const { user, token } = loginuser;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container  className="d-flex  m-">
        <Navbar.Brand>Boot</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {user?.userType === "admin" ? (
              <>
                <NavLink
                  className="pe-5"
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: 'none',
                      fontWeight: isActive ? "normal" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}
                  to={"/Dashbord"}
                >
                  Dashbord
                </NavLink>
                <NavLink
                  className="pe-5"
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: 'none',
                      fontWeight: isActive ? "normal" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}
                  to={"/User"}
                >
                 User
                </NavLink> <NavLink
                  className="pe-5"
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: 'none',
                      fontWeight: isActive ? "normal" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}
                  to={"/Allproduct"}
                >
                  Product
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  className="pe-5"
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: 'none',
                      fontWeight: isActive ? "normal" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink
                  className="pe-5"
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: 'none',
                      fontWeight: isActive ? "normal" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}
                  to={"/About"}
                >
                  About
                </NavLink>
                <NavLink
                  className="pe-5"
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: 'none',
                      fontWeight: isActive ? "normal" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}
                  to={"/Shope"}
                >
                  Shope
                </NavLink>
               
                <NavLink
                  className="pe-5"
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: 'none',
                      fontWeight: isActive ? "normal" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}
                  to={"/contact"}
                >
                  contact
                </NavLink>
                <NavLink
                  className="pe-5 nav"
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: 'none',
                      fontWeight: isActive ? "normal" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}
                  to={"/cart"}
                >
                 <i class="fa-solid fa-cart-plus"></i>
                </NavLink>
                <NavLink
                  className="pe-5 nav"
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: 'none',
                      fontWeight: isActive ? "normal" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}
                  to={"/Usernavbar"}
                >
                  User
                </NavLink>
              </>
            )}

            {JSON.stringify(loginuser.user) === "{}" ? (
              <NavLink
                className="pe-5"
                style={({ isActive, isPending }) => {
                  return {
                    textDecoration: 'none',
                    fontWeight: isActive ? "normal" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
                to={"/Login"}
              >
                login
              </NavLink>
            ) : (
              <NavLink
                className="pe-5"
                to={"/Logout"}
                style={({ isActive, isPending }) => {
                  return {
                    textDecoration: 'none',
                    fontWeight: isActive ? "normal" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                log out
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
