import React, { useState, createContext, useEffect } from "react";

export type cursorPosition = {
  x: number;
  y: number;
};

type CursorContextType = {
  cursorData: { data: string; text: string };
  setCursorData: (data: { data: string; text: string }) => void;
  cursorPosition: cursorPosition;
};

export const CursorContext = createContext<CursorContextType>({
  cursorData: { data: "", text: "" },
  setCursorData: (data: { data: string; text: string }) => {},
  cursorPosition: { x: 0, y: 0 },
});

export const CursorProvider = ({ children }: React.PropsWithChildren) => {
  const [cursorData, setCursorData] = useState({
    data: "",
    text: "",
  });

  const [cursorPosition, setCursorPosition] = useState<cursorPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <CursorContext.Provider
      value={{ cursorData, setCursorData, cursorPosition }}
    >
      {children}
    </CursorContext.Provider>
  );
};
