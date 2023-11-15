import React, { useState } from "react";
import styled from "styled-components";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerMenuWrapper isOpen={isOpen}>
      <HamburgerIcon onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
      <MenuItems>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </MenuItems>
    </HamburgerMenuWrapper>
  );
};

const HamburgerMenuWrapper = styled.div`
  position: relative;
  .menu-items {
    background-color: #f1f1f1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: ${(props) =>
      props.isOpen ? "translateX(0%)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    z-index: 0;
  }
`;

const HamburgerIcon = styled.div`
  width: 30px;
  height: 25px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top:50%;
  left: 20%;
  transform: translate(-50%, -50%);
  right: 20px;
  z-index: 1;
  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  span:nth-child(1) {
    transform: ${(props) =>
      props.isOpen ? "translateY(9px) rotate(45deg)" : "none"};
  }
  span:nth-child(2) {
    opacity: ${(props) => (props.isOpen ? "0" : "1")};
  }
  span:nth-child(3) {
    transform: ${(props) =>
      props.isOpen ? "translateY(-9px) rotate(-45deg)" : "none"};
  }
`;

const MenuItems = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  ul li {
    padding: 20px;
    font-size: 18px;
  }
`;

export default HamburgerMenu;
