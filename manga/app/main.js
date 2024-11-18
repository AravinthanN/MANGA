"use client";

// Import React and ReactDOM
import React, { useState } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";

// Import the Home component
import { Home } from "./page.js"; // Ensure this points to the correct file

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a React root and render the Home component
const root = createRoot(rootElement);
root.render(<Home />);
