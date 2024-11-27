"use client";
import Granim from "granim";
import { useEffect } from "react";

const HomeBackground = () => {
  useEffect(
    () => {
      new Granim({
        element: "#granim-bg",
        direction: "top-bottom",
        isPausedWhenNotInView: true,
        image: {
          source:
            "https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          blendingMode: "multiply",
          stretchMode: ["stretch", "stretch"],
        },
        states: {
          "default-state": {
            gradients: [
              ["#29323c", "#485563"],
              ["#d2bab0", "#a7eca7"],
              ["#80d3fe", "#7ea0c4"],
              ["#82c09a", "#846358"],
            ],
            transitionSpeed: 7000,
          },
        },
      });
    },
    [
      // make screen size a dependency?
    ]
  );

  return <canvas id="granim-bg" className="min-h-screen size-full"></canvas>;
};

export default HomeBackground;
