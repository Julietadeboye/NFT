import React from "react";
import Box from "ui-box";
import "../App.css";
import { Footer } from "./Footer";
import styled from "@emotion/styled";
import Twelve from "../assets/images/twelve.svg";

const Body = styled.div`
  background-image: (${Twelve});
  height: 100%;
  width:100%;
 

//   width: 85%;
//   margin: 0 auto;
`;

export const Faq = () => {
  return (
    <Body >
      <Box marginTop="100px">
        <h1 className="head">FAQ</h1>
        <p className="paragraph">Questions will be updated </p>
        <ul className="list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Box>
      <Footer />
    </Body>
  );
};
