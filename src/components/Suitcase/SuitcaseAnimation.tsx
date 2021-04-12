import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Topic } from '../../store/topicsSlice';
import { Typography } from '@material-ui/core';
import Suitcase from '../Images/Suitcase.png';
import AnimationCard from './AnimationCard';

type SuitcaseProps = {
  classes: any,
  match;
};

interface ClipDimensions {
  x: number;
  y: number;
  width: number;
  height: number;
}

const SuitcaseAnimation = (props: SuitcaseProps) => {
  const { classes } = props;
  const [selectedTopic, setSelectedTopic] = useState<Topic | undefined>(undefined);
  const topics = useSelector((state: RootState) => state.topics);
  let id = Number.NEGATIVE_INFINITY

  /* Create an ImageData object */
  const image = new Image(975, 650);
  image.src = Suitcase;

  /* clipDims: x, y, width, and height of the currently visible portion of the suitcase */ 
  const [clipDims, setClipDims] = useState<ClipDimensions>({
    x: 0,
    y: 0,
    width: image.width,
    height: image.height
  });

  /* Set dimensions of interactive map: 
        cWidth, cHeight: canvas dimensions; set according to user's screen width and max desired suitcase dimensions
        dotWidth: width of each clickable blue dot */
  const MAX_WIDTH = 700;
  const cWidth = Math.min(window.innerWidth, MAX_WIDTH);
  const cHeight = (image.height / image.width) * cWidth;
  const dotWidth = 0.011 * cWidth;

  /* Create a reference to null Canvas object. 
        Then, create a context reference for drawing on Canvas. */
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  /* Helper function to draw dots for all the locations in `topics`.
        The dots will have radius `width`, color `fillStyle` (hex), and transparency `alpha` (0-1). */
  const drawDots = (ctx, width, fillStyle, alpha) => {
    ctx.beginPath();
    for (let topic of Object.values(topics)) {
      const [xPct, yPct] = topic.suitcaseCoordinates;
      const [x, y] = [xPct * cWidth, yPct * cHeight];
      ctx.moveTo(x, y);
      ctx.arc(x, y, width, 0, Math.PI * 2, true);
    }
    ctx.fillStyle = fillStyle;
    ctx.globalAlpha = alpha;
    ctx.fill();

    ctx.globalAlpha = 1; // Reset to original alpha
  };

  useEffect(() => {
    if (canvasRef.current) {
      // console.log(`Updating with canvas dims: width: ${cWidth}, height: ${cHeight}`);
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      if (!ctx) return; 

      ctx.clearRect(0, 0, cWidth, cHeight);
      ctx.globalAlpha = 1;
      image.onload = function() { //on first load
        console.log("drawing image now")
        ctx.drawImage(image, clipDims.x, clipDims.y, clipDims.width, clipDims.height, 0, 0, cWidth, cHeight);
        if (!selectedTopic) {
          drawDots(ctx, dotWidth * 3, '#6BADE8', 0.3);
          drawDots(ctx, dotWidth, '#6BADE8', 1);
        } 
      } 
    }}, []); //runs once, not watching 

  /* Hook triggers on changes to source image values. 
        Drawing Image: 
            1. Set context ref type to '2D' and create a context object for drawing. 
            2. Clear context before drawing new image. 
            3. drawImage takes in (image,     <-- ImageData object 
                    sx, sy, sWidth, sHeight   <-- Starting context, selects starting coordinate & scaling dimensions (Optional)
                    dx, dy, dWidth, dHeight)  <-- Destination context, used to scale source to destination. */
  useEffect(() => {
    if (canvasRef.current) {
      // console.log(`Updating with canvas dims: width: ${cWidth}, height: ${cHeight}`);
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      if (!ctx) return; 

      ctx.clearRect(0, 0, cWidth, cHeight);
      ctx.globalAlpha = 1;
      ctx.drawImage(image, clipDims.x, clipDims.y, clipDims.width, clipDims.height, 0, 0, cWidth, cHeight);
      if (!selectedTopic) {
        drawDots(ctx, dotWidth * 3, '#6BADE8', 0.3);
        drawDots(ctx, dotWidth, '#6BADE8', 1);
      } 
    }}, [clipDims]);

  useLayoutEffect(() => {
    if (!selectedTopic) {
      zoomOut()
      console.log("we're supposed zoom out NOWWWWW")
      console.log("useEffect selected topic" , selectedTopic)
      return
    }; // TODO: zoom out

    const [relX, relY] = selectedTopic.suitcaseCoordinates;
    const xCord = relX * image.width; 
    const yCord = relY * image.height; 

    console.log("selected topic changes (first animation frame starts)")

    id = requestAnimationFrame(function(timestamp) {
      startTime = Date.now();
      animate(timestamp, xCord, yCord, 1000);
    }); 
    return () =>  {
      if (canvasRef.current) {
        // console.log(`Updating with canvas dims: width: ${cWidth}, height: ${cHeight}`);
        canvasCtxRef.current = canvasRef.current.getContext('2d');
        const ctx = canvasCtxRef.current;
        if (ctx) {
          ctx.clearRect(0, 0, cWidth, cHeight);
        }; }
        cancelAnimationFrame(id)
      }
  }, [selectedTopic]); //only watches for topic variable 


  /* Zoom-in anmiation */
  let startTime 
  function animate(timeStamp, x, y, totalTime) {
    // console.log(selectedTopic);
    if (!selectedTopic) return;

    const timeNow = Date.now(); 
    const timePassed = timeNow - startTime; 
    const progress = timePassed / totalTime;
    const easing = easeIn(progress); 

    // console.log('timePassed:', timePassed, 'progress:', progress)

    const origWidth = image.width; 
    const origHeight = image.height; 
    const zoomWidth = origWidth / 3;
    const zoomHeight = origHeight / 3;

    //incWidth & incHeight approach zoomWidth & zoomHeight

    //calculate width increments for each frame 
    const wRatio = zoomWidth / origWidth; //goal ratio 
    const distanceToTravel = 1 - wRatio; 
    const wIncrement = 1 - distanceToTravel * easing; //how much we want to change @ each step in given time 
    const incWidth = origWidth * wIncrement; //eliminates time --> gives proportion of new width 
    
    //calculate height increments for each frame 
    const hRatio = zoomHeight / origHeight; //goal ratio 
    const dist = 1 - hRatio; 
    const hIncrement = 1 - dist * easing; 
    const incHeight = origHeight * hIncrement; 

    //set new start coordinate 
    const top_x = x - incWidth / 2;
    const top_y = y - incHeight / 2; 

    // console.log('orig_x', x, 'orig_y', y)
    // console.log('newX:', top_x, 'newY', top_y)
    // console.log('incWidth:', incWidth, 'incHeight:', incHeight)

    setClipDims({
      x: top_x,
      y: top_y,
      width: incWidth,
      height: incHeight
    });

    console.log("selectedTopic:" , selectedTopic)

    if (timePassed < totalTime && selectedTopic) { //recursively animate until desired ratio reached 

      console.log("Requesting frame:", selectedTopic == undefined)

      id = requestAnimationFrame(function(timestamp) { // save return value as ID 
        animate(timeStamp, x, y, totalTime)
      })
    } else {
      console.log("Not Requesting")
    }
  }

  function easeIn(progress) {
    return Math.pow(--progress, 5) + 1;
  }

  /* Resets clip dimensions to original values */
  function zoomOut() {
    console.log('about to zoom out')
    setSelectedTopic(undefined);
    setClipDims({
      x: 0,
      y: 0,
      width: image.width,
      height: image.height
    });
  }

  function onCanvasClick(x, y) {
    const canvas = document.getElementById('canvas');
    if (canvas) {
      const { top, left, width, height } = canvas.getBoundingClientRect();
      const localX = x - left;
      const localY = y - top;

      const relX = (x - left) / width;
      const relY = (y - top) / height;
      // console.log(
      //   `Relative coordinates: x = ${relX.toFixed(2)}, y = ${relY.toFixed(2)}`
      // );

      const selectedTopics = Object.values(topics).filter((topic) => {
        const [dotRelX, dotRelY] = topic.suitcaseCoordinates;
        const dotX = dotRelX * cWidth;
        const dotY = dotRelY * cHeight;

        // A dot is considered selected if the x, y coordinates of the click
        // are within the outer ring (the light blue region)
        return (
          (localX - dotX) ** 2 + (localY - dotY) ** 2 <= (dotWidth * 3) ** 2
        );
      });

      if (selectedTopics.length) {
        console.log("Topic is selected!")
        // There shouldn't be more than one topic selected with any given click,
        // but just in case, we'll zoom in on the first one only.
        setSelectedTopic(selectedTopics[0]);
      }
    }
  }

  return (
    <div>
      <canvas
          id="canvas"
          ref={canvasRef}
          width={cWidth}
          height={cHeight}
          onClick={(e) => onCanvasClick(e.clientX, e.clientY)}
        ></canvas>
      <div className={classes.card}>
        {selectedTopic && (<AnimationCard exit={zoomOut} topic={selectedTopic} match={props.match}> </AnimationCard>)}
      </div>
    </div>
  );
};
export default SuitcaseAnimation;