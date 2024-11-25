"use client";
import { Canvas, PencilBrush,  Textbox } from "fabric";
import { useEffect, useRef, useState, useContext, ChangeEvent } from "react";
import { UserContext } from "@/contexts/user-context";
import axios from "axios";
import { useRouter } from "next/navigation";

const DrawingPad = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<any>(null);
  const [recipient, setRecipient] = useState<string>("default");
  const [missingRecipient, setMissingRecipient] = useState<Boolean>(false);
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(
    () => {
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
        }
    }},
    [
      // make screen size a dependency?
    ]
  );

  const addNewCanvas = () => {
    if (canvas) {
      canvas.dispose();
    }
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
  };

  const addTextBox = () => {
    if (canvas) {
      const textBox = new Textbox("Write your letter here", {
        fontStyle: "italic",
        fontFamily: "font-sans",
        width: 200
      });
      canvas.add(textBox);
    }
  };

  const deleteItem = () => {
    if (canvas) {
      canvas.remove(canvas.getActiveObject());
    }
  };

  const sendLetter = () => {
    if (recipient === "default") {
      setMissingRecipient(true);
      return;
    }
    if (canvas) {
      const dataURL = canvas.toDataURL({
        format: "png",
      });
      console.log(dataURL);
      axios
        .post("https://inkwell-backend-kvij.onrender.com/api/letters", {
          sender: user.username,
          recipient: recipient,
          content: { letter: dataURL },
        })
        .then((response) => {
          setMissingRecipient(false);
          router.push("/bulletin-page");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const togglePen = () => {
    if (canvas) {
      const brush = (canvas.freeDrawingBrush = new PencilBrush(canvas));
      canvas.isDrawingMode = !canvas.isDrawingMode;
    }
  };

  const handleRecipientChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRecipient(event.target.value);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <nav>
        <button className="border-8 m-5" onClick={addNewCanvas}>
          Reset Canvas
        </button>
        <button className="border-8 m-5" onClick={addTextBox}>
          Text box
        </button>
        <button className="border-8 m-5" onClick={togglePen}>
          Toggle Pen
        </button>
        <button className="border-8 m-5" onClick={deleteItem}>
          Delete selected item
        </button>
      </nav>
      <canvas className="border-8 m-5" id="canvas" ref={canvasRef}></canvas>
      <label htmlFor="friends">Send to:</label>
      <select id="friends" onChange={handleRecipientChange}>
        <option value="default" defaultValue={"default"}>
          Select Friend
        </option>
        {user.friends.map((friend) => {
          return (
            <option value={friend} key={friend}>
              {friend}
            </option>
          );
        })}
      </select>
      <button className="border-8 m-10" onClick={sendLetter}>
        Send Letter
      </button>
      {missingRecipient ? <p>Please select a recipient</p> : null}
    </div>
  );
};

export default DrawingPad;
