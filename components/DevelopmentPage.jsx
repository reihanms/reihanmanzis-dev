import React from "react";
import { Div, Paragraph, Heading } from "@/components";
import Amoeba from "@/public/assets/icons/icon-amoeba.png";
import AmoebaBackground from "@/public/assets/images/img-amoeba-background.jpg";
import Image from "next/legacy/image";

const DevelopmentPage = ({ page = "Development" }) => {
  return (
    <Div flex center column className="vh-100">
      <Div absolute className="w-100 h-100" zIndex={-1}>
        <Image
          src={AmoebaBackground}
          objectFit="cover"
          layout="fill"
          alt="Amoeba Logo"
        />
      </Div>
      <Image
        src={Amoeba}
        width={175}
        height={175}
        className="pb-3"
        objectFit="contain"
        alt="Amoeba Logo"
      />
      <Heading className="font-fredoka-bold" size="h1"  text={`From Concept to Creation: Unleashing Web Wonders`} />
      <Paragraph
        className="font-fredoka-bold"
        size="p16"
        weight="bold"
        text="on development progress"
      />
    </Div>
  );
};

export default DevelopmentPage;
