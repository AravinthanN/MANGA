"use client";
// Import React and ReactDOM
const { useState } = React;
const ReactDOM = window.ReactDOM;

// Import the Home component
import { Home } from "./page/Home"; // Assuming Home component is in 'page/Home.js'

// Render the Home component into the 'root' element
ReactDOM.render(<Home />, document.getElementById("root"));
