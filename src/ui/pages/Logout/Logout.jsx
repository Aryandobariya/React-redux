import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { logout } from "../../../Redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Logout() {
  let Navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutuser = () => {
    dispatch(logout());
    // toast.success("Logout success")
    Navigate("/");
  };

  return (
    <>
      <div>
        <Button onClick={() => logoutuser()}> Logn out</Button>
      </div>
      Logout
    </>
  );
}
