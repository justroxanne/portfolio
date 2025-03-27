import React, { useContext, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { CursorContext } from "../contexts/CursorContext";

interface Props {
  position: number[];
  color: string;
  floatingRange: number;
  time: number;
}

const Donut = ({ position, color, floatingRange, time }: Props) => {
  const { setCursorData } = useContext(CursorContext);
  const [wireframe, setWireframe] = useState(false);
  const donutRef = useRef<THREE.Mesh>(null);
  const currentPosition = new THREE.Vector3(
    position[0],
    position[1],
    position[2]
  );

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (donutRef.current) {
      donutRef.current.rotation.x += Math.random() * delta;
      donutRef.current.rotation.y += Math.random() * delta;

      donutRef.current.position.y = THREE.MathUtils.lerp(
        currentPosition.y,
        floatingRange * Math.sin(time * t) + currentPosition.y,
        1
      );
    } else {
      return;
    }
  });

  return (
    <group>
      <mesh
        ref={donutRef}
        position={currentPosition}
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
    </group>
  );
};

export default Donut;
