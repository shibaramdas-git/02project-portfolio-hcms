import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 0 4.5%;
  margin-top: auto;
  padding-bottom: 2em;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
`;
const Copyright = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
  div span {
    margin-right: 1em;
  }
`;
const Largetext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.5rem;
  font-weight: 500;
  height: 80vh;
  a {
    background-image: linear-gradient(to right, blue, green, yellow, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.7;
    transition: 0.5s;
    position: relative;
    line-height: 1;
    &:hover {
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      /* background-color: #0087ca; */
      background-image: linear-gradient(to right, red, yellow, green, blue);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <Largetext>
        <Link to="/contact">Let's talk</Link>
      </Largetext>
      <Copyright>
        <span>Dribble</span>
        <div>
          <span>Privacy Policy</span>
          <span>&copy; 2024 Alev</span>
        </div>
      </Copyright>
    </StyledFooter>
  );
}

export default Footer;
