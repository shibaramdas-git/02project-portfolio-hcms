import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledProject = styled.div`
  padding: 0 10%;
  @media (max-width: 1024px) {
    padding: 0 7%;
  }
  @media (max-width: 768px) {
    padding: 0 5%;
  }
  @media (max-width: 425px) {
    padding: 0 2%;
  }
`;

const Topheading = styled.div`
  div:nth-child(1) {
    margin-top: 20%;
    margin-bottom: 10%;
    h2 {
      font-size: clamp(2rem, 1.8235rem + 0.9412vw, 3rem);
      margin: 1em 0;
    }
    p:nth-child(3) {
      text-align: right;
    }
  }
  div:nth-child(2) {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* display: block; */
    }
  }
  div:nth-child(3) {
    margin: 15% 0;
    h1 {
      font-size: clamp(5rem, 4.2941rem + 3.7647vw, 9rem);
      text-align: center;
    }
    p {
      color: gray;
      text-align: right;
    }
    @media (max-width: 630px) {
      h1 {
        font-size: clamp(2rem, -0.4rem + 12.8vw, 3rem);
      }
    }
  }
`;
const Projectdesktopimg = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
const Whatwedo = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  p {
    padding: 1em 0;
  }
  p:nth-child(1) {
    color: #717171;
  }
  p:nth-child(2) {
    width: 80%;
    text-align: right;
    margin-left: auto;
    @media (max-width: 1024px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      text-align: justify;
      font-size: 1rem;
    }
  }
`;
const Projectmobileimg = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* display: block; */
  }
`;
const Banner = styled.div`
  margin: 1em auto;
  text-align: center;
  font-size: clamp(2.5rem, 2.0588rem + 2.3529vw, 5rem);
  font-weight: bold;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  color: transparent;
  transition: 0.2s;
  &:hover {
    color: black;
  }
`;
const Finalwords = styled.div`
  width: 68%;
  margin: 10% auto;
  text-align: center;
  h1 {
    font-size: clamp(5rem, 4.2941rem + 3.7647vw, 9rem);
  }
  p {
    width: 70%;
    margin: 5% auto;
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 1.3em;
  }
  @media (max-width: 1300px) {
    width: 100%;
    p {
      width: 100%;
      text-align: justify;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: clamp(2rem, -0.4rem + 12.8vw, 3rem);
    }
    p {
      font-size: 16px;
    }
  }
`;

const Nextproject = styled.div``;

function Project() {
  const { projectid } = useParams();
  // const numid = parseInt(projectid);
  // const [numid, setNumid] = useState(parseInt(projectid));
  return (
    <StyledProject>
      <Topheading>
        <div>
          <p>Project.type</p>
          <h2>Projectid.title</h2>
          <p>Project subtitle - project.subtitile</p>
        </div>
        <div>
          <img
            src="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426ece99094c326a0ec8f80_main.webp"
            alt="Project image"
          />
        </div>
        <div>
          <h1>All World Tennis In One News Website </h1>
          <p>~Manifesto</p>
        </div>
      </Topheading>
      <Projectdesktopimg>
        <img
          src="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426ece990a9beed41294aef_image1.webp"
          alt="Sit image"
        />
      </Projectdesktopimg>
      <Whatwedo>
        <p>What we do</p>
        <p>
          Redesigning a website with a huge user base is always a big
          responsibility. Users sometimes react negatively to changes in
          interactions that have become familiar, which can bring down ratings.
          Our Webflow experts found the perfect solution to improve the entire
          site while maintaining user experience and brand awareness. Our
          version of the site represents the pinnacle that TNNS has reached in
          its long journey.
        </p>
      </Whatwedo>
      <Projectmobileimg>
        <img
          src="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426ece70df2632494e471cc_image2.webp"
          alt="Sit image"
        />
      </Projectmobileimg>
      <Banner>Projectid.title</Banner>
      <Finalwords>
        <div>
          <h1>Final words comes here</h1>
          <p>
            One of the main tasks was to ensure that the project noticeably
            outperformed its competitors with its appearance. Based on current
            trends and the talent of our web designers, we have created a unique
            user experience, a design that works just as effectively as the rest
            of the components of a successful website.
          </p>
          <Link to="/contacts">~ Contact us ~</Link>
        </div>
      </Finalwords>
      <Nextproject>
        {/* <Link to={`/works/${}`}>Next Project</Link> */}
      </Nextproject>
    </StyledProject>
  );
}

export default Project;
