import React from "react";
import styled from "styled-components";
import Projectcard from "../components/Projectcard";
import { Link } from "react-router-dom";
import Servicecard from "../components/Servicecard";

const StyledHome = styled.div`
  padding: 8% 12%;
`;
const Topsection = styled.div``;
const Topheading = styled.div`
  h4 {
    font-weight
  }
`;
const Toppara = styled.div``;

const Worksection = styled.div``;
const Selectedwork = styled.div``;
const StyledProjectcard = styled(Projectcard)``;

const Aboutsection = styled.div``;
const Textcard = styled.div``;
const Gallery = styled.div``;
const Blacksection = styled.div``;
const Servicesection = styled.div``;
// const StyledHome = styled.div``

function Home() {
  return (
    <StyledHome>
      <Topsection>
        <Topheading>
          <h4>Design - Development - Webflow</h4>
          <div></div>Digital Creative Solutions
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
            description="lorem sldkj skjdflk dflsdkf;lskj jdlksdjf dkfjl;s ajkjdlkjdflk jsdlf ldflkdf ldjsf;kdsf jkadslfad;sf l;kdf ljld;  ajdflk dsfkj adsl;fj ldskj fj dkslfjd kljdlkj kljlj kjdvjnvhncv  dffdv
            fdsvdfsg ';sdfg fdl;gdfkglkdfsgkd fgl;sk;dflg ';dfsk  l;kg;kj fgjsdlkfgj lksdfj gklsdfgkljl;sdfkglkjsdfl;gk sdfgkljl;ksdfgl;kjfgkljlkmbbklmnil vjm hxlfjk jkm hsdfvldfk vl; dflvkfsdl;f"
          />
          <StyledProjectcard
            id="2"
            imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426eca048f497375a7f7b2a_work8.webp"
            title="Punch Man"
            description="lorem sldkj skjdflk dflsdkf;lskj jdlksdjf dkfjl;s ajkjdlkjdflk jsdlf ldflkdf ldjsf;kdsf jkadslfad;sf l;kdf ljld;  ajdflk dsfkj adsl;fj ldskj fj dkslfjd kljdlkj kljlj kjdvjnvhncv  dffdv
            fdsvdfsg ';sdfg fdl;gdfkglkdfsgkd fgl;sk;dflg ';dfsk  l;kg;kj fgjsdlkfgj lksdfj gklsdfgkljl;sdfkglkjsdfl;gk sdfgkljl;ksdfgl;kjfgkljlkmbbklmnil vjm hxlfjk jkm hsdfvldfk vl; dflvkfsdl;f"
          />
          <StyledProjectcard
            id="3"
            imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426eca048f497375a7f7b2a_work8.webp"
            title="Punch Man"
            description="lorem sldkj skjdflk dflsdkf;lskj jdlksdjf dkfjl;s ajkjdlkjdflk jsdlf ldflkdf ldjsf;kdsf jkadslfad;sf l;kdf ljld;  ajdflk dsfkj adsl;fj ldskj fj dkslfjd kljdlkj kljlj kjdvjnvhncv  dffdv
          fdsvdfsg ';sdfg fdl;gdfkglkdfsgkd fgl;sk;dflg ';dfsk  l;kg;kj fgjsdlkfgj lksdfj gklsdfgkljl;sdfkglkjsdfl;gk sdfgkljl;ksdfgl;kjfgkljlkmbbklmnil vjm hxlfjk jkm hsdfvldfk vl; dflvkfsdl;f"
          />
          <StyledProjectcard
            id="4"
            imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/6426eca048f497375a7f7b2a_work8.webp"
            title="Punch Man"
            description="lorem sldkj skjdflk dflsdkf;lskj jdlksdjf dkfjl;s ajkjdlkjdflk jsdlf ldflkdf ldjsf;kdsf jkadslfad;sf l;kdf ljld;  ajdflk dsfkj adsl;fj ldskj fj dkslfjd kljdlkj kljlj kjdvjnvhncv  dffdv
        fdsvdfsg ';sdfg fdl;gdfkglkdfsgkd fgl;sk;dflg ';dfsk  l;kg;kj fgjsdlkfgj lksdfj gklsdfgkljl;sdfkglkjsdfl;gk sdfgkljl;ksdfgl;kjfgkljlkmbbklmnil vjm hxlfjk jkm hsdfvldfk vl; dflvkfsdl;f"
          />
        </Selectedwork>
        <p>See all works ~~</p>
      </Worksection>
      <Aboutsection>
        <div>
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
        </div>
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
            <p>What we do </p>
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
        {/* Map here services */}
        <Servicecard
          imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/642fee7eb8f88afe3dbb6cfc_service1.webp"
          title="Landing page development"
          description="Our web design studio also specializes in developing landing pages. We understand the importance of effective landing pages for your online presence. The landing page designs we create using Webflow help you increase conversions and attract more customers."
        />
        <Servicecard
          imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/642fee7eb8f88afe3dbb6cfc_service1.webp"
          title="Landing page development"
          description="Our web design studio also specializes in developing landing pages. We understand the importance of effective landing pages for your online presence. The landing page designs we create using Webflow help you increase conversions and attract more customers."
        />
        <Servicecard
          imgurl="https://assets-global.website-files.com/62d7e483a751a962bd1e9d4a/642fee7eb8f88afe3dbb6cfc_service1.webp"
          title="Landing page development"
          description="Our web design studio also specializes in developing landing pages. We understand the importance of effective landing pages for your online presence. The landing page designs we create using Webflow help you increase conversions and attract more customers."
        />
      </Servicesection>
    </StyledHome>
  );
}

export default Home;
