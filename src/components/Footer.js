import React from "react";
import styled from "@emotion/styled";

const Foot = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  margin-top: 1rem;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  font-size: 12px;
  


  @media (max-width: 1600px) {
    width: 100%;
    margin-top: 30px;
  }

  @media (max-width: 1100px) {
    font-size: 15px;
    border-top: 2px solid rgba(255, 255, 255, 0.08);
    margin-top: 30px;
  }
`;

export const Footer = () => {
  return (
    <Foot>
      <p>NOT LAZY TO MAKE IT.....</p>
    </Foot>
  );
};
