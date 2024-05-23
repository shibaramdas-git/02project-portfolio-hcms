import React, { useState } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSnake } from "react-icons/gi";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
  padding: 0 2%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  border: 1px solid black;
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
`;
const Navtext = styled.div`
  &:hover {
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
const Menuicon = styled(Navtext)`
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
  height: ${({ shownav }) => (shownav ? "100vh" : "0")};
  overflow: hidden;
  ul,
  div {
    opacity: ${({ shownav }) => (shownav ? "1" : "0")};
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
  const [shownav, setShownav] = useState(false);
  const handleClick = () => setShownav(!shownav);
  return (
    <StyledNavbar>
      <Container>
        <Navtext>
          <Link to="/">Alev</Link>
        </Navtext>
        <Menuicon onClick={handleClick}>
          <RxHamburgerMenu />
        </Menuicon>
        <NavExtended shownav={shownav} onClick={handleClick}>
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
