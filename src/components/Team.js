import React from "react";
import Box from "ui-box";
import "../App.css";
import { Footer } from "./Footer";
import styled from "@emotion/styled";
import Team1 from "../assets/images/team1.svg";
import Team2 from "../assets/images/team.svg";

const H1 = styled.h1`
  border: solid;
`;

const P = styled.p`
  border: solid;
`;

const Teams = styled.div`
  border: solid;
`;

export const Team = () => {
  return (
    <Box>
      <Teams>
        <H1 className="head"> TEAM</H1>
        <P className="paragragh">
          LCSC is created by two strangers who met eachother in an NFT
          community, realized how passionate they are about <br />
          NFTs, became buddies and decided to create something nice?
          <br />
          Ermm.. Don't tell our girlfriends!
        </P>

        <Box>
          <img src={Team1}  alt="nft" />
          <Box>
            <p>
              <span>LAZY DEGEN.</span> Apes into any and everything{" "}
            </p>
            <p>
              <span>LAZY H.</span> Boring
            </p>
          </Box>
          <img src={Team2} alt="nft" />
        </Box>
      </Teams>
      <Footer />
    </Box>
  );
};
