import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useIntersection } from "../../hooks/useIntersection";
const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight
        position={isMobile ? [-10, 25, 5] : [-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 0.5 : 1}
        castShadow
        shadow-mapSize={isMobile ? 512 : 1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -2, -1.8] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);
  const [ref, isVisible] = useIntersection({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
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
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      {isVisible && (
        <Canvas
          frameloop="demand"
          gl={{ preserveDrawingBuffer: true, antialias: true }}
          shadows
          camera={{
            position: isMobile ? [15, 2, 3] : [20, 3, 5],
            fov: isMobile ? 30 : 25,
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              rotateSpeed={1}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default React.memo(ComputersCanvas);
