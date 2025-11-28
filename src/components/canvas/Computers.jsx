import React, { useState } from "react";
import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setisMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows={false}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        antialias: true,
        preserveDrawingBuffer: true,
      }}
      dpr={[1, 2]}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          rotateSpeed={0.8}
          // zoomSpeed={0.6}
          // minDistance={1}
          // maxDistance={50}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
