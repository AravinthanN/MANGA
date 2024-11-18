import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./page"; // Assuming Home component is in './page'

// Get the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your Home component
root.render(<Home />);
