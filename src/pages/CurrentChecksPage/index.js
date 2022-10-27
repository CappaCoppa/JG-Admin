import React, { useContext, useState } from "react";
import HeaderContainerComponent from "../../components/HeaderContainer";
import {
  SectionText,
  UserDetailsText,
} from "../../components/styled.componenets/styled.components";
import { InnerAppContext } from "../../context/InnerAppContext";
import styled from "styled-components";
import { IndividualField } from "./IndividualField";
import Animation from "../../components/Animation";

const CurrentChecks = () => {
  const { sessionObject } = useContext(InnerAppContext);
  const tomraDoc = sessionObject.tomra.qr_scan;
  const [addClass, setAddClass] = useState();
  const [addClass2, setAddClass2] = useState();
  const millingDoc = sessionObject.milling.qr_scan;

  const handleContent = (document, settingClass, addingClass) => {
    return document.map((item, index) => {
      return (
        <IndividualField
          item={item}
          settingClass={settingClass}
          addingClass={addingClass}
          index={index}
          key={index}
        />
      );
    });
  };

  return (
    <Animation>
      <BackgroundContainer>
        <HeaderContainerComponent name="Current Checks" />
        <ContentContainer>
          <ContentContainerHeader>
            <SectionText>Live Monitoring</SectionText>
            <ContentContainerHeaderItems>
              <UserDetailsText>{sessionObject.date_created}</UserDetailsText>|
              <UserDetailsText>{sessionObject.week_day}</UserDetailsText>|
              <UserDetailsText>{sessionObject.shift}</UserDetailsText>
            </ContentContainerHeaderItems>
          </ContentContainerHeader>
          <ContentContainerBody>
            <ContentContainerBodyItem>
              <SectionText>Tomra room</SectionText>
              {handleContent(tomraDoc, setAddClass, addClass)}
            </ContentContainerBodyItem>
            <ContentContainerBodyItem>
              <SectionText>Milling area</SectionText>
              {handleContent(millingDoc, setAddClass2, addClass2)}
            </ContentContainerBodyItem>
          </ContentContainerBody>
        </ContentContainer>
      </BackgroundContainer>
    </Animation>
  );
};

export default CurrentChecks;

const BackgroundContainer = styled.div`
  overflow-y: scroll;
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.colors.contentBody};
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
`;

const ContentContainer = styled.div`
  background: ${({ theme }) => theme.colors.buttonColor};
  margin: 5px 35px;
  border-radius: 8px;
  border: 1px rgba(159, 162, 180, 0.3) solid;
  padding-bottom: 15px;
`;

const ContentContainerHeader = styled.div`
  padding: 28px 32px;
  display: flex;
  flex-direction: center;
  justify-content: space-between;
  align-items: center;
`;

const ContentContainerHeaderItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const ContentContainerBody = styled.div`
  padding: 0px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 436px;
  gap: 10px;
`;

export const ContentContainerBodyItem = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 1px rgba(159, 162, 180, 0.3) solid;
`;
