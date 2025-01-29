import {Html5QrcodeScanner} from 'html5-qrcode'
import { useEffect, useState } from 'react';
import './Scan.css';
export default function Scan(){
    const [scanResult,setScanResult]=useState(null);
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
    return(
        <>
        <div className="App">
        <h1>Scanner</h1>
        {scanResult
        ?<div className='center'>
            <h1>{scanResult}</h1>
        </div>
        :<div id='reader'></div>
    }
        </div>
        </>
    );
}