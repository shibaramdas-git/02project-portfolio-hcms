import React from "react";
import styled from "styled-components";

const Styledcard = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
function Projectcard(props) {
  return (
    <Styledcard>
      <div>
        <img src={props.imgurl} alt="Project image" />
      </div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </Styledcard>
  );
}

export default Projectcard;
