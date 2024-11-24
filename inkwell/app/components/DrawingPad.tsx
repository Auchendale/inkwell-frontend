"use client";
import { Canvas, Rect } from "fabric";
import { useEffect, useRef, useState, useContext } from "react";
import { UserContext } from "@/contexts/user-context";
import axios from "axios";

const DrawingPad = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<any>(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas: any = new Canvas(canvasRef.current, {
        width: 500,
        height: 500,
      });
      initCanvas.backgroundColor = "#fefcaf";
      initCanvas.renderAll();

      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  const addRectangle = () => {
    if (canvas) {
      const rect = new Rect({
        top: 100,
        left: 50,
        width: 100,
        height: 75,
        fill: "#a084042",
      });
      canvas.add(rect);
    }
  };

  const sendLetter = () => {
    if (canvas) {
      const dataURL = canvas.toDataURL({
        format: "png",
      });
      console.log(dataURL);
      axios
        .post("https://inkwell-backend-kvij.onrender.com/api/letters", {
          sender: user.username,
          recipient: "kieran",
          content: { letter: dataURL },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <button className="border-8 m-5" onClick={addRectangle}>
        add rectangle
      </button>
      <canvas className="border-8 m-5" id="canvas" ref={canvasRef}></canvas>
      <button className="border-8 m-10" onClick={sendLetter}>
        Send Letter
      </button>
    </div>
  );
};

export default DrawingPad;
