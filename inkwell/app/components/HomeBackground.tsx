"use client";
import Granim from "granim";
import { useEffect } from "react";

const HomeBackground = () => {
  useEffect(() => {
    new Granim({
      element: "#granim-bg",
      direction: "top-bottom",
      isPausedWhenNotInView: true,
      image: {
        source:
          "https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        blendingMode: "multiply",
      },
      states: {
        "default-state": {
          gradients: [
            ["#29323c", "#485563"],
            ["#FF6B6B", "#556270"],
            ["#80d3fe", "#7ea0c4"],
            ["#f0ab51", "#eceba3"],
          ],
          transitionSpeed: 7000,
        },
      },
    });
  }, []);

  return <canvas id="granim-bg" className="min-h-screen size-full"></canvas>;
};

export default HomeBackground;
