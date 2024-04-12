import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience/Experience.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Canvas
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      shadows
      camera={{ position: [0, 0, 20], fov: 50 }}
      className="canvas"
    >
      <Experience />
    </Canvas>
  </React.StrictMode>,
);
