import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { damping: 40 });
  const textY = useTransform(spring, [0, 0.5], [0, -80]);
  const textOpacity = useTransform(spring, [0, 0.5], [1, 0.6]);
  const canvasY = useTransform(spring, [0, 0.5], [0, -40]);
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <motion.div style={{ y: textY, opacity: textOpacity }} className="z-10">
        <HeroText />
      </motion.div>
      <ParallaxBackground />
      <motion.figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh", y: canvasY }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          {/* Basic lights so PBR materials in the GLB render with correct colors */}
          <ambientLight intensity={0.6} />
          <hemisphereLight skyColor={0xaaaaff} groundColor={0x080820} intensity={0.35} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </motion.figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
