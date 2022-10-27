import React from "react";
import { SectionTextLevelTwo } from "../../components/styled.componenets/styled.components";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const IndividualField = ({ item }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/${item.date_created}`, { state: { item } });
  };

  return (
    <Container onClick={handleNavigation}>
      <Text>{item.date_created}</Text>
      <Text>{item.shift}</Text>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 32px;
  border-bottom: 1px rgba(159, 162, 180, 0.5) solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

const Text = styled(SectionTextLevelTwo)`
  font-size: 12px;
`;
