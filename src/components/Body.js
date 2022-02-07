import React from "react";
import styled from "@emotion/styled";
import Box from "ui-box";
import Img from "../assets/images/cat.gif"
import { useMediaQuery } from "react-responsive";
import { Footer } from "./Footer";
import "../App.css";

const H4 = styled.h4`
  font-size: 20px;
  font-weight: bold;
  line-height: 90px;

  @media (max-width: 1100px) {
    padding-top: 30px;
    line-height: 40px;
  }

  @media (max-width: 376px) {
    font-size: 13px;
  }

  @media (max-width: 700px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const H1 = styled.h1`
  font-weight: bold;
  line-height: 90px;
  font-size: 90px;

  @media (max-width: 1100px) {
    font-size: 50px;
    line-height: 60px;

    @media (max-width: 710px) {
        font-size: 40px;
        line-height: 50px;
       }

       @media (max-width: 509px) {
        font-size: 35px;
        line-height: 40px;
       }

       @media (max-width: 447px) {
        font-size: 30px;
        line-height: 35px;
       }

       @media (max-width: 385px) {
        font-size: 28px;
        line-height: 30px;
       }

       @media (max-width: 357px) {
        font-size: 23px;
        line-height: 25px;
       }
`;

const Title = styled.div`
@media (max-width: 1100px) {
   width: 70%;
   margin:0 auto;
    
   @media (max-width: 800px) {
    width: 80%;
   }

   @media (max-width: 579px) {
    width: 90%;
   }
`;

const P = styled.p`
  font-size: 15px;
  line-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.72);
  margin-top: 30px;
  width: 70%;

  @media (max-width: 2239px) {
    width: 80%;
  }

  @media (max-width: 1949px) {
    width: 90%;
  }

  @media (max-width: 1617px) {
    width: 100%;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  border: none;
  text-decoration: none;
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

  @media (max-width: 1772px) {
    margin-left: 0;
    padding: 20px 40px;
    margin-right:10px;

    @media (max-width: 1400px) {
        font-size: 15px;
    }

    @media (max-width:1100px){
        padding: 20px 60px;
        font-size: 20px;
    }

    @media (max-width: 800px) {
        font-size: 15px;
    }

    @media (max-width: 520px) {
        padding: 15px 25px;
        font-size: 13px;
       }

       @media (max-width: 391px) {
        
        font-size: 11px;
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

  @media (max-width: 1540px) {
    margin-left: 0;
    padding: 20px 25px;
    margin-right:10px;

    @media (max-width: 1400px) {
        font-size: 13px;
    }

   @media (max-width: 520px) {
    padding: 10px 15px;
    font-size: 10px;
    margin-right: 5px;
   }
`;

export const Body = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  return (
    <Box display="flex" flexDirection="column" marginBottom="200px">
      <Box
          width={isMobile ? "95%" : "85%"}
        marginX="auto"
        display="flex"
        justifyContent={isMobile ? "center" : "left"}
        alignItems="center"
        flexDirection={isMobile ? "column" : "row"}
        marginTop="100px"
        
      >
        <Box
          width={isMobile ? "70%" : "50%"}
          display="flex"
          justifyContent="center"
         
         
        >
          {/* <img src={Img} alt="cat"
          className="image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 2 }} /> */}
        </Box>

        <Box width={isMobile ? "70%" : "50%"}>
          <Title>
            <H4>WELCOME TO THE</H4>
            <H1>
              LAZY CAT <br /> SOCIAL CLUB
            </H1>
          </Title>

          <P>
            3,500 Lazy Cats, too lazy to do anything but make it and socialize
            on the solana blockchain. Ermm.. We just want to buy our mothers a
            house while sitting on the couch and minting NFTs. Shh.. Don't tell
            them we're still on the couch!
          </P>

          <P>
            Owning a Lazy Cat makes you a member of the social club and grants
            you access to member-only benefits..
          </P>

          <Div>
            <Button>JOIN THE CLUB</Button>
            <Box
              marginY="15px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Buttons>TWITTER</Buttons>
              <Buttons>DISCORD</Buttons>
            </Box>
          </Div>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
