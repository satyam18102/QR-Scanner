import { useState } from "react";
import QRCode from "react-qr-code";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Scanner.css'

export default function Scanner(){
    let [text,setText]=useState('');
  let [value,setValue]=useState('');
  let handleSubmit= async(e)=>{
    e.preventDefault();
    setValue(text);
  };
  return(
    
    <div className="dis">
    <form onSubmit={handleSubmit}>
    <TextField id="outlined-basic" label="Enter Text" variant="outlined" onChange={(e)=>setText(e.target.value)} value={text} />
    <Button variant="contained" type="submit">Generate</Button>
    {/* <div className="dis"> */}
        <QRCode
    size={256}
    style={{ height: "auto",backgroundColor:"black", maxWidth: "30%", width: "30%" }}
    value={value}
    viewBox={`0 0 256 256`}
    className="qr"
    />
    {/* </div> */}
    </form>
  </div>
    
  );
}
