import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* width: 100%; */
  display: flex;
  /* flex-direction: ${(isEven) => (isEven ? "row" : "row-reverse")}; */
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  div:nth-child(1) {
    width: 40%;
  }
  div:nth-child(2) {
    width: 55%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h4,
  p {
    font-size: 22px;
    padding: 0.4em 0 0.4em 0.4em;
  }
  h4 {
    font-size: 26px;
    font-weight: 450;
  }
  p {
    text-align: justify;
    font-weight: 300;
  }
  @media (max-width: 1024px) {
    p {
      font-size: 18px;
    }
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
  @media (max-width: 425px) {
    h4 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
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
