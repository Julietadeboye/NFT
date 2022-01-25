import React from "react";
import styled from "@emotion/styled";

const Foot = styled.div`
width: 85%;
margin: 0 auto;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 12px;
  padding-top:5em;
  margin-bottom:3rem;
 
  
 
 

  @media (max-width: 1100px) {
    font-size: 17px;
    width: 95%;
    border-top: 2px solid rgba(255, 255, 255, 0.08);
    
   
  }
`;

export const Footer = () => {
  return (
    <Foot>
      <p>NOT LAZY TO MAKE IT.....</p>
    </Foot>
  );
};
