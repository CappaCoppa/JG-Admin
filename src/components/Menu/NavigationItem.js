import React from "react";
import { useNavigate } from "react-router-dom";
import { FifthText } from "../styled.componenets/styled.components";
import styled from "styled-components";

export const NavigationItem = ({
  currentClicked,
  setState,
  title,
  index,
  logo,
}) => {
  const navigate = useNavigate();

  const handleClickedLink = () => {
    setState(index);
    navigate(title);
  };

  return (
    <NavigationContainerItem
      className={currentClicked === index ? "active" : null}
      onClick={handleClickedLink}
    >
      <img alt={title} src={logo} />
      <FifthText>{title}</FifthText>
    </NavigationContainerItem>
  );
};

const NavigationContainerItem = styled.div`
  height: 56px;
  padding-left: 32px;
  display: flex;
  gap: 24px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: rgba(159, 162, 180, 0.08);
    transition: 0.3s;
  }
`;
