import React, { useEffect, useRef, useState } from "react";
import Div from "../Div";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "react-bootstrap";
import Heading from "../Heading";
import Spacer from "../Spacer";
import Paragraph from "../Paragraph";
import Ideabox from "@/public/assets/icons/Ideabox.png";
import Telkomsel from "@/public/assets/icons/Telkomsel.png";
import Amoeba from "@/public/assets/icons/LandingPage.png";
import Ideabox1 from "@/public/assets/images/ideabox/idea1.png";
import Ideabox2 from "@/public/assets/images/ideabox/idea2.png";
import Ideabox3 from "@/public/assets/images/ideabox/idea3.png";
import Ideabox4 from "@/public/assets/images/ideabox/idea4.png";
import Irecruitment1 from "@/public/assets/images/telkomsel/irec1.png";
import Irecruitment2 from "@/public/assets/images/telkomsel/irec2.png";
import Irecruitment3 from "@/public/assets/images/telkomsel/irec3.png";
import Irecruitment4 from "@/public/assets/images/telkomsel/irec4.png";
import Amoeba1 from "@/public/assets/images/amoeba/amoeba1.png";
import Amoeba2 from "@/public/assets/images/amoeba/amoeba2.png";
import Amoeba3 from "@/public/assets/images/amoeba/amoeba3.png";
import Amoeba4 from "@/public/assets/images/amoeba/amoeba4.png";
import Monitor from "@/public/assets/icons/Monitor.png";
import Nextjs from "@/public/assets/icons/devicon_nextjs.png";
import MySql from "@/public/assets/icons/devicon_mysql.png";
import ReactJs from "@/public/assets/icons/devicon_react.png";
import Laravel from "@/public/assets/icons/icon_laravel.png";
import Postgre from "@/public/assets/icons/logos_postgresql.png";
import Mui from "@/public/assets/icons/logos_material-ui.png";
import NestJs from "@/public/assets/icons/icon_nest.png";
import FramerMotion from "@/public/assets/icons/devicon_framermotion.png";
import Image from "next/image";
import Link from "next/link";

const MyWork = () => {
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
        opacity: 1, y: 0
      });
    }
  }, [controls, inView]);

  const [width, setWidth] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [width3, setWidth3] = useState(0);
  const carousel = useRef();
  const carousel2 = useRef();
  const carousel3 = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    setWidth2(carousel2.current.scrollWidth - carousel2.current.offsetWidth);
    setWidth3(carousel3.current.scrollWidth - carousel3.current.offsetWidth);
  }, []);
  return (
    <Container>
      <motion.div ref={ref}>
      <Spacer size={120}/>
      <Div className="x-mywork-section">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -300 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <Heading
            fontSize="50px"
            mobileFontSize="40px"
            className="font-fredoka-bold"
            color="palette-2"
            text="🧑‍💻 My Work"
            style={{ letterSpacing: "5px" }}
          />
        </motion.div>
        <Spacer size={50} />

        {/* IDEA BOX WORK */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={controls2}
          transition={{delay : 0.5, duration: 0.5 }}
        >
          <Div className="x-ideabox">
            <Div flex column gap={4}>
              <Image src={Ideabox} alt="ideabox-logo" className="x-small-logo" />
              <Paragraph
                fontSize="20px"
                className="font-fredoka-normal"
                color="palette-2"
              >
                <span className="font-fredoka-bold">Ideabox Multitenant</span>{" "}
                by TelkomGroup is a Website-based application for managing idea
                collectors. You can see all of the ideas in idea feeds and see
                the detail, you can also create your own idea, likes, comment
                and join in other people ideas, and many more!.
              </Paragraph>
              <motion.div
                ref={carousel}
                className="x-image-slide-container"
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="x-image-slide-carousel d-flex gap-4"
                >
                  <motion.div>
                    <Image
                      src={Ideabox1}
                      alt="ideabox-1"
                      className="x-work-img"
                    />
                  </motion.div>
                  <motion.div>
                    <Image
                      src={Ideabox2}
                      alt="ideabox-2"
                      className="x-work-img"
                    />
                  </motion.div>
                  <motion.div>
                    <Image
                      src={Ideabox3}
                      alt="ideabox-3"
                      className="x-work-img"
                    />
                  </motion.div>
                  <motion.div>
                    <Image
                      src={Ideabox4}
                      alt="ideabox-4"
                      className="x-work-img"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
              <Paragraph
                fontSize="20px"
                className="font-fredoka-normal"
                color="palette-2"
              >
                <span className="font-fredoka-bold">Unlock</span> a world of
                innovation and collaboration with{" "}
                <span className="font-fredoka-bold">IdeaBox Multitenant</span>
              </Paragraph>
              <Link
                href="https://km4.ideaboxapp.com/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Div
                  className="x-production"
                  flex
                  row
                  alignCenter
                  gap={2}
                  pointer
                >
                  <Image src={Monitor} alt="monitor" />
                  <Paragraph
                    className="font-fredoka-semibold"
                    color="pr-00"
                    size="p16"
                    text="km4.ideaboxapp.com"
                    marginless
                  />
                </Div>
              </Link>
              <Paragraph
                fontSize="20px"
                className="font-fredoka-bold"
                color="palette-2"
                text="Technologies Used"
              />
              <Div className="x-technology-used" flex row gap={2}>
                <Image src={Nextjs} alt="nextjs" className="x-technologies" />
                <Image src={MySql} alt="mysql" className="x-technologies" />
                <Image src={ReactJs} alt="react" className="x-technologies" />
                <Image src={Laravel} alt="laravel" className="x-technologies" />
              </Div>
            </Div>
          </Div>

        {/* I-RECRUITMENT */}
        <Spacer size={50} />
        <Div className="x-irecruitment">
          <Div flex column gap={4}>
            <Image src={Telkomsel} alt="irec-logo" className="x-small-logo" />
            <Paragraph
              fontSize="20px"
              className="font-fredoka-normal"
              color="palette-2"
            >
              <span className="font-fredoka-bold">I-Recruitment</span> is a
              Website-based Modern Job Portal Application for Telkomsel, You can
              see and apply on open vacancy, also you can see the recruitment
              process in just one app!
            </Paragraph>
            <motion.div
              ref={carousel2}
              className="x-image-slide-container"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width2 }}
                className="x-image-slide-carousel d-flex gap-4"
              >
                <motion.div>
                  <Image
                    src={Irecruitment1}
                    alt="irec-1"
                    className="x-work-img"
                  />
                </motion.div>
                <motion.div>
                  <Image
                    src={Irecruitment2}
                    alt="irec-2"
                    className="x-work-img"
                  />
                </motion.div>
                <motion.div>
                  <Image
                    src={Irecruitment3}
                    alt="irec-3"
                    className="x-work-img"
                  />
                </motion.div>
                <motion.div>
                  <Image
                    src={Irecruitment4}
                    alt="irec-4"
                    className="x-work-img"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            <Paragraph
              fontSize="20px"
              className="font-fredoka-normal"
              color="palette-2"
            >
              Step into a{" "}
              <span className="font-fredoka-bold">world of modern hiring</span>{" "}
              with I-Recruitment - Telkomsel's all-in-one job portal where you
              can explore open vacancies and seamlessly navigate the entire
              recruitment process in a{" "}
              <span className="font-fredoka-bold">single app!</span>
            </Paragraph>
            <Link
              href="https://telkomsel-irec.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Div
                className="x-production"
                flex
                row
                alignCenter
                gap={2}
                pointer
              >
                <Image src={Monitor} alt="monitor" />
                <Paragraph
                  className="font-fredoka-semibold"
                  color="pr-00"
                  size="p16"
                  text="telkomsel-irec.vercel.app"
                  marginless
                />
              </Div>
            </Link>
            <Paragraph
              fontSize="20px"
              className="font-fredoka-bold"
              color="palette-2"
              text="Technologies Used"
            />
            <Div className="x-technology-used" flex row gap={2}>
              <Image src={Nextjs} alt="nextjs" className="x-technologies" />
              <Image src={Postgre} alt="postgre" className="x-technologies" />
              <Image src={ReactJs} alt="react" className="x-technologies" />
              <Image src={Mui} alt="mui" className="x-technologies" />
              <Image src={NestJs} alt="nest" className="x-technologies" />
            </Div>
          </Div>
        </Div>

        {/* LANDING AMOEBA */}
        <Spacer size={50} />
        <Div className="x-amoebapage">
          <Div flex column gap={4}>
            <Image src={Amoeba} alt="amoeba-logo" className="x-small-logo"  />
            <Paragraph
              fontSize="20px"
              className="font-fredoka-normal"
              color="palette-2"
            >
              Website-based{" "}
              <span className="font-fredoka-bold">Landing Page</span> for{" "}
              <span className="font-fredoka-bold">Digital Amoeba</span> that
              have interactive design and playful interface. Using Framer Motion
              for the animation.
            </Paragraph>
            <motion.div
              ref={carousel3}
              className="x-image-slide-container"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width3 }}
                className="x-image-slide-carousel d-flex gap-4"
              >
                <motion.div>
                  <Image src={Amoeba1} alt="amoeba-1" className="x-work-img" />
                </motion.div>
                <motion.div>
                  <Image src={Amoeba2} alt="amoeba-2" className="x-work-img" />
                </motion.div>
                <motion.div>
                  <Image src={Amoeba3} alt="amoeba-3" className="x-work-img" />
                </motion.div>
                <motion.div>
                  <Image src={Amoeba4} alt="amoeba-4" className="x-work-img" />
                </motion.div>
              </motion.div>
            </motion.div>
            <Paragraph
              fontSize="20px"
              className="font-fredoka-normal"
              color="palette-2"
            >
              Discover{" "}
              <span className="font-fredoka-bold">Digital Amoeba's</span>{" "}
              Website-based Landing Page - a delightful blend of interactivity
              and playful design, brought to life with seamless animations
              powered by{" "}
              <span className="font-fredoka-bold">Framer Motion.</span>
            </Paragraph>
            <Link
              href="https://dev.brand.digitalamoeba.id/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Div
                className="x-production"
                flex
                row
                alignCenter
                gap={2}
                pointer
              >
                <Image src={Monitor} alt="monitor" />
                <Paragraph
                  className="font-fredoka-semibold"
                  color="pr-00"
                  size="p16"
                  text="dev.brand.digitalamoeba.id"
                  marginless
                />
              </Div>
            </Link>
            <Paragraph
              fontSize="20px"
              className="font-fredoka-bold"
              color="palette-2"
              text="Technologies Used"
            />
            <Div className="x-technology-used" flex row gap={2}>
              <Image src={Nextjs} alt="nextjs" className="x-technologies" />
              <Image src={MySql} alt="mysql" className="x-technologies" />
              <Image src={ReactJs} alt="react" className="x-technologies" />
              <Image src={FramerMotion} alt="framer-motion" className="x-technologies" />
            </Div>
          </Div>
        </Div>
        </motion.div>
      </Div>
      </motion.div>
    </Container>
  );
};

export default MyWork;
