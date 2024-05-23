import React from "react";
import styled from "styled-components";
import Projectcard from "../components/Projectcard";

const StyledWorkpage = styled.div`
  padding: 80px 10%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 3em;
  h1 {
    width: 100%;
    text-align: right;
    @media (max-width: 768px) {
      font-size: 70px;
    }
  }
`;

function Works() {
  return (
    <StyledWorkpage>
      <h1>Our Works</h1>
      {/* Map here all the projects from  */}
      <Projectcard
        id="1"
        imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426eca048f497375a7f7b2a_work8.webp"
        title="Punch Man"
        description="Title of the website name and nothing"
      />
      <Projectcard
        id="1"
        imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426eca048f497375a7f7b2a_work8.webp"
        title="Punch Man"
        description="Title of the website name and nothing"
      />
      <Projectcard
        id="1"
        imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426eca048f497375a7f7b2a_work8.webp"
        title="Punch Man"
        description="Title of the website name and nothing"
      />
      <Projectcard
        id="1"
        imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426eca048f497375a7f7b2a_work8.webp"
        title="Punch Man"
        description="Title of the website name and nothing"
      />
      <Projectcard
        id="1"
        imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426eca048f497375a7f7b2a_work8.webp"
        title="Punch Man"
        description="Title of the website name and nothing"
      />
    </StyledWorkpage>
  );
}

export default Works;
