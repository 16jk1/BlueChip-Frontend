import React from "react";
import styled, { keyframes } from "styled-components";
import { Logo } from "./Icons";
import mainLogo from "../assets/image/BlueChip_Logo.png";

const Animation = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    }
`;

const Loader = styled.div`
  animation: ${Animation} 1s linear infinite;
  width: 100%;
  text-align: center;
`;

const MainLogo = styled.img`

  width: 36px;
  height: 36px;

`;


export default () => (
  <Loader>
    <MainLogo src={mainLogo}></MainLogo>
  </Loader>
);