import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Nav from "./Nav"

export const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
         <span className="name">Mohsin Dev</span>
      </NavLink>
      <Nav />
    </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
.logo{
height: 5rem;
}
`
export default Header