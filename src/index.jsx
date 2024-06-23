import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { GalleryProvider } from "./contexts/WorkGallery.jsx";
import { CursorProvider } from "./contexts/CursorData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
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
