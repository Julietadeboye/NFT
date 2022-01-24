import React from "react";
import styled from "@emotion/styled";
import Box from "ui-box";
import { useMediaQuery } from "react-responsive";
import "../App.css";
import { Footer } from "./Footer";

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
@media (max-width: 646px){
font-size: 30px;
}
`;
export const Traits = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  return (
    <Box width="85%"   marginX="auto">
      <Box
        textAlign="center"
        marginTop="6rem"
        height="750px"
        width="60%"
        marginX="auto"
      >
        <H1 className="head">TRAITS & RARITY</H1>
        <Box marginY={isMobile ? "25px":"10px"}  color="rgba(255, 255, 255, 0.82)">
          <p className="paragragh">
            Each Lazy Cat is unique (irrespective of the background), and
            programmatically generated from over 75 traits.. <br/>As the creators, we
            believe all Cats are cool, unique and lazy.. But for your sake,
            there are rares.
          </p>
        </Box>

        <H5>Rarity will be released after each Lazy Cat has been revealed!</H5>
      </Box>

      <Footer />
    </Box>
  );
};
