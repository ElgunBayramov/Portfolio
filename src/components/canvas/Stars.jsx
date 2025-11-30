import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useIntersection } from "../../hooks/useIntersection";
const Stars = (props) => {
  const ref = useRef();
  const pointCount = 5000;
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(pointCount * 3), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [ref, isVisible] = useIntersection({
    threshold: 0, // Stars həmişə görünən olsun, amma lazy load
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="w-full h-auto absolute inset-0 z-[-1]">
      {isVisible && (
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
