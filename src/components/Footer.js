import React from "react";
import styled from "@emotion/styled";
import Box from "ui-box";
import { useMediaQuery } from "react-responsive";

const Foot = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 90%;
  font-size: 10px;
`;

export const Footer = () => {
  return (
    <Foot>
      <p>NOT LAZY TO MAKE IT.....</p>
    </Foot>
  );
};
