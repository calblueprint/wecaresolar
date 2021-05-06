import { Typography } from '@material-ui/core';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import theme from '../../CustomStyles';
import { RootState } from '../../store/reducers';
import { Topic } from '../../store/topicsSlice';
import Suitcase from '../Images/Suitcase.png';
import AnimationCard from './AnimationCard';
import { ReactComponent as TapIcon } from './TapIcon.svg';

type SuitcaseProps = {
  classes: any;
  toggle: boolean;
  image: HTMLImageElement;
  match;
};

interface ClipDimensions {
  x: number;
  y: number;
  width: number;
  height: number;
}

const SuitcaseAnimation = (props: SuitcaseProps) => {
  const { classes, image } = props;
  const [selectedTopic, setSelectedTopic] = useState<Topic | undefined>(
    undefined
  );
  const topics = useSelector((state: RootState) => state.topics);
  let id = Number.NEGATIVE_INFINITY;

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
  const cWidth = Math.min(window.innerWidth, 650);
  const cHeight = (image.height / image.width) * cWidth;
  const dotWidth = 0.011 * cWidth;
  const dotColor = '#6BADE8';

  /* Create a reference to null Canvas object. 
        Then, create a context reference for drawing on Canvas. */
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  /* Helper function to draw dots for all the locations in `topics`.
        The dots will have radius `width`, color `fillStyle` (hex), and transparency `alpha` (0-1). */
  const drawDots = (ctx, width, fillStyle, alpha) => {
    ctx.beginPath();
    for (const topic of Object.values(topics)) {
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

  /* Drawing Image Helper Function 
        1. Set context ref type to '2D' and create a context object for drawing. 
        2. Clear context before drawing new image. 
        3. drawImage takes in (image,     <-- ImageData object 
              sx, sy, sWidth, sHeight   <-- Starting context, selects starting coordinate & scaling dimensions (Optional)
              dx, dy, dWidth, dHeight)  <-- Destination context, used to scale source to destination. */

  const drawCanvas = (ctx) => {
    ctx.globalAlpha = 1;
    ctx.drawImage(
      image,
      clipDims.x,
      clipDims.y,
      clipDims.width,
      clipDims.height,
      0,
      0,
      cWidth,
      cHeight
    );
    if (!selectedTopic) {
      drawDots(ctx, dotWidth * 3, dotColor, 0.3);
      drawDots(ctx, dotWidth, dotColor, 1);
    }
  };

  /* Hook triggers on first load */
  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      if (!ctx) return;
      ctx.clearRect(0, 0, cWidth, cHeight);
      drawCanvas(ctx);
    }
  }, []); //runs once, not watching

  /* Hook triggers on changes to source image values. */
  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      if (!ctx) return;
      ctx.clearRect(0, 0, cWidth, cHeight);
      drawCanvas(ctx);
    }
  }, [clipDims]);

  /* If topic is unselected while zooming, useLayoutEffect stops animation from completing. 
    useLayoutEffect is a synchronous function, so it executes after the last animate function 
    */
  useLayoutEffect(() => {
    if (!selectedTopic) return; // TODO: zoom out
    const [relX, relY] = selectedTopic.suitcaseCoordinates;
    const xCord = relX * image.width;
    const yCord = relY * image.height;

    id = requestAnimationFrame(function (timestamp) {
      startTime = Date.now();
      animate(timestamp, xCord, yCord, 1000);
    });
    return () => {
      cancelAnimationFrame(id);
    };
  }, [selectedTopic]); //only watches for topic variable

  /* Zoom-in anmiation */
  let startTime;
  function animate(timeStamp, x, y, totalTime) {
    if (!selectedTopic) return;

    const timeNow = Date.now();
    const timePassed = timeNow - startTime;
    const progress = timePassed / totalTime;
    const easing = easeIn(progress);

    const origWidth = image.width;
    const origHeight = image.height;
    const zoomWidth = origWidth / 3;
    const zoomHeight = origHeight / 3;

    //as incWidth & incHeight approach zoomWidth & zoomHeight, calculate increments for each frame
    const wRatio = zoomWidth / origWidth; //goal ratio
    const wIncrement = 1 - (1 - wRatio) * easing; //how much we want to change @ each step in given time
    const incWidth = origWidth * wIncrement; //eliminates time --> gives proportion of new width

    const hRatio = zoomHeight / origHeight;
    const hIncrement = 1 - (1 - hRatio) * easing;
    const incHeight = origHeight * hIncrement;

    setClipDims({
      x: x - incWidth / 2,
      y: y - incHeight / 2,
      width: incWidth,
      height: incHeight
    });

    if (timePassed < totalTime && selectedTopic) {
      //recursively animate until desired ratio reached
      id = requestAnimationFrame(function (timestamp) {
        animate(timeStamp, x, y, totalTime);
      });
    }
  }

  function easeIn(progress) {
    return Math.pow(--progress, 5) + 1;
  }

  /* Resets clip dimensions to original values */
  function zoomOut() {
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
        // There shouldn't be more than one topic selected with any given click,
        // but just in case, we'll zoom in on the first one only.
        setSelectedTopic(selectedTopics[0]);
      }
    }
  }

  const tap = {
    paddingLeft: theme.spacing(3),
    color: '#6BADE8',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div>
      <div style={tap}>
        <TapIcon />
        <Typography variant="body1">
          {' '}
          Tap on a part of the Solar Suitcase{' '}
        </Typography>
      </div>
      <canvas
        id="canvas"
        ref={canvasRef}
        width={cWidth}
        height={cHeight}
        onClick={(e) => onCanvasClick(e.clientX, e.clientY)}
      />
      <div className={classes.card}>
        {selectedTopic && (
          <AnimationCard
            exit={zoomOut}
            topic={selectedTopic}
            match={props.match}
          >
            {' '}
          </AnimationCard>
        )}
      </div>
    </div>
  );
};
export default SuitcaseAnimation;
