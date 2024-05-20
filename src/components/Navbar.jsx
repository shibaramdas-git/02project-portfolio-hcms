import React, { useState } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav``;
const Container = styled.div`
  display: flex;
  transition: 0.5s ease-in-out;
`;
const Menuicon = styled.div``;

const NavExtended = styled.div`
  transition: height 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  background-color: black;
  color: white;
  font-size: 2.5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  height: ${({ showNav }) => (showNav ? "100vh" : "0")};

  span {
    position: absolute;
    top: 5%;
    right: 4%;
    z-index: 1000;
    display: ${({ showNav }) => (showNav ? "block" : "none")};
  }
  ul {
    display: ${({ showNav }) => (showNav ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    line-height: 1.75;
    height: 100vh;
  }
  ul a {
    text-decoration: none;
    color: #ffffffcf;
    transition: 0.5s ease-in-out;
  }
  ul a:hover {
    opacity: 1;
  }
`;

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => setShowNav(!showNav);
  return (
    <StyledNavbar>
      <Container>
        <div>
          <Link to="/">Alev</Link>
        </div>
        <Menuicon onClick={handleClick}>
          Menu <RxHamburgerMenu />
        </Menuicon>
        <NavExtended showNav={showNav}>
          <span onClick={handleClick}>X</span>
          <ul>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </NavExtended>
      </Container>
    </StyledNavbar>
  );
}

export default Navbar;
