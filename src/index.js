import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./pages/App"


createRoot(document.getElementById("root")).render(
    <BrowserRouter><App></App></BrowserRouter>);
