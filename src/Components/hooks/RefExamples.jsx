import React, { useEffect, useRef, useState } from 'react'


const RefExamples =()=>{
    const[play , setPlay]=useState(true);
    let videoRef=useRef();
    console.log(videoRef);
    let playORpause=()=>{
        if(play == true){
            videoRef.current.play();
            setPlay(false);
            console.log(play);
        }else{
            videoRef.current.pause();
            setPlay(true);
            console.log(play);
        }
    }
    return (
        <div>
            <video src={VIDEO} ref={videoRef} onClick={playORpause}>
                video
            </video>
        </div>
    )
}