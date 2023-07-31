import React from "react";
import { Div, Layout, DevelopmentPage, Hero, MyWork, Spacer, WorkExp, ContactMe } from "@/components";
import { Container } from "react-bootstrap";

const Landing = () => {
  return (
    <Layout title="Reihan Dev">
      <Div className="x-landing-page">
        <Hero />
        <Spacer size={120}/>
        <MyWork />
        <Spacer size={20}/>
        <WorkExp />
        <ContactMe />
      </Div>
    </Layout>
  );
};

export default Landing;
