"use client";

// Import React and ReactDOM
import React, { useState } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

// Import the Home component
import { Home } from "./page.js"; // Ensure page.js exports the Home component

// Render the Home component into the 'root' element
ReactDOM.render(<Home />, document.getElementById("root"));
