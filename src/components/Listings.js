import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import styled from "styled-components";
import ImgFive from "../images/House-5.jpg";
import ImgSix from "../images/House-6.jpg";
import { Button } from "./Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: #e6e6fa;
  padding: 3rem 0rem;
  //   padding: clamp(3rem, 5.5vw, 6rem) 0;
`;

const Container = styled.div`
  margin-bottom: 2rem;
  padding: 3rem calc((100vw - 1300) / 2);
  display: grid;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.div`
  position: relative;
  margin-left: 40px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  font-size: clamp(1rem, 8vw, 2rem);
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  text-align: left;
  margin-bottom: 0.8rem;
`;
const Homes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  h3 {
    margin-left: 40px;
  }
  //   font-size: clamp(2rem, 2.5vw, 2.8rem);
  //   font-weight: 400;
`;

const Home = styled.div`
  margin-top: 12rem;
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const ListingImage = styled.div`
  object-fit: cover;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media and screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const ListingsSection = () => {
  return (
    <Section>
      <Container>
        <Title
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300"
          data-aos-anchor-placement="top-center"
          data-aos-once="true"
        >
          View our newest homes
        </Title>
        <Homes>
          <Home
            data-aos="zoom-out-up"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
            data-aos-once="true"
          >
            <ListingImage>
              {" "}
              <img src={ImgFive} alt="Home" />
            </ListingImage>
            <h3>8 bed 10 bath house in Venice, California</h3>
            <Button
              to="/homes"
              css={`
                max-width: 160px;
              `}
            >
              <span>View Details</span>
              <Arrow />
            </Button>
          </Home>
          <Home
            className="home"
            data-aos="zoom-out-down"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
            data-aos-once="true"
          >
            <ListingImage>
              {" "}
              <img src={ImgSix} alt="Home" />{" "}
            </ListingImage>
            <h3>4 bed 2 bath house in Miami, Florida</h3>
            <Button
              to="/homes"
              css={`
                max-width: 160px;
              `}
            >
              <span>View Details</span>
              <Arrow />
            </Button>
          </Home>
        </Homes>
      </Container>
    </Section>
  );
};

export default ListingsSection;
