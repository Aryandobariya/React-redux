import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Table } from "reactstrap";

export default function User() {
  let [userData, setuserData] = useState([]);
  console.log("🚀 ~ file: User.jsx:8 ~ User ~ userData:", userData);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/user/getAll",
      headers: {
        "Content-Type": "application/json",
        authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((resData) => {
        setuserData(resData.data.data);
        console.log("🚀 ~ file: User.jsx:14 ~ useEffect ~ resData:", resData);
      })
      .catch((err) => {
        console.log("🚀 ~ file: User.jsx:26 ~ useEffect ~ err:", err);
        toast.error(err.message);
      });
  }, []);

  return (
    <>
      <div className="m-4">
        <Table striped>
          <thead>
            <tr>
              <th>SR.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th>SITY</th>
              <th>STATE</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((e, i) => {
              return (
                <tr key={e?.id}>
                  <th className="row">{i + 1}</th>
                  <td style={{ maxWidth: "20vw" }}>{e.name}</td>
                  <td>{e.email}</td>
                  <td style={{ maxWidth: "20vw" }} className="text-truncate ">
                    {e?.age}
                  </td>
                  <td>{e?.address?.[0]?.city || "-"}</td>
                  <td>{e?.address?.[0]?.state || "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
