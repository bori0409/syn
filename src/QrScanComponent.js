import { useState } from 'react';
import QrScan from 'react-qr-reader';
import './App.css';


function QrScanComponent() {
  const [qrscan, setQrscan]= useState('No result');
  const handleScan = data =>{
    if (data){
      setQrscan(data)
    }
  }
  const handleError = err =>{
    console.error(err)
  }
    return (
      <div className='container'>
        <div >
        <QrScan
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ height: 240, width: 320 }}>

        </QrScan>
        
        </div>
        <h1>
         Last scan result: {qrscan}
        </h1>
      </div>
   
      
    );
  }
  
  export default QrScanComponent;
  