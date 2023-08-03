import React from "react";
import {
  Div,
  Layout,
  DevelopmentPage,
  Hero,
  MyWork,
  Spacer,
  WorkExp,
  ContactMe,
} from "@/components";
import { Container } from "react-bootstrap";
import { useScroll, useSpring, motion } from "framer-motion";

const Landing = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Layout title="Reihan Dev">
      <Div className="x-landing-page">
      <motion.div className="progress-bar" style={{ scaleX }} />
        <Hero />
        <MyWork />
        <Spacer size={20} />
        <WorkExp />
        <ContactMe />
      </Div>
    </Layout>
  );
};

export default Landing;
