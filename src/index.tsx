import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.js";
import { GalleryProvider } from "./contexts/WorkGallery.js";
import { CursorProvider } from "./contexts/CursorContext.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CursorProvider>
        <GalleryProvider>
          <App />
        </GalleryProvider>
      </CursorProvider>
    </ThemeProvider>
  </React.StrictMode>
);
