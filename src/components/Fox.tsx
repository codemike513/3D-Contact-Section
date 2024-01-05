"use client";
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
  const fileurl = "/fox/scene.gltf";
  const mesh = useRef<Mesh>(null);
  const gltf = useLoader(GLTFLoader, fileurl);

  useFrame(() => {
    mesh.current.rotation.y += 0.05;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

function Fox() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Canvas className="h-2xl w-2xl">
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}

export default Fox;
