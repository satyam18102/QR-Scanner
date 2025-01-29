import {Html5QrcodeScanner} from 'html5-qrcode'
import { useEffect, useState } from 'react';
import './Scan.css';
export default function Scan(){
    const [scanResult,setScanResult]=useState(null);
    useEffect(()=>{
        const scanner=new Html5QrcodeScanner('reader',{
            qrbox:{
                width:800,
                height:800,
    
            },
            fps:5,
        })
        scanner.render(success,error);
        function success(result){
            scanner.clear();
            setScanResult(result);
        }
        function error(err){
            // console.log(err);
        }
    },[])
    return(
        <>
        <div className="App">
        {scanResult
        ?<div className='center'>
            <h4><a href={'https://'+scanResult}>{scanResult}</a></h4>
        </div>
        :<div>
        <h1>Scanner</h1>
        <div id='reader'></div>
        </div>
    }
        </div>
        </>
    );
}