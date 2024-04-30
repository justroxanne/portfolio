import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hello from "./pages/Hello";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Cursor from "./components/Cursor";
import "./styles/index.scss";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { colorTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.getElementById("root").classList.add(`theme--${colorTheme}`);

    return () => {
      document.getElementById("root").classList.remove(`theme--${colorTheme}`);
    };
  }, [colorTheme]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className={`theme--${colorTheme}`}>
      <Navbar />
      <Cursor mousePosition={mousePosition} />
      <Hello />
      <Work mousePosition={mousePosition} />
      <About />
      <Contact />
    </main>
  );
}

export default App;
