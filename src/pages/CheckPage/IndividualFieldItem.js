import React from "react";
import {
  SectionTextLevelThree,
  SectionTextLevelFour,
} from "../../components/styled.componenets/styled.components";
import styled from "styled-components";

export const IndividualFieldItem = ({ item }) => {
  const handleContentLogic = () => {
    if (item.is_completed === true) {
      return (
        <>
          <SectionTextLevelFour>
            Completed by: {item.completed_by}
          </SectionTextLevelFour>
          <SectionTextLevelFour>
            clock number: {item.clock_number}
          </SectionTextLevelFour>
          <SectionTextLevelFour>
            Time completed: {item.time_completed}
          </SectionTextLevelFour>
          <SectionTextLevelFour>
            Check state: {item.is_completed ? "completed" : null}
          </SectionTextLevelFour>
        </>
      );
    } else {
      return (
        <SectionTextLevelFour>
          Check state: To be completed
        </SectionTextLevelFour>
      );
    }
  };

  return (
    <Container>
      <SectionTextLevelThree>Check time: {item.time}</SectionTextLevelThree>
      {handleContentLogic()}
    </Container>
  );
};

export const Container = styled.div`
  padding: 0px;
`;
