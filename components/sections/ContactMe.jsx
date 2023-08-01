import React, { useEffect } from "react";
import Div from "../Div";
import { Container } from "react-bootstrap";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Image from "next/image";
import Github from "@/public/assets/icons/github.png";
import Linkedin from "@/public/assets/icons/linkedin.png";
import Gmail from "@/public/assets/icons/gmail.png";
import Profile from "@/public/assets/images/me.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactMe = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();
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

  useEffect(() => {
    if (inView) {
      // Animate the element when it comes into view
      controls2.start({
        opacity: 1,
        scale: [0, 1.1, 1],
      });
    }
  }, [controls, inView]);

  return (
    <Div className="x-contactMe-section">
      <Container>
        <Div flex column gap={4} className="x-contactMe-content">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={controls2}
            transition={{ duration: 0.5 }}
          >
            <Heading
              className="x-header-text-contact font-fredoka-bold"
              text="Lets Open the door to collaboration and create something extraordinary together!"
            />
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -300 }}
            animate={controls}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <Paragraph
              fontSize="20px"
              text="Reach me at : "
              color="pr-00"
              className="font-fredoka-normal"
            />
          </motion.div>
          <Div flex row gap={3} alignCenter>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }}
              animate={controls}
              transition={{ delay: 1.2, duration: 0.4 }}
            >
              <Image src={Github} alt="github" />
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }}
              animate={controls}
              transition={{ delay: 1.9, duration: 0.4 }}
            >
              <Paragraph
                text="reihanms"
                fontSize="20px"
                color="pr-00"
                className="font-fredoka-bold"
                marginless
              />
            </motion.div>
          </Div>
          <Div flex row gap={3} alignCenter>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }}
              animate={controls}
              transition={{ delay: 1.4, duration: 0.4 }}
            >
              <Image src={Linkedin} alt="github" />
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }}
              animate={controls}
              transition={{ delay: 1.9, duration: 0.4 }}
            >
              <Paragraph
                text="Reihan Manzis Syahputra"
                fontSize="20px"
                color="pr-00"
                className="font-fredoka-bold"
                marginless
              />
            </motion.div>
          </Div>
          <Div flex row gap={3} alignCenter>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }}
              animate={controls}
              transition={{ delay: 1.6, duration: 0.4 }}
            >
              <Image src={Gmail} alt="github" />
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -300 }}
              animate={controls}
              transition={{ delay: 1.9, duration: 0.4 }}
            >
              <Paragraph
                text="reihanmanzis1@gmail.com"
                fontSize="20px"
                color="pr-00"
                className="font-fredoka-bold"
                marginless
              />
            </motion.div>
          </Div>
        </Div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ delay: 2.3, duration: 0.2 }}
        >
          <Image className="x-me" src={Profile} alt="me" />
        </motion.div>
      </Container>
    </Div>
  );
};

export default ContactMe;
