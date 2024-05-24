import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styledcard = styled.div`
  width: 48%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* display: block; */
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  }
  a {
    color: black;
    text-decoration: none;
    display: block;
  }
  h4:hover,
  p:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  h4 {
    margin: 20px 0;
    font-size: 24px;
  }
  p {
    font-size: 20px;
    color: gray;
    font-weight: 300;
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
