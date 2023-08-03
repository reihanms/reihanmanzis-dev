import React, { useEffect } from "react";
import Div from "../Div";
import Heading from "../Heading";
import { Container } from "react-bootstrap";
import Spacer from "../Spacer";
import Paragraph from "../Paragraph";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import AmoebaLogo from "@/public/assets/icons/icon_amoeba.png";
import Ideabox from "@/public/assets/icons/icon_ideabox.png";
import Telkomsel from "@/public/assets/icons/icon_telkomsel.png";
import Image from "next/image";
const WorkExp = () => {
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
        y: 0,
      });
    }
  }, [controls, inView]);
  return (
    <Div className="x-workexp-section">
      <motion.div ref={ref}>
        <Container>
          <Div className="x-workexp-content">
            <Div flex column justifyCenter style={{ textAlign: "center" }}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -300 }}
                animate={controls}
                transition={{ duration: 0.5 }}
              >
                <Heading
                  className="x-header-text-exp font-fredoka-bold"
                  color="pr-00"
                  text="⚒️ Work Experiences"
                  style={{ letterSpacing: "5px" }}
                />
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 10 }}
                animate={controls}
                transition={{ duration: 0.5 }}
              >
                <Paragraph
                  size="p16"
                  className="font-fredoka-normal"
                  text="Take a glimpse into my work experiences and see where I contribute my passion in web development."
                  color="pr-00"
                />
              </motion.div>
            </Div>
            <Spacer size={50} />

            {/* Telkom Amoeba */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={controls2}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Div className="x-telkom">
                <Div flex column gap={4}>
                  <Div className="x-header-work">
                    <Div flex alignCenter gap={2}>
                      <Image src={AmoebaLogo} alt="amoebaLogo" width={70} />
                      <Div>
                        <Paragraph
                          fontSize="25px"
                          text="Digital Amoeba"
                          className="font-poppins-bold"
                          marginless
                        />
                        <Paragraph
                          text="Telkom Indonesia"
                          className="font-poppins-normal"
                          marginless
                        />
                      </Div>
                    </Div>
                    <Div style={{ textAlign: "center" }}>
                      <Div className="x-position">
                        <Paragraph
                          fontSize="20px"
                          text="Front End Web Developer"
                          className="font-fredoka-bold"
                          marginless
                        />
                      </Div>
                      <Paragraph
                        fontSize="20px"
                        text="Feb 2023 - Jun 2023"
                        className="font-fredoka-normal"
                        marginless
                      />
                    </Div>
                  </Div>
                  <Paragraph
                    fontSize="20px"
                    className="font-fredoka-normal"
                    text="Telkom Digital Amoeba is Corporate Innovation Lab by Telkom Indonesia that incubate and accelerate ideas from its employees which create digital products and digital talents."
                  />
                  <Heading
                    style={{ paddingLeft: "2rem" }}
                    className="font-fredoka-bold"
                    text="What do I do : "
                    fontSize="40px"
                  />
                  <ul style={{ paddingLeft: "2rem" }}>
                    <li>
                      <Paragraph
                        fontSize="20px"
                        className="font-fredoka-normal"
                        text="Worked passionately in Front-End Web Developer position and Technology Division"
                      />
                    </li>
                    <li>
                      <Paragraph
                        fontSize="20px"
                        className="font-fredoka-normal"
                        text="Completed mastering JavaScript programming language, React JS framework and Next JS courses."
                      />
                    </li>
                    <li>
                      <Paragraph
                        fontSize="20px"
                        className="font-fredoka-normal"
                        text="Professionally collaborated in developing application using the Agile Scrum method."
                      />
                    </li>
                    <li>
                      <Paragraph
                        fontSize="20px"
                        className="font-fredoka-normal"
                        text="Carried out on daily, weekly and monthly meetings to discuss about the project, doing mentoring, and reporting work progress."
                      />
                    </li>
                    <li>
                      <Paragraph
                        fontSize="20px"
                        className="font-fredoka-normal"
                        text="Successfully accomplished the work targets given by the project owner."
                      />
                    </li>
                    <li>
                      <Paragraph
                        fontSize="20px"
                        className="font-fredoka-normal"
                        text="Implemented NextJS, ReactJS and React Bootstrap framework on the main project."
                      />
                    </li>
                    <li>
                      <Paragraph
                        fontSize="20px"
                        className="font-fredoka-normal"
                        text="Main Project : Develop a website-based application for managing idea collectors called “IdeaBox Multitenant” by Telkom. Built with JavaScript and PHP technology powered by NextJS and Laravel frameworks also MySQL Databases as the database."
                      />
                    </li>
                  </ul>
                  <Heading
                    style={{ paddingLeft: "2rem" }}
                    className="font-fredoka-bold"
                    text="Products : "
                    fontSize="40px"
                  />
                  <Div gap={4} className="x-products-container">
                    <Div flex row gap={2} alignCenter className="x-products">
                      <Image src={Ideabox} alt="ideabox" width={60} />
                      <Paragraph
                        fontSize="25px"
                        text="IdeaBox"
                        className="font-poppins-bold"
                        marginless
                      />
                    </Div>
                    <Div flex row gap={2} alignCenter className="x-products">
                      <Image src={AmoebaLogo} alt="ideabox" width={60} />
                      <Paragraph
                        fontSize="25px"
                        text="Landing Page Amoeba"
                        className="font-poppins-bold"
                        marginless
                      />
                    </Div>
                  </Div>
                </Div>
              </Div>

            {/* Telkomsel */}
            <Spacer size={50} />
              <Div className="x-telkom">
                <Div flex column gap={4}>
                  <Div className="x-header-work">
                    <Div flex alignCenter gap={2}>
                      <Image
                        src={Telkomsel}
                        alt="amoebaLogo"
                        className="x-telkomsel-logo"
                      />
                      <Div>
                        <Paragraph
                          text="Telekomunikasi Selular"
                          className="x-text-telkomsel font-poppins-bold"
                          marginless
                        />
                        <Paragraph
                          text="Telkom Indonesia"
                          className="font-poppins-normal"
                          marginless
                        />
                      </Div>
                    </Div>
                    <Div flex column justifyEnd style={{ textAlign: "center" }}>
                      <Div className="x-position">
                        <Paragraph
                          fontSize="20px"
                          text="Software Development"
                          className="font-fredoka-bold"
                          marginless
                        />
                      </Div>
                      <Paragraph
                        fontSize="20px"
                        text="Aug 2022 - Jan 2023"
                        className="font-fredoka-normal"
                        marginless
                      />
                    </Div>
                  </Div>
                  <Heading
                    style={{ paddingLeft: "2rem" }}
                    className="font-fredoka-bold"
                    text="What do I do : "
                    fontSize="40px"
                  />
                  <ul style={{ paddingLeft: "2rem" }}>
                    <li>
                      <Paragraph
                        fontSize="20px"
                        className="font-fredoka-normal"
                        text="Worked passionately in software development position and IT Directorate."
                      />
                    </li>
                    <li>
                      <Paragraph
                        fontSize="20px"
                        className="font-fredoka-normal"
                        text="Participated in project meetings, with project manager and other technical staff members."
                      />
                    </li>
                    <li>
                      <Paragraph
                        fontSize="20px"
                        className="font-fredoka-normal"
                        text="Side Project : Design and Develop Coaching Counseling Web Application, built with Yii2Framework, PostgreSQL."
                      />
                    </li>
                    <li>
                      <Paragraph
                        fontSize="20px"
                        className="font-fredoka-normal"
                        text="Main Project : Develop Job Portal Web Based Application that will used as telkomselrecruitment platform for user. Built with JavaScript modern technology such as Next JS, NestJS, and MySQL for the databases. Improved web performance, user experience and interfaceup to 70% from the previous application."
                      />
                    </li>
                    <li>
                      <Paragraph
                        fontSize="20px"
                        className="font-fredoka-normal"
                        text="Completed more than 10 class courses, contains modern technology framework learningmodules (NextJS, NestJS, ReactJS, Yii2), API learning modules, Software Architecture,Software testing, and how to work professionally in udemy learning platform."
                      />
                    </li>
                  </ul>
                  <Heading
                    style={{ paddingLeft: "2rem" }}
                    className="font-fredoka-bold"
                    text="Products : "
                    fontSize="40px"
                  />

                  <Div flex row gap={2} alignCenter>
                    <Image src={Telkomsel} alt="ideabox" width={100} />
                    <Paragraph
                      fontSize="25px"
                      text="I-Recruitment"
                      className="font-poppins-bold"
                      marginless
                    />
                  </Div>
                </Div>
              </Div>
            </motion.div>
          </Div>
        </Container>
      </motion.div>
      <Spacer size={100} />
    </Div>
  );
};

export default WorkExp;
