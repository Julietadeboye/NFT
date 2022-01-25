import React from "react";
import Box from "ui-box";
import "../App.css";
import { Footer } from "./Footer";
import styled from "@emotion/styled";
import Twelve from "../assets/images/twelve.svg";

const Body = styled.div`
  background-image: url(${Twelve});
  width: '100vw';
     height: '100vh';
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;


`;

export const Faq = () => {
  return (
    <Body>
      <Box marginTop="100px" id="faq" paddingTop="5rem">
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
