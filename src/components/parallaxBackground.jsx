import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  // scroll-driven background-position values (subtle parallax)
  const bgPos3 = useTransform(x, [0, 1], ["50% 30%", "50% 70%"]);
  const bgPosPlanets = useTransform(x, [0, 1], ["50% 30%", "50% 10%"]);
  const bgPos2 = useTransform(x, [0, 1], ["50% 30%", "50% 55%"]);
  const bgPos1 = useTransform(x, [0, 1], ["50% 30%", "50% 45%"]);
  // scroll-linked opacity and subtle scale for depth

  const opacity3 = useTransform(x, [0, 1], [1, 0.85]);
  const opacityPlanets = useTransform(x, [0, 1], [1, 0.9]);
  const opacity2 = useTransform(x, [0, 1], [1, 0.92]);
  const opacity1 = useTransform(x, [0, 1], [1, 0.95]);

  const scale3 = useTransform(x, [0, 1], [1, 1.03]);
  const scalePlanets = useTransform(x, [0, 1], [1, 1.02]);
  const scale2 = useTransform(x, [0, 1], [1, 1.01]);
  const scale1 = useTransform(x, [0, 1], [1, 1]);

  const bgImage = '/assets/bgimage.png'

  return (
    <section className="absolute inset-0 bg-black/40 no-scrollbar">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: `url("${bgImage}")`,
            backgroundPosition: bgPos3,
            backgroundSize: "cover",
            y: mountain3Y,
            opacity: opacity3,
            scale: scale3,
          }}
          animate={{ translateX: [0, 20, 0] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: `url("${bgImage}")`,
            backgroundPosition: bgPosPlanets,
            backgroundSize: "cover",
            x: planetsX,
            opacity: opacityPlanets,
            scale: scalePlanets,
          }}
          animate={{ translateX: [0, -30, 0] }}
          transition={{ duration: 60, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url("${bgImage}")`,
            backgroundPosition: bgPos2,
            backgroundSize: "cover",
            y: mountain2Y,
            opacity: opacity2,
            scale: scale2,
          }}
          animate={{ translateX: [0, 12, 0] }}
          transition={{ duration: 50, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        {/* Mountaine Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url("${bgImage}")`,
            backgroundPosition: bgPos1,
            backgroundSize: "cover",
            y: mountain1Y,
            opacity: opacity1,
            scale: scale1,
          }}
          animate={{ translateX: [0, 6, 0] }}
          transition={{ duration: 45, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
