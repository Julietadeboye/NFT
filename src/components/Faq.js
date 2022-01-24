import React from "react";
import Box from "ui-box";
import "../App.css";
import { Footer } from "./Footer";

export const Faq = () => {
  return (
    <Box width="85%" marginX="auto">
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
    </Box>
  );
};
