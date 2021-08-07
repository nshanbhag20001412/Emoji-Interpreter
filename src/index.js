import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
document.body.style.backgroundImage = "url('./Images/Wallpaper.png')";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
