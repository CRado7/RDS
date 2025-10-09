import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

function FloatingBox({ images, size, glowRef }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();
  const [right, left, top, bottom, front, back] = useTexture(images);

  const { scale } = useSpring({
    scale: hovered ? 1.01 : 1,
    config: { tension: 300, friction: 10 },
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const y = Math.sin(t * 2) * 0.08;

    if (meshRef.current) {
      meshRef.current.position.y = y;
      meshRef.current.rotation.x = -0.05;
      meshRef.current.rotation.z = 0;
      meshRef.current.rotation.y += 0.001;
    }

    if (glowRef.current) {
      glowRef.current.position.y = -size[1] / 2 - 0.15 + y * 0.9;
    }
  });

  return (
    <a.mesh
      ref={meshRef}
      castShadow
      receiveShadow
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial attach="material-0" map={right} />
      <meshStandardMaterial attach="material-1" map={left} />
      <meshStandardMaterial attach="material-2" map={top} />
      <meshStandardMaterial attach="material-3" map={bottom} />
      <meshStandardMaterial attach="material-4" map={front} />
      <meshStandardMaterial attach="material-5" map={back} />
    </a.mesh>
  );
}

export default function Box3D({
  size = [1, 1.64, 0.75],
  images = [
    "/chung-li-package/Right.png",
    "/chung-li-package/Left.png",
    "/chung-li-package/Top.png",
    "/chung-li-package/Bottom.png",
    "/chung-li-package/Front.png",
    "/chung-li-package/Back.png",
  ],
}) {
  const glowRef = useRef();

  return (
    <div
      style={{
        width: "100%",
        height: "700px",
        position: "relative",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Canvas
        shadows
        camera={{
          position: [0.2, 0.5, 2.3],
          fov: 65,
        }}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 4, 3]} intensity={1.3} castShadow />
        <pointLight position={[0, -1, 0]} intensity={1} color="#00ffee" />

        <FloatingBox images={images} size={size} glowRef={glowRef} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          enableDamping
          dampingFactor={0.1}
          target={[0, 0.2, 0]}
          minPolarAngle={Math.PI / 2} // lock vertical rotation
          maxPolarAngle={Math.PI / 2} // lock vertical rotation
        />
      </Canvas>
    </div>
  );
}
