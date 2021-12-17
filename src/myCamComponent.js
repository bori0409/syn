import React, { useState, useRef,useCallback, useEffect } from 'react';




function MyCamComponent() {
    const videoRef=useRef(null);
    const photoRef=useRef(null);
    
    const [hasPhoto, setHasPhoto]=useState(false);

    const getVideo = () =>{
      navigator.mediaDevices
      .getUserMedia({
        video: {width:1280, height: 720}
      })
      .then(stream => {
        console.log("JSDJSJ");
        
        let video = videoRef.current;
       // window.stream=stream;
       video.scrObject = stream;
      //video.play();
        console.log(stream);
       
      })
      .catch(err => {
        console.error(err);
      })
    }


    useEffect(()=>{
      getVideo();
      console.log("now")
    },[videoRef])

    

    return (
       <div className="App">
         <div className='camera'>
           fdf
           <video   ref={videoRef} autoPlay></video>
           <button>Take a photo!</button>

         </div>
         <div className={"result" +(hasPhoto ? 'HasPhoto':'')}>
           sfsafd
           <canvas ref={photoRef}></canvas>
           <button> Close!</button>
           xzcvbnmbvc
         </div>
       </div>


    );
  }
  
  export default MyCamComponent;
  