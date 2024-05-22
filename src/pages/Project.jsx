import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledProject = styled.div``;
const Topheading = styled.div``;
const Projectdesktopimg = styled.div``;
const Whatwedo = styled.div``;
const Projectmobileimg = styled.div``;
const Banner = styled.div``;
const Finalwords = styled.div``;
const Gallery = styled.div``;
const Nextproject = styled.div``;

function Project() {
  const { projectid } = useParams();
  // const numid = parseInt(projectid);
  // const [numid, setNumid] = useState(parseInt(projectid));
  return (
    <StyledProject>
      <Topheading>
        <div>
          <p>Project type - project.type</p>
          <h3>The Punch man - projectid.title</h3>
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
      <Banner>
        The Punch man - projectid.title The Punch man - projectid.title
      </Banner>
      <Finalwords>
        <Gallery></Gallery>
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
