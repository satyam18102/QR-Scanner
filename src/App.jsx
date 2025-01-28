import { useState } from "react";
import QRCode from "react-qr-code"
import uniqid from 'uniqid';
export default function App(){
  let [value,setValue]=useState("Hello")
  let handleSubmit= async()=>{
    setValue(uniqid());
  };
  return(
    <>
    <button onClick={handleSubmit}>Generate</button>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "50%", width: "50%" }}
    value={value}
    viewBox={`0 0 128 128`}
  />
    </>
  );
}
