// main.tsx or main.js
import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./page";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Home />);
