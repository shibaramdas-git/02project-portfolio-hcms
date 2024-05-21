import React, { useState } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSnake } from "react-icons/gi";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
  padding: 0 4.5%;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 70px;
  font-size: 1.45rem;
  font-weight: 500;
  letter-spacing: 0.9px;
  a {
    color: black;
    text-decoration: none;
  }
  div:hover {
    animation: shake 0.8s;
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(10px);
    }
    50% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;
const Menuicon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const NavExtended = styled.div`
  transition: height 0.3s;
  background-color: black;
  color: white;
  font-size: 3.75rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1.5px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  /* Overlay effect solution start ....................Wwwwooooohhhhooooooo.......i have done it.... without anyones help(except google)*/
  height: ${({ showNav }) => (showNav ? "100vh" : "0")};
  overflow: hidden;
  ul,
  div {
    opacity: ${({ showNav }) => (showNav ? "1" : "0")};
    transition: opacity 0.2s;
  }
  /* Overlay effect solution ends here */
  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style-type: none;
  }
  a,
  span {
    display: block;
    text-decoration: none;
    color: white;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    margin: 25px 30px;
    font-size: 0.8em;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
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
        <NavExtended showNav={showNav} onClick={handleClick}>
          <div>
            <span>
              <Link to="/">
                <GiSnake />
              </Link>
            </span>
            <span>
              <Link>X</Link>
            </span>
          </div>
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
