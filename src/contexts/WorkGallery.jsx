import React, { useState, createContext } from "react";

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [currentImageSrc, setCurrentImageSrc] = useState("");

  return (
    <GalleryContext.Provider value={{ currentImageSrc, setCurrentImageSrc }}>
      {children}
    </GalleryContext.Provider>
  );
};
