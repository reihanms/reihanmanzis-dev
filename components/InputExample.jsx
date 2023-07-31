import React, { useState } from "react";
import { Div, Paragraph, Heading, Spacer } from "@/components";
import Amoeba from "@/public/assets/icons/icon-amoeba.png";
import AmoebaBackground from "@/public/assets/images/img-amoeba-background.jpg";
import Image from "next/legacy/image";
import { Col, Container, Row } from "react-bootstrap";
import { Input } from "@/components/form";
import { AiOutlineSearch } from "react-icons/ai";

const InputExample = ({ page = "Development" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("apis@mail.com");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  const categories = [
    "Prevention",
    "Treatment",
    "Survivorship",
    "Screening and Diagnostics",
    "How might we make preventive health the norm?",
  ];

  return (
    <Div flex center column className="min-vh-100">
      <Div absolute className="w-100 h-100" zIndex={-1}>
        <Image
          src={AmoebaBackground}
          objectFit="cover"
          layout="fill"
          alt="Background"
        />
      </Div>
      <Image
        src={Amoeba}
        width={100}
        height={100}
        className="pb-3"
        objectFit="contain"
        alt="Amoeba Logo"
      />
      <Heading size="h2" weight="bold" text={`${page} Page`} marginless />
      <Paragraph
        size="p14"
        weight="normal"
        text="this below is form input example usage"
      />

      <Container>
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={8} lg={6} xl={5}>
            <Div backgroundColor="pr-00" radius={5} className="p-4 drop-shadow-lg">
              {/* input search with custom icon */}
              <Input
                placeholder="search your opportunity"
                customInlineLeftIcon={<AiOutlineSearch />}
              />

              <Spacer size={16} />

              {/* regular input name with label */}
              <Input
                label="Name"
                placeholder="fill your name"
                tooltipText="fill your name here:)"
                errorHint="please enter your name!"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Spacer size={16} />

              {/* input email with valid condition */}
              <Input
                label="Email"
                type="email"
                isValid
                placeholder="fill your email"
                errorHint="error email!"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Spacer size={16} />

              {/* input password with error condition */}
              <Input
                type="password"
                label="Password"
                tooltipText="enter your password with minimum 8 character"
                placeholder="input your password"
                isError
                errorHint="error password!"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Spacer size={16} />


              {/* input select example */}
              <Input
                as="select"
                label="Choose your idea"
              >
                <option key="blankChoice" hidden value>
                  Select Ideas
                </option>
                {categories.map((item, idx) => (
                  <option key={idx} value={item}>{item}</option>
                ))}
              </Input>

              <Spacer size={16} />

              {/* textarea example */}
              <Input
                as="textarea"
                label="Description"
                rows={4}
                placeholder="describe yourself"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={160}
                showMaxLetter
              />
            </Div>
          </Col>
        </Row>
      </Container>
    </Div>
  );
};

export default InputExample;
