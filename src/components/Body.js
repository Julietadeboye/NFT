import React from "react";
import styled from "@emotion/styled";
import Box from "ui-box";
import Ben from "../assets/images/benParker.svg";
import { useMediaQuery } from "react-responsive";

export const Body = () => {
  return (
    <Box>
      <img src={Ben} />

      <Box>
        <h4>WELCOME TO THE</h4>
        <h1>LAZY CAT SOCIAL CLUB</h1>
        <p>
          3,500 Lazy Cats, too lazy to do anything but make it and socialize on
          the solana blockchain. Ermm.. We just want to buy our mothers a house
          while sitting on the couch and minting NFTs. Shh.. Don’t tell them
          we’re still on the couch! Owning a Lazy Cat makes you a member of the
          social club and grants you access to member-only benefits..
        </p>

        <button>JOIN THE CLUB</button>
        <button>TWITTER</button>
        <button>DISCORD</button>
      </Box>

      
    </Box>
  );
};
