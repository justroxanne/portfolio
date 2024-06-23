import { useContext, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { CursorContext } from "../contexts/CursorData";

const Donut = ({ position, color, floatingRange, time }) => {
  const { setCursorData } = useContext(CursorContext);
  const [wireframe, setWireframe] = useState(false);
  const donutRef = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    donutRef.current.rotation.x += Math.random() * delta;
    donutRef.current.rotation.y += Math.random() * delta;

    donutRef.current.position.y = THREE.MathUtils.lerp(
      position[1],
      floatingRange * Math.sin(time * t) + position[1],
      1
    );
  });

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        ref={donutRef}
        position={position}
        onClick={() => setWireframe(!wireframe)}
        onPointerOver={() => {
          setCursorData({
            data: "text",
            text: "Click me!",
          });
        }}
        onPointerLeave={() => {
          setCursorData({
            data: "",
            text: "",
          });
        }}
      >
        <torusGeometry args={[0.5, 0.25, 24, 48]} />
        <meshPhysicalMaterial
          color={color}
          wireframe={wireframe}
          roughness={0}
          reflectivity={1}
        />
      </mesh>
    </>
  );
};

export default Donut;
