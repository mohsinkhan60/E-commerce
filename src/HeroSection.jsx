/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

export const HeroSection = ({ mydata }) => {
  const { name } = mydata;
  return (
    <Wrapper>
      <div className="container">
        <div className="rows"></div>
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcom to</p>
            <h1>{ name }</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              perferendis odio explicabo porro officiis facere quam repellat,
              incidunt pariatur quos, praesentium beatae ullam corporis sed, qui
              autem non at. Esse.S
            </p>
            <NavLink>
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src="./img/hero.jpg" alt="img" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
      display: flex;
      color: black;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
      font-size: 3rem;
      font-weight: 700;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default HeroSection;
