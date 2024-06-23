import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Donut from "../components/Donut";
import Pointer from "./Pointer";

const Scene = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      camera={{ position: [0, 0, 40], fov: 10 }}
    >
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        <Donut
          position={[-3, -0.25, 10]}
          color={"mediumpurple"}
          floatingRange={0.8}
          time={1}
        />
        <Donut
          position={[-1, 1.65, 0]}
          color={"pink"}
          floatingRange={0.5}
          time={1.6}
        />
        <Donut
          position={[5.5, 0.5, 0]}
          color={"lightblue"}
          floatingRange={2}
          time={0.3}
        />
        <Donut
          position={[0.5, -1.6, -10]}
          color={"lightgreen"}
          floatingRange={1}
          time={0.6}
        />
      </Physics>
    </Canvas>
  );
};

export default Scene;
