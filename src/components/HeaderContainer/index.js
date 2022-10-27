import React, { useContext } from "react";
import { FirstText } from "../styled.componenets/styled.components";
import { AppContext } from "../../context/AppContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderContainerComponent = ({ name }) => {
  const { cookie, removeCookie } = useContext(AppContext);
  const navigate = useNavigate();

  const fullName = `${cookie.user.customData.first_name} ${cookie.user.customData.last_name}`;

  const handleLogOut = () => {
    removeCookie("user");
    navigate("/");
  };

  return (
    <HeaderContainer>
      <FirstText>{name}</FirstText>
      <UserDetailsText onClick={handleLogOut}>{fullName}</UserDetailsText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  padding: 22px 18px;
  display: flex;
  flex-direction: center;
  justify-content: space-between;
  align-items: center;
`;

const UserDetailsText = styled.p`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.2px;
  transition: 0.3s;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text1};
  &:hover {
    color: red;
  }
`;

export default HeaderContainerComponent;
