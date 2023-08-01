import React, { useEffect } from "react";
import Div from "../Div";
import Heading from "../Heading";
import Spacer from "../Spacer";
import { Container } from "react-bootstrap";
import Paragraph from "../Paragraph";
import Image from "next/image";
import Nextjs from "@/public/assets/icons/devicon_nextjs.png";
import Reactjs from "@/public/assets/icons/devicon_react.png";
import Vue from "@/public/assets/icons/logos_vue.png";
import Scss from "@/public/assets/icons/vscode-icons_file-type-scss.png";
import Tailwind from "@/public/assets/icons/devicon_tailwindcss.png";
import MaterialUi from "@/public/assets/icons/logos_material-ui.png";
import Laravel from "@/public/assets/icons/icon_laravel.png";
import Lamp from "@/public/assets/icons/icon-bulb.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once when the element comes into view
    threshold: 0.2, // Adjust the threshold value as needed (0 to 1)
  });

  useEffect(() => {
    if (inView) {
      // Animate the element when it comes into view
      controls.start({
        opacity: 1,
        x: 0,
        scale: 1,
      });
    }
  }, [controls, inView]);

  return (
    <Div className="x-hero-section">
      <Container>
        <Div className="x-content">
          <Div flex centerBetween>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }} 
              animate={controls} 
              transition={{ delay: 0.5, duration : 1.5 }} 
            >
              <Heading
                size="h2"
                className="font-fredoka-semibold"
                color="palette-1"
                text="reihan manzis."
              />
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }} 
              animate={controls} 
              transition={{ delay: 0.5, duration : 1.5 }} 
            >
              <Heading
                size="h2"
                className="font-fredoka-semibold"
                color="palette-1"
                text="Full-Stack Web Developer."
              />
            </motion.div>
          </Div>
          <Spacer size={10} />
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -300 }} 
            animate={controls} 
            transition={{ duration: 0.5 }} 
          >
            <Heading
              className="x-header-text font-fredoka-bold"
              color="palette-2"
              text="From Concept to Creation: Unleashing Web Wonders"
            />
          </motion.div>
          <Spacer size={10} />
          <motion.div
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 2, duration: 0.5 }} 
          >
            <Paragraph
              className="x-description-text font-fredoka-normal"
              color="palette-2"
              width="65%"
              lineHeight="32px"
              style={{ letterSpacing: "3px" }}
            >
              a passionate{" "}
              <span className="font-fredoka-bold">
                full-stack website developer
              </span>{" "}
              using next.js and react js with a penchant for{" "}
              <span className="font-fredoka-bold">cool</span> and{" "}
              <span className="font-fredoka-bold">captivating</span> designs.
            </Paragraph>
          </motion.div>
          <Spacer size={20} />
          <Div flex row gap={3}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }} 
              animate={controls} 
              transition={{ delay: 2.5, duration : 0.2 }} 
            >
              <Image src={Nextjs} alt="nextjs" className="x-skillset" />
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }} 
              animate={controls} 
              transition={{ delay: 2.7, duration : 0.2 }} 
            >
              <Image src={Reactjs} alt="nextjs" className="x-skillset" />
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }} 
              animate={controls} 
              transition={{ delay: 2.8, duration : 0.2 }} 
            >
              <Image src={Vue} alt="nextjs" className="x-skillset" />
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }} 
              animate={controls} 
              transition={{ delay: 2.9, duration : 0.2 }} 
            >
              <Image src={Scss} alt="nextjs" className="x-skillset" />
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }} 
              animate={controls} 
              transition={{ delay: 3, duration : 0.2 }} 
            >
              <Image src={Tailwind} alt="nextjs" className="x-skillset" />
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }} 
              animate={controls} 
              transition={{ delay: 3.1, duration : 0.2 }} 
            >
              <Image src={MaterialUi} alt="nextjs" className="x-skillset" />
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }} 
              animate={controls} 
              transition={{ delay: 3.2, duration : 0.2 }} 
            >
              <Image src={Laravel} alt="nextjs" className="x-skillset" />
            </motion.div>
          </Div>
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 3.4, duration: 0.5 }} 
          >
          <Div className="x-absolute-content">
            <Image
              src={Lamp}
              alt="bulb"
              style={{ transform: "rotate(-6.047deg)" }}
              className="x-bulb"
            />
            <Paragraph
              className="x-bulb-text font-fredoka-normal"
              color="palette-2"
              text="turning ideas into delightful digital experiences!"
              style={{ letterSpacing: "3px", textAlign: "center" }}
            />
          </Div>
          </motion.div>
        </Div>
      </Container>
    </Div>
  );
};

export default Hero;
