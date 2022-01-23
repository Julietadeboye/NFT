import React from "react";
import styled from "@emotion/styled";

const Foot = styled.div`
 
  display: flex;
  justify-content: right;
  align-items: flex-end;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 12px;
  width: 85%;
  margin: 0 auto;
 


  @media (max-width: 1600px) {
   
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
