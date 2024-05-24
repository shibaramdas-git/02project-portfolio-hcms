import React from "react";
import styled from "styled-components";
import Projectcard from "../components/Projectcard";

const StyledWorkpage = styled.div`
  padding: 80px 10%;
  @media (max-width: 1024px) {
    padding: 80px 7%;
  }
  @media (max-width: 768px) {
    padding: 80px 2%;
  }
  h1 {
    width: 100%;
    text-align: right;
    margin: 50px 0;
    @media (max-width: 768px) {
      font-size: 70px;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5em;
`;
function Works() {
  return (
    <StyledWorkpage>
      <h1>Our Works</h1>
      {/* Map here all the projects from  */}
      <Wrapper>
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
      </Wrapper>
    </StyledWorkpage>
  );
}

export default Works;
