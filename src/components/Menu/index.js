import React, { useState } from "react";
import { SecondText } from "../../components/styled.componenets/styled.components";
import { NavigationItem } from "./NavigationItem";
import logo from "../../photos/logo.svg";
import chart from "../../photos/Vector.png";
import book from "../../photos/history.png";
import styled from "styled-components";

const logoArray = [chart, book];
const titleArray = ["Current", "History"];

const Menu = () => {
  const [currentClicked, setCurrentClicked] = useState(0);

  const handleContent = () => {
    return titleArray.map((item, index) => {
      return (
        <NavigationItem
          key={index}
          currentClicked={currentClicked}
          setState={setCurrentClicked}
          title={item}
          index={index}
          logo={logoArray[index]}
        />
      );
    });
  };

  return (
    <MenuContainer>
      <LogoContainer>
        <img alt="logo" style={{ width: "44px", height: "44px" }} src={logo} />
        <SecondText>Admin Dashboard</SecondText>
      </LogoContainer>
      <NavigationContainer>{handleContent()}</NavigationContainer>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div``;

const LogoContainer = styled.div`
  padding: 31px 18px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const NavigationContainer = styled.div``;
