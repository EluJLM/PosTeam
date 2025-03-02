import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { navegacion } from "../../utils/data";

const Nav = ({ toggleTheme }) => {
  const [activo, setActivo] = useState(false);

  // Cierra el menú cuando se hace clic en un enlace en modo móvil
  const cerrarMenu = () => {
    if (window.innerWidth <= 700) {
      setActivo(false);
    }
  };

  return (
    <Navbar>

      <Title>
        <Link to="/">PosTeam</Link>
      </Title>
      <MenuCheckbox
        type="checkbox"
        id="menu-toggle"
        checked={activo}
        onChange={() => setActivo(!activo)}
      />
      <MenuButton onClick={() => setActivo(!activo)}>
        {activo ? <FaTimes size={24} /> : <FaBars size={24} />}
      </MenuButton>

      <NavList $isOpen={activo}>
        {navegacion.map((dt, index) => (
          <NavItem key={"li-nav-" + index}>
            <Link to={dt.link} onClick={cerrarMenu}>
              {dt.icon}
              {dt.name}
            </Link>
          </NavItem>
        ))}
        <NavItem>
          <Button onClick={toggleTheme}>
            <FiSun size={20} />
          </Button>
        </NavItem>
      </NavList>
    </Navbar>
  );
};

export default Nav;

// 🎨 Estilos con styled-components
const Navbar = styled.nav`
  padding: 16px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 0 6px #000;
  z-index: 1000;
  @media (max-width: 700px) {
    padding: 0px 16px;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  background: none;
  border: none;
  padding: 10px;

  @media (max-width: 700px) {
    display: block;
  }
`;

const MenuCheckbox = styled.input`
  display: none;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  align-items: center;
  background: ${({ theme }) => theme.background};
  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    width: 250px;
    display: block;
    height: 100vh;
    background: ${({ theme }) => theme.background};
    flex-direction: column;
    padding-top: 60px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
    transition: left 0.6s ease-in-out;
  }
`;

const NavItem = styled.li`
  margin: 0 10px;

  a {
    color: ${({ theme }) => theme.text};
    font-weight: bold;
    padding: 1px 10px;
    border-radius: 5px;
    transition: 0.3s ease;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      background: ${({ theme }) => theme.button};
      color: ${({ theme }) => theme.text};
    }
  }

  @media (max-width: 700px) {
    margin: 15px;

    a {
      font-size: 18px;
      display: block;
      padding: 15px;
      text-align: left;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    a svg{
      margin-right: 15px;
    }
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 5px;
`;

