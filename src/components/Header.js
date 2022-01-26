import React from "react";
import styled from "@emotion/styled";
import Box from "ui-box";
import Logo from "../assets/images/logo.svg";
import { Frame1 } from "./atoms/icons";
import { useMediaQuery } from "react-responsive";



const Head = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  color: white;
  margin-top: 10px;
  position: sticky;
  top: 10px;

  @media (max-width: 1300px) {
    width: 95%;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  list-style: none;
  padding-left: 0;
  font-size: 14px;
`;

const Item = styled.li`
  margin-right: 20px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 12px;
  justify-content: center;
  &:hover {
    color: rgba(255, 255, 255, 0.62);
  }
`;
const A = styled.a`
  margin-right: 20px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 12px;
  margin-bottom: 20px;
  text-decoration: none;
  justify-content: center;
  &:hover {
    color: rgba(255, 255, 255, 0.62);
  }
`;

const Button = styled.button`
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 19px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #ffd600;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  margin-right: 80px;
  &:hover {
    
    background: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 1800px) {
    margin-right: 60px;
  
  @media (max-width: 1620px) {
    margin-right: 40px;

    @media (max-width: 1500px) {
        margin-right: 20px;
    }

    @media (max-width: 1371px) {
        margin-right: 9px;
  }

  @media (max-width: 1300px) {
    margin-right: 0;
`;

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 1400px)" });

  
  
  return (
    <Head>
      <Box paddingTop="60px" width={isMedium ? "35%" : "50%"}>
        <img src={Logo} alt="logo"/>
      </Box>

      <Box
        width={isMedium ? "65%" : "50%"}
        display={isMobile ? "none" : "flex"}
        justifyContent="space-between"
      >
        <List>
          <Item><A href="#roadmap">ROADMAP</A> </Item>
          <Item><A href="#traits">TRAITS & RARITY</A></Item>
          <Item> <A href="#faq">FAQ</A> </Item>
          <Item><A href="#team">TEAM</A></Item>
        </List>

        <Button>CONNECT WALLET </Button>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginX="20px"
      >
        {isMobile && <Frame1 size="33px" />}
      </Box>
    </Head>
  );
};
