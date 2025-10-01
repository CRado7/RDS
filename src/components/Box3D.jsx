import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import { sliceDieline } from "../sliceDieline";

/**
 * Floating, interactive 3D box with hover, reflection, and zoom
 */
function FloatingBox({ textures, size }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();

  const { scale } = useSpring({
    scale: hovered ? 1.05 : 1,
    config: { tension: 300, friction: 10 },
  });

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(t * 2) * 0.05;
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
      <meshStandardMaterial attach="material-0" map={textures.right} />
      <meshStandardMaterial attach="material-1" map={textures.left} />
      <meshStandardMaterial attach="material-2" map={textures.top} />
      <meshStandardMaterial attach="material-3" map={textures.bottom} />
      <meshStandardMaterial attach="material-4" map={textures.front} />
      <meshStandardMaterial attach="material-5" map={textures.back} />
    </a.mesh>
  );
}

function BoxModel({ image, size }) {
  const [textures, setTextures] = useState(null);

  useEffect(() => {
    sliceDieline(image).then(setTextures);
  }, [image]);

  if (!textures) return null;
  return <FloatingBox textures={textures} size={size} />;
}

// Custom camera zoom hook
function ZoomController({ zoom }) {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(2, 2, zoom); // zoom in/out by moving Z
    camera.updateProjectionMatrix();
  }, [zoom, camera]);
  return null;
}

export default function Box3D({
  image = "/Template.png",
  size = [1, 1.64, 1],
  autoRotate = true,
}) {
  const [zoom, setZoom] = useState(3); // default distance

  // Grab CSS var for floor color
  const colorMain =
    getComputedStyle(document.documentElement).getPropertyValue(
      "--color-main"
    ) || "#222";

  return (
    <div style={{ width: "100%", height: "550px", position: "relative" }}>
      <Canvas
        shadows
        camera={{ position: [2, 2, zoom], fov: 45 }}
        style={{ width: "100%", height: "500px" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[3, 5, 3]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Reflective floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -size[1] / 2, 0]}>
          <planeGeometry args={[10, 10]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={1.5}
            depthScale={1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color={colorMain}
            metalness={0.5}
            roughness={1}
          />
        </mesh>

        <BoxModel image={image} size={size} />
        <ZoomController zoom={zoom} />
      </Canvas>

      {/* Zoom Controls */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => setZoom((z) => Math.max(1.5, z - 0.5))}>
          Zoom In
        </button>
        <button onClick={() => setZoom((z) => Math.min(6, z + 0.5))}>
          Zoom Out
        </button>
      </div>
    </div>
  );
}
