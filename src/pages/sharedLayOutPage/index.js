import React, { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";
import { InnerAppContext } from "../../context/InnerAppContext";
import { AppContext } from "../../context/AppContext";
import styled from "styled-components";

const SharedLayOut = () => {
  const [sessionObject, setSessionObject] = useState(null);
  const [historyObject, setHistoryObject] = useState(null);
  const { app } = useContext(AppContext);
  const mongo = app.currentUser.mongoClient("mongodb-atlas");
  const sessionCollection = mongo.db("taskAppDb").collection("Session");
  const historyCollection = mongo.db("taskAppDb").collection("History");

  // Current checks session Object logic
  const sessionInstance = async () => {
    const doc = await sessionCollection.findOne();
    setSessionObject((prev) => (prev = doc));
  };

  useEffect(() => {
    sessionInstance();
  }, []);

  const repeatSessionInstance = () => {
    setTimeout(async () => {
      const doc = await sessionCollection.findOne();
      setSessionObject((prev) => (prev = doc));
    }, 900000);
  };

  useEffect(() => {
    repeatSessionInstance();
  }, [repeatSessionInstance]);
  //** */

  // History checks session Object logic
  const historySessionInstance = async () => {
    const doc = await historyCollection.find();
    setHistoryObject((prev) => (prev = doc));
  };
  useEffect(() => {
    historySessionInstance();
  }, []);

  //** */
  if (sessionObject && historyObject) {
    return (
      <InnerAppContext.Provider value={{ sessionObject, historyObject }}>
        <GridContainer>
          <GridItem>
            <Menu />
          </GridItem>
          <GridItem>
            <Outlet />
          </GridItem>
        </GridContainer>
      </InnerAppContext.Provider>
    );
  }
};

export default SharedLayOut;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  min-height: 0;
  min-width: 0;
`;

const GridItem = styled.div`
  background: "#DFE7E7";
  overflow: hidden;
  minwidth: 0;
  height: 100vh;
`;
