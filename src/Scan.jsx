import {Html5QrcodeScanner} from 'html5-qrcode'
import { useEffect, useState } from 'react';
import './Scan.css';
export default function Scan(){
    const [scanResult,setScanResult]=useState(null);
    const [name,setName]=useState(null);
    let arr=["abcd",];
    let arr1=["ab",];
    useEffect(()=>{
        const scanner=new Html5QrcodeScanner('reader',{
            qrbox:{
                width:250,
                height:500,
    
            },
            fps:5,
        })
        scanner.render(success,error);
        function success(result){
            scanner.clear();
            setScanResult(result);
            // console.log(result);
        }
        function error(err){
            // console.log(err)
        }
    },[])
    function handleChange(){
        console.log(scanResult)
    }
    let handleChange1=(evt)=>{
        setName(evt.target.value);
    }
    let handleSubmit=(evt)=>{
        evt.preventDefault();
        arr.push(scanResult);
        arr1.push(name);
        console.log(arr);
        console.log(arr1);
    }
    return(
        <>
        <div className="App">
        <h1>Scanner</h1>
        {scanResult
        ?<div className='center'>
            <form onSubmit={handleSubmit} className='center'>
                <input onChange={handleChange} value={scanResult} className='center'></input>
                <input onChange={handleChange1} className='center'></input>
                <button type='Submit'>Sumbit</button>
            </form>
        </div>
        :<div id='reader'></div>
    }
        </div>
        </>
    );
}