import React from "react";
import Box from "ui-box";
import "../App.css";
import { Footer } from "./Footer";
import styled from "@emotion/styled";
import Team1 from "../assets/images/team1.svg";
import Team2 from "../assets/images/team.svg";
import { useMediaQuery } from "react-responsive";

const H1 = styled.h1`
  margin-bottom: 30px;
`;

const P = styled.p`
  padding: 10px;
  margin-bottom: 30px;
`;

const Teams = styled.div`
  width: 60%;
  margin: 0 auto;
  border: solid;
  background-color: #0000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px 160px 0px;
  margin-top: 70px;

  @media (max-width: 1323px) {
    width: 70%;
  }

  @media (max-width: 1100px) {
    width: 100%;
    
  }

  @media (max-width: 400px) {
    border: none;
  }

`;

const Img = styled.img`

  @media (max-width: 1100px) {
   margin: 0 30px;
  }

  @media (max-width: 500px) {
    margin: 0 5px;
  }
`;

export const Team = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 1400px)" });

  return (
    <Box marginY ="10rem" marginX=".5em" id="team">
      <H1 className="head"> TEAM</H1>
      <Teams>
        <P className="paragraph">
          LCSC is created by two strangers who met eachother in an NFT
          community, realized how passionate they are about <br />
          NFTs, became buddies and decided to create something nice?
          <br />
          Ermm.. Don't tell our girlfriends!
        </P>

        <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
          <Box
            display={isMobile ? "flex" : "none"}
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
          marginBottom= "30px"
          >
            <p className="paragraph">
              <span>LAZY DEGEN.</span> Apes into any and everything{" "}
            </p>
            <p className="paragraph">
              <span>LAZY H.</span> Boring
            </p>
          </Box>
          <Box display="flex" >
            <Img src={Team1} alt="nft" />
            <Box
              display={isMobile ? "none" : "flex"}
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
              marginX={isMedium ? "20px" : "40px"}
            >
              <p className="paragraph">
                <span>LAZY DEGEN.</span> Apes into any and everything{" "}
              </p>
              <p className="paragraph">
                <span>LAZY H.</span> Boring
              </p>
            </Box>
            <Img src={Team2} alt="nft" />
          </Box>
        </Box>
      </Teams>
      <Footer />
    </Box>
  );
};
