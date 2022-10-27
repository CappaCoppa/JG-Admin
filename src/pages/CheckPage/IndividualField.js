import styled from "styled-components";
import { SectionTextLevelTwo } from "../../components/styled.componenets/styled.components";
import { IndividualFieldItem } from "./IndividualFieldItem";
import ArrowDown from "../../photos/arrow_down.svg";

export const IndividualField = ({ item, settingClass, addingClass, index }) => {
  const handleSettingState = () => {
    settingClass(index);
  };

  const handleContent = () => {
    return item.data.map((item, index) => {
      return <IndividualFieldItem key={index} item={item} />;
    });
  };

  return (
    <>
      <FieldHeadContainer>
        <SectionTextLevelTwo>{item.title}</SectionTextLevelTwo>
        <RotatingArrowImg
          addingClass={addingClass}
          index={index}
          src={ArrowDown}
          onClick={handleSettingState}
        />
      </FieldHeadContainer>
      <FieldBodyContainer
        addingClass={addingClass}
        index={index}
        columns={item.data.length}
      >
        {handleContent()}
      </FieldBodyContainer>
    </>
  );
};

const FieldHeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px rgba(159, 162, 180, 0.3) solid;
`;

const RotatingArrowImg = styled.img`
  widht: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.text3};
  opacity: 0.3;
  cursor: pointer;
  transition: 0.3s;
  transform: ${(props) => {
    return props.addingClass === props.index
      ? "rotate(0deg)"
      : "rotate(-180deg)";
  }};
`;

const FieldBodyContainer = styled.div`
  overflow: hidden;
  transition: transform 0.3s ease-out;
  padding: 10px;
  display: grid;
  grid-template-columns: ${(props) => {
    let string = "";
    for (let i = 0; i < props.columns; i++) {
      string = string + " 1fr";
    }
    return string;
  }};
  gap: 10px;
  border-radius: 8px;
  transform: ${(props) =>
    props.addingClass === props.index ? "scaleY(1)" : "scaleY(0)"};
  height: ${(props) => (props.addingClass === props.index ? "auto" : "0")};
`;
