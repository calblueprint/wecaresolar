import React, { useEffect, useRef, useState } from 'react';
import Suitcase from "../Images/Suitcase.jpg"; 

type SuitcaseProps = {
    match 
}

//functional component, access to state 
const SuitcaseAnimation = (props: SuitcaseProps) => {
    const [clicked, setClicked] = useState(false); //click initially false
    const [sx, setSx] = useState(0); //set x coordinate
    const [sy, setSy] = useState(0); //set y coordinate 
    const [sWidth, setSWidth] = useState(300); //sets cropped width 
    const [sHeight, setSHeight] = useState(300); //sets cropped height 
    const width = window.innerWidth; 
    const height = window.innerHeight; 

    const canvasRef = useRef<HTMLCanvasElement | null>(null); //create reference to canvas
    const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null); //creates context for editing canvas
    const image = new Image(); //creates an ImageData object. 
    image.src = Suitcase;

    //triggers when state changes 
    useEffect(() => {
        setSx(2); //use to automatically 
        if (canvasRef.current) { //if reference object exists 
            canvasCtxRef.current = canvasRef.current.getContext("2d");
            const ctx = canvasCtxRef.current;
            ctx!.drawImage(image, 0, 0, width, height); //change this line after completing math function
            console.log(canvasRef.current.width); 
        }
        console.log(canvasRef); 
    }, [image]); 
    
    
    //sets new sx, sy coordinate based on dot coordinate
    //indirectly calls useEffect 
    function zoomIn(x, y) {
        return; 
    }

    return (
        <div>
            <button onClick={() => zoomIn(200, 200)}> ZOOM IN </button>
            <canvas 
                ref={canvasRef}
                width={width}
                height={height}
            ></canvas>
        </div>
    )
}

export default SuitcaseAnimation; 