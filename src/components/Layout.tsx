import React, { useContext, useEffect } from "react";
import Menu from "./Menu";
import Cursor from "./Cursor";
import { CursorContext } from "../contexts/CursorContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { cursorPosition } = useContext(CursorContext);
  const { colorTheme } = useContext(ThemeContext);

  useEffect(() => {
    const root = document.getElementById("root");

    root?.classList.add(`theme--${colorTheme}`);

    return () => {
      root?.classList.remove(`theme--${colorTheme}`);
    };
  }, [colorTheme]);

  return (
    <main className={`theme--${colorTheme}`}>
      <Menu />
      <Cursor mousePosition={cursorPosition} />
      {children}
    </main>
  );
}
