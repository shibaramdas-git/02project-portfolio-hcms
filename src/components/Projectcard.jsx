import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={`/works/${props.id}`}>
        <div>
          <img src={props.imgurl} alt="Project image" />
        </div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </Link>
    </Styledcard>
  );
}

export default Projectcard;
