import "./styles/index.scss";
import Hello from "./pages/Hello";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Follower from "./components/Follower";
import { useEffect, useState } from "react";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    <div>
      <Follower mousePosition={mousePosition} />
      <Hello />
      <Work mousePosition={mousePosition} />
      <About />
      <Contact />
    </div>
  );
}

export default App;
