import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GalleryProvider } from "./contexts/WorkGallery.jsx";
import { FollowerProvider } from "./contexts/FollowerData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FollowerProvider>
      <GalleryProvider>
        <App />
      </GalleryProvider>
    </FollowerProvider>
  </React.StrictMode>
);
