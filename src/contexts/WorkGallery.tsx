import React, { useState, createContext } from "react";

type GalleryContextType = {
  currentImageSrc: string;
  setCurrentImageSrc: (src: string) => void;
};

export const GalleryContext = createContext<GalleryContextType>({
  currentImageSrc: "",
  setCurrentImageSrc: (src: string) => {},
});

export const GalleryProvider = ({ children }: React.PropsWithChildren) => {
  const [currentImageSrc, setCurrentImageSrc] = useState("");

  return (
    <GalleryContext.Provider value={{ currentImageSrc, setCurrentImageSrc }}>
      {children}
    </GalleryContext.Provider>
  );
};
