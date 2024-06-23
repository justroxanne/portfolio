import React, { useState, createContext } from "react";

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorData, setCursorData] = useState({
    data: "",
    text: "",
  });

  return (
    <CursorContext.Provider value={{ cursorData, setCursorData }}>
      {children}
    </CursorContext.Provider>
  );
};
