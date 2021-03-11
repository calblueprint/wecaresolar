import React, { useEffect, useRef, useState } from 'react';
import Suitcase from "../Images/Suitcase.jpg"; 

type SuitcaseProps = {
    match 
}

const SuitcaseAnimation = (props: SuitcaseProps) => {
    const [clicked, setClicked] = useState(false); //use for zoom in/out later

    /* Create an ImageData object */ 
    const image = new Image(); 
    image.src = Suitcase;

    /* Set dimensions of interactive map: 
        cWidth, cHeight: canvas dimensions; set to user's window dimensions 
        sWidth, sHeight: scaling dimensions; set to dimensions of source image 
        sx, sy: starting coordinates of drawn image
    */ 
    const cWidth = window.innerWidth; 
    const cHeight = window.innerHeight; 
    const [sWidth, setSWidth] = useState(image.width); 
    const [sHeight, setSHeight] = useState(image.height); 
    const [sx, setSx] = useState(0);
    const [sy, setSy] = useState(0);

    /* Create a reference to null Canvas object. 
        Then, create a context reference for drawing on Canvas. 
    */ 
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

    /* Hook triggers on changes to source image values. 
        Drawing Image: 
            1. Set context ref type to '2D' and create a context object for drawing. 
            2. Clear context before drawing new image. 
            3. drawImage takes in (image,     <-- ImageData object 
                    sx, sy, sWidth, sHeight   <-- Starting context, selects starting coordinate & scaling dimensions (Optional)
                    dx, dy, dWidth, dHeight)  <-- Destination context, used to scale source to destination. 
    */ 
    useEffect(() => {
        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext("2d");
            const ctx = canvasCtxRef.current;
            ctx!.clearRect(0, 0, cWidth, cHeight); 
            ctx!.drawImage(image, sx, sy, sWidth, sHeight, 0, 0, cWidth, cHeight); 
        }
    }, [image]); 
    
    /* Sets new sx, sy, sWidth, sHeight values based on input x and y */ 
    function zoomIn(x, y) {
        const zoomWidth = image.width / 3; 
        const zoomHeight = image.height / 3; 
        const top_x = x - zoomWidth / 2; 
        const top_y = y - zoomHeight / 2; 
        setSx(top_x); 
        setSy(top_y); 
        setSWidth(zoomWidth); 
        setSHeight(zoomHeight); 
    }

    /* Resets sx, sy, sWidth, sHeight to original values */ 
    function zoomOut() {
        setSx(0); 
        setSy(0); 
        setSWidth(image.width); 
        setSHeight(image.height); 
    }

    // console.log("xcord:", top_x, "ycord:", top_y, "zoomW:", zoomWidth, "zoomH:", zoomHeight)
    // console.log("image w:", image.width, "image h:", image.height, "canvas w:", eWidth, "canvas h:", eHeight); 

    return (
        <div>
            <button onClick={() => zoomIn(350, 200)}> ZOOM IN </button>
            <button onClick={() => zoomOut()}>ZOOM OUT </button>
            <canvas 
                ref={canvasRef}
                width={cWidth}
                height={cHeight}
            ></canvas>
        </div>
    )
}
export default SuitcaseAnimation; 