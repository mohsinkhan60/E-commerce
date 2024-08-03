import { NavLink } from "react-router-dom";
import styled from "styled-components";

import PropTypes from 'prop-types';

const PageNavigation = ({ title }) => {
PageNavigation.propTypes = {
  title: PropTypes.string.isRequired
};
  return (
    <Wrapper>
      <NavLink to="/">Back To Home</NavLink><span className="slash">/</span>{title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 3.2rem;
    font-weight: bold;
    color: red;
  }

`;

export default PageNavigation;