import React from "react";
import styled from "@emotion/styled";
import Box from "ui-box";
import { useMediaQuery } from "react-responsive";
import "../App.css";
import { Footer } from "./Footer";
import Jordan from "../assets/images/jordan.svg";
import Mug from "../assets/images/mug.svg";
import Pj from "../assets/images/pyjamas.svg";
import Hat from "../assets/images/party-hat.svg";
import Lazy from "../assets/images/lazy-eye.svg";
import Pink from "../assets/images/pink-bucket-hat.svg";
import { motion } from "framer-motion";

const H5 = styled.h5`
font-size:16px;
margin-top:15px;
display: flex;
justify-content:center;
align-items:center;

@media (max-width: 1100px){
  margin-top: 150px;
  font-size:20px;
`;

const H1 = styled.h1`
  @media (max-width: 646px) {
    font-size: 30px;
  }
`;
export const Traits = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  return (
    <Box width="85%" marginX="auto">
      <Box
        textAlign="center"
        marginTop="6rem"
        marginBottom="1rem"
        width="60%"
        marginX="auto"
      >
        <H1 className="head">TRAITS & RARITY</H1>
        <Box
          marginY={isMobile ? "25px" : "10px"}
          color="rgba(255, 255, 255, 0.82)"
        >
          <p className="paragragh">
            Each Lazy Cat is unique (irrespective of the background), and
            programmatically generated from over 75 traits.. <br />
            As the creators, we believe all Cats are cool, unique and lazy.. But
            for your sake, there are rares.
          </p>
        </Box>

        <H5>Rarity will be released after each Lazy Cat has been revealed!</H5>
      </Box>
      <div>
        <Box display="flex" justifyContent="space-between">
          <motion.img
            className="bk-img"
            src={Jordan}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 2 }}
          />
          <motion.img
            className="bk-img"
            src={Mug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 2 }}
          />
          <motion.img
            className="bk-img"
            src={Pj}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 2 }}
          />
        </Box>
      </div>
      <div>
        <Box display="flex" justifyContent="space-around">
          <motion.img
            className="bk-img"
            src={Hat}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 2 }}
          />
          <motion.img
            className="bk-img"
            src={Pink}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 2 }}
          />
        </Box>
      </div>
      <div>
      <Box display="flex" justifyContent="center">
          <motion.img
            className="bk-img"
            src={Lazy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 2 }}
          />
        </Box>
      </div>

      <Footer />
    </Box>
  );
};
