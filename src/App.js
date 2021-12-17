import { useState } from "react";
import CameraLibComponent from "./cameraLibComponent";
import MyCamComponent from "./myCamComponent";
import QrScanComponent from "./QrScanComponent";
import './App.css';

function App() {
  const [showWebCam,setShowWebCam] = useState(false);
  const [showMyCam,setShowMyCam] = useState(false);
  const [showQr,setShowQr] = useState(false);
  
  const onClickWebCam = ()=>{
    setShowWebCam(true)
    setShowMyCam(false)
    setShowQr(false)}
  const onClickQrScan = ()=>{
    setShowWebCam(false)
    setShowMyCam(false)
    setShowQr(true)}
  const onClickMyCam = ()=>{
    setShowWebCam(false)
    setShowMyCam(true)
    setShowQr(false)}

  return (
    <div className="container">
      <div className="welcome">Welcome to my Camera app!</div>
      <div className="description">Welcome to my Camera appsdasdasdasdasd!</div>
      <div className="buttonconteiner">
      <button onClick={onClickWebCam}>Capture photo with WebCam package</button>
      <button onClick={onClickMyCam}>Capture photo with my code 2</button>
      <button onClick={onClickQrScan}>Scan Qr Code</button>
      </div>
      <div>{showWebCam ? <CameraLibComponent></CameraLibComponent> : null}</div>
      <div>{showQr ? <QrScanComponent></QrScanComponent> : null}</div>
      <div>{showMyCam ? <MyCamComponent></MyCamComponent> : null}</div>
    </div>
  );
}

export default App;
