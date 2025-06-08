import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import SkipSizeSelector from "./SkipSizeSelector.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SkipSizeSelector />
  </StrictMode>
);
