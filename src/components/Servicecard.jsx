import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div:nth-child(1) {
    width: 40%;
  }
  div:nth-child(2) {
    width: 50%;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    div:nth-child(1) {
      width: 100%;
      height: 400px;
    }
    div:nth-child(2) {
      width: 100%;
    }
  }
`;
function Servicecard(props) {
  return (
    <Container>
      <div>
        <img src={props.imgurl} alt="Services image" />
      </div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </Container>
  );
}

export default Servicecard;
