import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { client } from "../client";
import { urlFor } from "../client";

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

function Project() {
  const { projectid } = useParams();
  const [project, setProject] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await client.fetch(
        `*[_type=='project' && id==$projectid]{
            id,type,title, subtitle, desktopimg, mobileimg, landingimg, whatwedo,finalwords, manifesto
          }`,
        { projectid }
      );
      console.log(response[0]);
      setProject(response[0]);
    } catch (error) {
      console.error(error);
    }
  }, [projectid]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <StyledProject>
      <Topheading>
        <div>
          <p>{project.type}</p>
          <h2>{project.title}</h2>
          <p>{project.subtitle}</p>
        </div>
        <div>
          {/* <img src={urlFor(project.landingimg)} alt="Project Landing page image"/> */}
        </div>
        <div>
          <h1>{project.manifesto}</h1>
          <p>~Manifesto</p>
        </div>
      </Topheading>
      <Projectdesktopimg>
        {/* <img src={urlFor(project.desktopimg)} alt="Site image" /> */}
      </Projectdesktopimg>
      <Whatwedo>
        <p>What we do</p>
        <p>{project.whatwedo}</p>
      </Whatwedo>
      <Projectmobileimg>
        {/* <img src={urlFor(project.mobileimg)} alt="Site image" /> */}
      </Projectmobileimg>
      <Banner>{project.title}</Banner>
      <Finalwords>
        <div>
          <h1>{project.finalwords.title}</h1>
          <p>{project.finalwords.description}</p>
          <Link to="/contacts">~ Contact us ~</Link>
        </div>
      </Finalwords>
    </StyledProject>
  );
}

export default Project;
