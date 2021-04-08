import React, { useEffect, useRef, useState } from 'react';
import Suitcase from "../Images/Suitcase.jpg"; 

type SuitcaseProps = {
    match 
};

interface ClipDimensions {
    x: number,
    y: number,
    width: number,
    height: number
}

type SuitcaseTopics = Array<[string, number, number]>;

const MAX_WIDTH = 700;
const SUITCASE_TOPICS: SuitcaseTopics = [
    ['Fetal Doppler', 0.25, 0.25],
    ['Lights', 0.6, 0.33],
    ['Test middle', 0.5, 0.5],
]

const SuitcaseAnimation = (props: SuitcaseProps) => {
    /* Create an ImageData object */ 
    const image = new Image(); 
    image.src = Suitcase;

    /* Set dimensions of interactive map: 
        cWidth, cHeight: canvas dimensions; set according to user's screen width and max desired suitcase dimensions
        dotWidth: width of each clickable blue dot
    */ 
    const cWidth = Math.min(window.innerWidth, MAX_WIDTH);
    const cHeight = image.height / image.width * cWidth;
    const dotWidth = 0.011 * cWidth;

    // clipDims: x, y, width, and height of the currently visible portion of the suitcase
    const [clipDims, setClipDims] = useState<ClipDimensions>({
        x: 0, 
        y: 0, 
        width: image.width, 
        height: image.height,
    });

    /* Create a reference to null Canvas object. 
        Then, create a context reference for drawing on Canvas. 
    */ 
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

    /* Helper function to draw dots for all the locations in SUITCASE_TOPICS.
        The dots will have radius `width`, color `fillStyle` (hex), and transparency `alpha` (0-1).
    */
    const drawDots = (ctx, width, fillStyle, alpha) => {
        ctx.beginPath();
        for (let topic of SUITCASE_TOPICS) {
            const [topicName, xPct, yPct] = topic;
            const [x, y] = [xPct * cWidth, yPct * cHeight];
            ctx.moveTo(x, y);
            ctx.arc(x, y, width, 0, Math.PI * 2, true);
        }
        ctx.fillStyle = fillStyle;
        ctx.globalAlpha = alpha;
        ctx.fill();

        ctx.globalAlpha = 1; // Reset to original alpha
    }

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
            console.log(`Updating with canvas dims: ${cWidth}, ${cHeight}`);
            console.log(image.width, image.height);
            canvasCtxRef.current = canvasRef.current.getContext("2d");
            const ctx = canvasCtxRef.current;
            if (!ctx) return;

            ctx.clearRect(0, 0, cWidth, cHeight); 
            ctx.globalAlpha = 1;
            ctx.drawImage(image, clipDims.x, clipDims.y, clipDims.width, clipDims.height, 0, 0, cWidth, cHeight); 
            ctx.strokeRect(1, 1, cWidth - 2, cHeight - 2);

            drawDots(ctx, dotWidth * 3, "#6BADE8", 0.3);
            drawDots(ctx, dotWidth, "#6BADE8", 1);
        }
    }, [clipDims]); 
    
    /* Sets new clip dimensions based on input x and y */ 
    function zoomIn(x, y) {
        const zoomWidth = image.width / 3; 
        const zoomHeight = image.height / 3; 
        const top_x = x - zoomWidth / 2; 
        const top_y = y - zoomHeight / 2; 
        setClipDims({
            x: top_x,
            y: top_y,
            width: zoomWidth,
            height: zoomHeight,
        });
    }

    /* Resets clip dimensions to original values */ 
    function zoomOut() {
        setClipDims({
            x: 0,
            y: 0,
            width: image.width,
            height: image.height,
        });
    }

    function onCanvasClick(x, y) {
        const canvas = document.getElementById("canvas");
        if (canvas) {
            const {top, left, width, height} = canvas.getBoundingClientRect();
            const localX = x - left;
            const localY = y - top;

            const relX = (x - left) / width;
            const relY = (y - top) / height;
            console.log(`Relative coordinates: x = ${relX.toFixed(2)}, y = ${relY.toFixed(2)}`);

            const selectedTopics = SUITCASE_TOPICS.filter((topic) => {
                const [topicName, dotRelX, dotRelY] = topic;
                const dotX = dotRelX * cWidth;
                const dotY = dotRelY * cHeight;

                // A dot is considered selected if the x, y coordinates of the click
                // are within the outer ring (the light blue region)
                return (localX - dotX) ** 2 + (localY - dotY) ** 2 <= (dotWidth * 3) ** 2;
            });

            if (selectedTopics.length) {
                console.log("Selected topic:", selectedTopics[0][0]);
                // TODO(shannon): make the thing animate!
            }
        }
    }

    return (
        <div>
            <button onClick={() => zoomIn(0, 0)}> ZOOM IN </button>
            <button onClick={() => zoomOut()}>ZOOM OUT </button>
            <canvas 
                id="canvas"
                ref={canvasRef}
                width={cWidth}
                height={cHeight}
                onClick={(e) => onCanvasClick(e.clientX, e.clientY)}
            ></canvas>
        </div>
    )
}
export default SuitcaseAnimation; 