"use client";
import { Canvas, FabricImage, PencilBrush, Textbox } from "fabric";
import { useEffect, useRef, useState, useContext, ChangeEvent } from "react";
import { UserContext } from "@/contexts/user-context";
import axios from "axios";
import { useRouter } from "next/navigation";
import LoadingBar from "./LoadingBar";

const DrawingPad = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<any>(null);
  const [recipient, setRecipient] = useState<string>("default");
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [missingRecipient, setMissingRecipient] = useState<Boolean>(false);
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {

    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 210 * 2,
        height: 297 * 2,
        skipOffscreen: true
      });
      initCanvas.backgroundColor = "#fefcaf";
      initCanvas.renderAll();
      setCanvas(initCanvas);
      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  const addNewCanvas = () => {
    if (canvas) {
      canvas.dispose();
    }
    if (canvasRef.current) {
      const initCanvas: any = new Canvas(canvasRef.current, {
        width: 210 * 2,
        height: 297 * 2,
        skipOffscreen: true
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
        width: 200,
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
    setIsLoading(true)
    if (canvas) {
      const dataURL = canvas.toDataURL({
        format: "png",
      });
      axios
        .post("https://inkwell-backend-j9si.onrender.com/api/letters", {
          sender: user.username,
          recipient: recipient,
          content: { letter: dataURL },
        })
        .then((response) => {
          setMissingRecipient(false);
          setIsLoading(false)
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

  if (isLoading) {
    return <LoadingBar/>;
  }
  

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <nav className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
          onClick={addNewCanvas}
        >
          Reset Canvas
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all"
          onClick={addTextBox}
        >
          Text box
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-all"
          onClick={togglePen}
        >
          Toggle Pen
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
          onClick={deleteItem}
        >
          Delete selected item
        </button>
      </nav>
      <canvas
        className="w-3/4 h-96 border-4 border-gray-300 shadow-md rounded-lg "
        id="canvas"
        ref={canvasRef}
      ></canvas>
      <label
        htmlFor="friends"
        className="text-lg mt-3 font-semibold text-gray-700 mb-2"
      >
        Send to:
      </label>
      <select
        id="friends"
        className="w-48 border mb-3 border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-400"
        onChange={handleRecipientChange}
      >
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
      <button
        className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-600 transition-all"
        onClick={sendLetter}
      >
        Send Letter
      </button>
      {missingRecipient ? (
        <p className="mt-4 text-red-500 font-semibold">
          Please select a recipient
        </p>
      ) : null}
    </div>
  );
};

export default DrawingPad;
