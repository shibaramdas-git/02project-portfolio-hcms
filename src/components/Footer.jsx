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
`;
const Largetext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 4.5rem;
  font-weight: 500;
  height: 80vh;
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
