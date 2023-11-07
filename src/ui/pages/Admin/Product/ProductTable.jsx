import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteproduct,
  fetchData,
} from "../../../../Redux/features/Product/ProductSlice";
import { Table } from "reactstrap";
import { Pencil, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductTable(props) {
  // console.log("🚀 ~ file: ProductTable.jsx:12 ~ ProductTable ~ props:", props)
  const { product, err } = useSelector((state) => state?.productReducer);
  // console.log("🚀 ~ file: ProductTable.jsx:13 ~ ProductTable ~ product:", product)
  function deletehendal(data, index) {
    dispatch(deleteproduct({ id: data._id, index }));
    props.setModal(true); 
  }
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  let navigat = useNavigate();
  const update = (e, i) => {
    props.setnewData({data:e,index:i});
    props.setModal(true);
  };

  return (
    <>
      <div className="m-4">
        <Table striped>
          <thead>
            <tr>
              <th>SR.</th>
              <th>IMAGE</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>PRICE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {product?.map((e, i) => {
              return (
                <tr key={e?._id}>
                  <th className="row">{i + 1}</th>
                  <td style={{ maxWidth: "20vw" }}>
                    <img
                      style={{ maxHeight: "50px" }}
                      src={e?.thumbnail}
                      alt=""
                    />
                  </td>
                  <td>{e.title}</td>
                  <td style={{ maxWidth: "20vw" }} className="text-truncate ">
                    {e?.description}
                  </td>
                  <td>{e?.price}</td>
                  <td>
                    <Pencil
                      onClick={() => update(e, i)}
                      color="#979191"
                      className="m-2"
                      role="button"
                    />

                    <XCircle
                      color="#979191"
                      className="m-2"
                      role="button"
                      onClick={() => deletehendal(e, i, props.setModal(true))}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
