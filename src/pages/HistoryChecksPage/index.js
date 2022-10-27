import React, { useContext, useEffect, useState } from "react";
import {
  SearchBar,
  SectionText,
  ThirdText,
} from "../../components/styled.componenets/styled.components";
import HeaderContainerComponent from "../../components/HeaderContainer";
import Search from "../../photos/search.svg";
import ArrowLeft from "../../photos/arrow_left.svg";
import ArrowRight from "../../photos/arrow_right.svg";
import styled from "styled-components";

import { InnerAppContext } from "../../context/InnerAppContext";
import { IndividualField } from "./IndividualField";
import Animation from "../../components/Animation";
const HistoryChecks = () => {
  const { historyObject } = useContext(InnerAppContext);
  const [historyArray, setHistoryArray] = useState(historyObject);
  const [page, setPage] = useState(5);
  const [update, setUpdate] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    setHistoryArray((prev) => {
      if (update)
        return (prev = historyObject.filter(
          (item) => item.date_created === update
        ));
      else return (prev = historyObject);
    });
  }, [update, historyObject]);

  const contentPerPage = historyArray.slice(page - 5, page);

  const pageDataFunc = () => {
    if (historyArray.length === 0)
      return `0-${historyArray.length} of ${historyArray.length}`;
    if (historyArray.length < itemsPerPage) {
      return `1-${historyArray.length} of ${historyArray.length}`;
    } else if (historyArray.length % itemsPerPage === 0) {
      return `${page - 5}-${page} of ${historyArray.length}`;
    } else if (historyArray.length % itemsPerPage !== 0) {
      return ` ${page - 4}-${page - itemsPerPage + contentPerPage.length} of ${
        historyArray.length
      }`;
    }
  };

  const handleFilter = (e) => {
    setUpdate(e.target.value);
  };
  const increaseFunc = () => {
    if (historyArray.length <= page) return null;
    else {
      setPage((prev) => (prev = prev + 5));
    }
  };

  const decreaseFunc = () => {
    if (page === 5) return null;
    else {
      setPage((prev) => (prev = prev - 5));
    }
  };

  const mappingFunc = () =>
    contentPerPage.map((item, index) => {
      return <IndividualField key={index} item={item} />;
    });

  return (
    <Animation>
      <BackgroundContainer>
        <HeaderContainerComponent name="History" />
        <ContentContainer>
          <ContentContainerHeader>
            <SectionText>List</SectionText>
            <SearchBarContainer>
              <SearchBar placeholder="Search by date" onChange={handleFilter} />
              <img alt="Search" src={Search} />
            </SearchBarContainer>
          </ContentContainerHeader>
          <InformativeTickersContainer>
            <ThirdText>Date</ThirdText>
            <ThirdText>Shift</ThirdText>
          </InformativeTickersContainer>
          <ContentContainerDataContainer>
            {mappingFunc()}
          </ContentContainerDataContainer>
          <PaginationContainer>
            <ThirdText>{pageDataFunc()}</ThirdText>
            <ArrowContainer>
              <Arrow onClick={decreaseFunc} src={ArrowLeft} />
              <Arrow onClick={increaseFunc} src={ArrowRight} />
            </ArrowContainer>
          </PaginationContainer>
        </ContentContainer>
      </BackgroundContainer>
    </Animation>
  );
};

export default HistoryChecks;

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

const SearchBarContainer = styled.div`
display: flex;
flexDirection: row;
gap: 10px;
alignItems: ;center;
`;

const InformativeTickersContainer = styled.div`
  padding: 0px 32px;
  borderbottom: 1px rgba(159, 162, 180, 0.5) solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentContainerDataContainer = styled.div`
  height: 350px;
`;

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 25px;
  align-items: center;
  justify-content: end;
`;

const ArrowContainer = styled.div`
  display: flex;
  flexdirection: row;
  paddingleft: 10px;
`;

const Arrow = styled.img`
  width: "24px; height: " 24px;
  cursor: pointer;
`;
