import React, { useState } from "react";
import ProductTable from "./ProductTable";
import ProductForm from "./Productform";

export default function Allproduct() {


  let[newData,setnewData]=useState({})
  const [modal, setModal] = useState(false);

  // console.log("🚀 ~ file: Allproduct.jsx:9 ~ Allproduct ~ newData:", newData)

  return (
    <>
      <ProductForm  newData={newData} setModal={setModal} modal={modal}/>
      <ProductTable setnewData={setnewData} modal={modal} setModal={setModal} />

    </>
  );
}
