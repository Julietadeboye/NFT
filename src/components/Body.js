import React from "react";
import styled from "@emotion/styled";
import Box from "ui-box";
import Ben from "../assets/images/benParker.svg";
import { useMediaQuery } from "react-responsive";

const H4 = styled.h4`
  font-size: 20px;
  font-weight: bold;
  line-height: 90px;
`;

const H1 = styled.h1`
  font-weight: bold;
  line-height: 90px;
  font-size: 90px;
`;

const P = styled.p`
  font-size: 15px;
  line-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.72);
  margin-top: 30px;
`;

const Button = styled.button`
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 120%;
  padding: 20px 60px;
  font-size: 20px;
  font-weight: Bold;
  color: black;
  background: #ffd600;
  border-radius: 45px;
  margin: 0px 30px;
  &:hover {
    color: white;
  }
`;

const Buttons = styled.button`
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 120%;
  padding: 20px 35px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 40px;
  margin-right: 20px;
  &:hover {
    color: #ffd600;
  }
`;

export const Body = () => {
  return (
    <Box
      width="85%"
      marginX="auto"
      display="flex"
      justifyContent="left"
      marginTop="100px"
    >
      <Box width="50%" display="flex" justifyContent="center">
        <img src={Ben} />
      </Box>

      <Box width="45%">
        <H4>WELCOME TO THE</H4>
        <H1>
          LAZY CAT <br /> SOCIAL CLUB
        </H1>
        <P>
          3,500 Lazy Cats, too lazy to do anything but make it and socialize on
          the solana blockchain. Ermm.. We just want to buy our mothers a house
          while sitting on the couch and minting NFTs. Shh.. Don't tell them
          we're still on the couch!
        </P>

        <P>
          Owning a Lazy Cat makes you a member of the social club and grants you
          access to member-only benefits..
        </P>

        <Box marginY="50px">
          <Button>JOIN THE CLUB</Button>
          <Buttons>TWITTER</Buttons>
          <Buttons>DISCORD</Buttons>
        </Box>
      </Box>
    </Box>
  );
};
