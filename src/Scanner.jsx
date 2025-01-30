import { useState } from "react";
import QRCode from "react-qr-code";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Scanner.css'

export default function Scanner(){
    let [text,setText]=useState(null);
  let [value,setValue]=useState(null);
  let handleSubmit= async()=>{
    setValue(text);
  };
  return(
    
    <div>
    <form onSubmit={handleSubmit}>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <Button variant="contained" type="submit">Generate</Button>
    </form>
    <QRCode
    size={256}
    style={{ height: "auto",backgroundColor:"black", maxWidth: "20%", width: "20%" }}
    value="Hello"
    viewBox={`0 0 256 256`}
  />
  </div>
    
  );
}
