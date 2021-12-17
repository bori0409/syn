import { useState, useRef,useCallback } from 'react';
import QrScan from 'react-qr-reader';
import Webcam from 'react-webcam';


function CameraLibComponent() {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
      
        const webcamRef = useRef(null);
        const [imageSrc, setImageScr] = useState(null);
        const capture = useCallback(
          () => {
            setImageScr( webcamRef.current.getScreenshot());
          },
          [webcamRef]
        ); 

    return (
        <>
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
        {imageSrc && (
        <img
          src={imageSrc}
        />
      )}
      </>
    );
  }
  
  export default CameraLibComponent;
  