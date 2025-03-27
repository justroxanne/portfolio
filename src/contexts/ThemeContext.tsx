import React, { createContext, useState } from "react";

type ThemeContextType = {
  colorTheme: string;
  setColorTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  colorTheme: "light",
  setColorTheme: (theme: string) => {},
});

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [colorTheme, setColorTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
