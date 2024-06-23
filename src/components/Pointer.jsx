import React, { useRef } from "react";
import { BallCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Pointer = ({ vector = new THREE.Vector3() }) => {
  const pointerRef = useRef();

  useFrame(({ pointer, viewport }) => {
    pointerRef.current?.setNextKinematicTranslation(
      vector.set(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      )
    );
  });
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={pointerRef}
    >
      <BallCollider args={[0.3]} />
    </RigidBody>
  );
};

export default Pointer;
