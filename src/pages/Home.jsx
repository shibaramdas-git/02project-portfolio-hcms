import React from "react";
import styled from "styled-components";
import Projectcard from "../components/Projectcard";
import { Link } from "react-router-dom";
import Servicecard from "../components/Servicecard";

const StyledHome = styled.div`
  padding: 120px 10%;
  @media (max-width: 1440px) {
    padding: 8%;
  }
  @media (max-width: 1024px) {
    padding: 150px 5%;
  }
  @media (max-width: 1025px) {
    padding: 120px 2%;
  }
`;
const Topsection = styled.div`
  margin-bottom: 100px;
  @media screen {
    margin-bottom: 70px;
  }
`;
const Topheading = styled.div`
  div {
    font-size: clamp(7.5rem, 4.7727rem + 5.6818vw, 11.875rem);
    font-weight: bold;
    margin-top: 5%;
    @media (max-width: 1024px) {
      font-size: clamp(3.125rem, 2.0891rem + 5.5249vw, 5.625rem);
    }
  }
  span {
    display: block;
  }
  span:nth-child(2) {
    text-align: center;
  }
  span:nth-child(3) {
    text-align: right;
  }
  @media (max-width: 768px) {
    p {
      font-size: 18px;
    }
    span:nth-child(2) {
      text-align: left;
    }
    span:nth-child(3) {
      text-align: left;
    }
  }
`;
const Toppara = styled.div`
  font-size: 26px;
  font-weight: 300;
  width: 70%;
  text-align: justify;
  margin: 8% 0;
  @media (max-width: 1024px) {
    font-size: 22px;
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Worksection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  h2 {
    font-size: clamp(4rem, 3.4448rem + 1.938vw, 5.625rem);
    margin-bottom: 0.8em;
    font-weight: 600;
    text-align: center;
    width: 50%;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: clamp(2rem, 1.8109rem + 5.3419vw, 4rem);
      width: 80%;
    }
  }
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Selectedwork = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2em;
  margin-bottom: 2em;
`;
const StyledProjectcard = styled(Projectcard)``;

const Aboutsection = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Cardwrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20% 0;
`;
const Textcard = styled.div`
  width: 30%;
  text-align: center;
  margin-bottom: 3em;
  h2 {
    font-size: clamp(8.75rem, 5.179rem + 5.58vw, 11.875rem);
    @media (max-width: 1240px) {
      font-size: 100px;
    }
    @media (max-width: 768px) {
      font-size: 140px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    p {
      font-size: 18px;
    }
  }
`;
const Gallery = styled.div`
  width: 120%;
  position: relative;
  left: -10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25em;
  transform: rotate(-5deg);
  margin: 15% 0;
  @media (max-width: 450px) {
    margin-bottom: 22%;
  }
  @media (max-width: 830px) {
    min-width: 1000px;
  }
  img {
    width: 32%;
    min-height: 200px;
    min-width: 300px;
    height: 20%;
    object-fit: cover;
    display: block;
    @media (max-width: 1210px) {
      width: 30%;
    }
  }
`;
const Blacksection = styled.div`
  background-color: #000;
  color: white;
  margin: 120px 0;
  overflow: hidden;
  text-align: center;
  div:nth-child(1),
  div:nth-child(3) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    font-size: clamp(7.5rem, 4.7727rem + 5.6818vw, 11.875rem);
    font-weight: normal;
    margin-top: 10%;
    margin-bottom: 20px;
    padding: 2%;
    @media (max-width: 1024px) {
      font-size: clamp(3.125rem, 2.0891rem + 5.5249vw, 5.625rem);
    }
  }
  span {
    color: darkgray;
  }
  p {
    margin: 0.75em 0;
    padding: 1.4em;
    width: 60%;
    font-size: 28px;
    font-weight: 300;
    @media (max-width: 1500px) {
      width: 80%;
    }
    @media (max-width: 1024px) {
      font-size: 22px;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (max-width: 500px) {
      font-size: 16px;
      text-align: justify;
      padding: 2%;
    }
  }
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Servicesection = styled.div`
  h2 {
    font-size: clamp(4rem, 3.4448rem + 1.938vw, 5.625rem);
    margin-bottom: 0.8em;
    font-weight: 600;
    text-align: center;
    /* width: 50%; */
  }
  @media (max-width: 768px) {
    h2 {
      font-size: clamp(2rem, 1.8109rem + 5.3419vw, 4rem);
      width: 80%;
    }
  }
`;
const ServiceWrapper = styled.div`
  .service-card {
    background-color: red;
  }
`;

function Home() {
  return (
    <StyledHome>
      <Topsection>
        <Topheading>
          <p>Design - Development - Webflow</p>
          <div>
            <span>Digital </span>
            <span>Creative</span>
            <span>Solutions</span>
          </div>
        </Topheading>
        <Toppara>
          Web design is the heart of our web studio. We pay special attention to
          every detail to create unique websites. Our experienced designers pay
          special attention to landing page design to make your website
          memorable. We use Figma and Webflow to bring your ideas to life.
        </Toppara>
      </Topsection>
      <Worksection>
        <h2>Selected Works</h2>
        <Selectedwork>
          <StyledProjectcard
            id="1"
            imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426eca048f497375a7f7b2a_work8.webp"
            title="Punch Man"
            description="Description here"
          />
          <StyledProjectcard
            id="2"
            imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426eca048f497375a7f7b2a_work8.webp"
            title="Punch Man"
            description="Description here"
          />
          <StyledProjectcard
            id="3"
            imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426eca048f497375a7f7b2a_work8.webp"
            title="Punch Man"
            description="Description here"
          />
          <StyledProjectcard
            id="4"
            imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426eca048f497375a7f7b2a_work8.webp"
            title="Punch Man"
            description="Description here"
          />
        </Selectedwork>
        <p>
          <Link to="/works">~ See all works ~</Link>
        </p>
      </Worksection>
      <Aboutsection>
        <Cardwrapper>
          <Textcard>
            <h2>
              <span>45</span>
              <span>+</span>
            </h2>
            <p>Successfully developed projects</p>
          </Textcard>
          <Textcard>
            <h2>
              <span>30</span>
              <span>+</span>
            </h2>
            <p>Clients were satisfied with the result</p>
          </Textcard>
          <Textcard>
            <h2>
              <span>20</span>
              <span>+</span>
            </h2>
            <p>Сountries cooperated with us</p>
          </Textcard>
        </Cardwrapper>
        <div>
          <img
            src="https://cdn.dribbble.com/users/8813792/screenshots/17802088/media/292ca35f6b4fb9d14929d90a92219e64.png?resize=1000x750&vertical=center"
            alt="Developed app photo"
            id="aboutsection-img"
          />
        </div>
        <Blacksection>
          <div>
            <h2>We Turn Ideas Into Unique Digital Results</h2>
            <p>
              <span> What we do</span>
            </p>
            <p>
              Our web design studio specializes in using Webflow to create
              outstanding web projects. We believe that Webflow gives us
              unlimited opportunities to bring your ideas to life. The web
              design created by us takes your business to a new level. mobile
              app ux ui design mobile app ux ui design
            </p>
          </div>
          <Gallery>
            <img
              src="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6432b989a316081154bbdbb4_shot1.webp"
              alt="image"
            />
            <img
              src="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6432b989a316081154bbdbb4_shot1.webp"
              alt="image"
            />
            <img
              src="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6432b989a316081154bbdbb4_shot1.webp"
              alt="image"
            />
            <img
              src="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6432b989a316081154bbdbb4_shot1.webp"
              alt="image"
            />
            <img
              src="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6432b989a316081154bbdbb4_shot1.webp"
              alt="image"
            />
            <img
              src="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6432b989a316081154bbdbb4_shot1.webp"
              alt="image"
            />
          </Gallery>
          <div>
            <h2>Our Result Your Success</h2>
            <p>
              With us, you get a team of professionals who are passionate about
              web design and development. We take pride in our work in web
              design, landing page development, mobile app design and website
              creation. Trust us to make your web project unique and effective
              using the Webflow tool.
            </p>
            <p>
              <Link to="/contact">* Contact us *</Link>
            </p>
          </div>
        </Blacksection>
      </Aboutsection>
      <Servicesection>
        <h2>Our Services</h2>
        {/* Map here services ..........................................................................*/}
        <ServiceWrapper>
          <Servicecard
            // isEven={isEven} -- if index of map is even (i%2 == 0 ) then isEven is true
            imgurl="https://static.vecteezy.com/system/resources/previews/007/388/098/non_2x/home-landing-page-travel-nature-template-landing-business-page-digital-website-landing-page-design-concept-vector.jpg"
            title="Landing page development"
            description="Our web design studio also specializes in developing landing pages. We understand the importance of effective landing pages for your online presence. The landing page designs we create using Webflow help you increase conversions and attract more customers."
          />
        </ServiceWrapper>
      </Servicesection>
    </StyledHome>
  );
}

export default Home;
