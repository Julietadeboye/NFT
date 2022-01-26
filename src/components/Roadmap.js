import React from "react";
import styled from "@emotion/styled";
import Box from "ui-box";
import Mug from "../assets/images/nltmiMug.svg";
import Mugg from "../assets/images/mug.png";
import { useMediaQuery } from "react-responsive";
import "../App.css";
import { Footer } from "./Footer";

const Body = styled.div`
  background-image: url(${Mug}) ;
  background-repeat: no-repeat;
  height: 100%;
  width:100%;
  drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (max-width: 1100px){
    background-image: none ;
    margin-bottom: 70px;
  }
`;

const Ul = styled.ul`
  @media (max-width: 1873px) {
    width: 65%;
  }

  @media (max-width: 1753px) {
    padding: 30px 60px;
  }

  @media (max-width: 1558px) {
    width: 70%;
  }

  @media (max-width: 1438px) {
    width: 75%;
  }

  @media (max-width: 1332px) {
    width: 80%;
  }

  @media (max-width: 1253px) {
    width: 85%;
  }
  @media (max-width: 1184px) {
    width: 90%;
  }

  @media (max-width: 1100px) {
    margin-bottom: 10px;
  }
`;

export const Roadmap = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  return (
    <Box
      id="roadmap"
      width={isMobile ? "95%" : "85%"}
      marginX="auto"
      display="flex"s
      justifyContent="center"
      alignItems="center"
      paddingTop={isMobile ? "1rem" : "7rem"}
    >
      <Body>
        <Box
          width="60%"
          marginX="auto"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <h1 className="head">ROADMAP</h1>
          <p className="paragragh">
            We are in this for the long haul and we've set some realistic goals
            for this journey. <br />
            More updates and changes will be made as we move.
          </p>
        </Box>

        <Ul className="list">
          <Box textDecoration="line-through">
            <li>Brainstorming the idea.</li>
          </Box>
          <li>Designing the art.</li>
          <li>Building the community.</li>
          <li>Official launch. Release Lazy cat incubator.</li>
          <li>
            Establish marketing, and development team to help create and build
            more amazing stuff.
          </li>
          <li>Lazy cat reveal 7 days after incubator mint.</li>
          <li>Member-Exclusive LCSC Merch Store is unlocked.</li>
          <li>
            Establish DAO, members vote on decisions, and changes (if any) to be
            made.
          </li>
          <li>
            Become one of the coolest and kindest communities on the solana
            blockchain
          </li>
        </Ul>
        <Box
          display={isMobile ? "show" : "none"}
          height="250px"
          overflow="hidden"
        >
          <img src={Mugg} alt="nft" />
        </Box>

        <Footer />
      </Body>
    </Box>
  );
};
