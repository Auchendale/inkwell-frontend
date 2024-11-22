"use client";
import { Canvas, Rect } from "fabric";
import { useEffect, useRef, useState } from "react";

const DrawingPad = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas: any = new Canvas(canvasRef.current, {
        width: 500,
        height: 500,
      });
      initCanvas.backgroundColor = "#fff";
      initCanvas.renderAll();

      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  const addRectangle = ()=>{
    if(canvas){
      const rect = new Rect({
        top: 100,
        left: 50,
        width: 100, 
        height: 75,
        fill: "#a084042"
      })

      canvas.add(rect)
    }

  }

  return (
    <div className="canvas-wrapper">
      <button onClick={addRectangle}>add rectangle</button>
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default DrawingPad;
