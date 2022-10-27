import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Realm from "realm-web";
import {
  FirstText,
  FourthText,
  SecondText,
  ThirdText,
} from "../../components/styled.componenets/styled.components";
import logo from "../../photos/logo.png";
import { AppContext } from "../../context/AppContext";
import styled from "styled-components";
import Animation from "../../components/Animation";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { app, setCookie, cookie } = useContext(AppContext);

  let navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (cookie.user) {
      navigate("Current");
    } else {
      return;
    }
  }, []);

  const handleLogIn = async () => {
    const credentials = Realm.Credentials.emailPassword(username, password);
    try {
      const user = await app.logIn(credentials);
      setCookie("user", user, {
        path: "Current",
      });
      navigate("Current");
    } catch {
      console.log("Not working");
    }
  };

  return (
    <Animation>
      <Container>
        <WhiteContainer>
          <img alt="JGP logo" src={logo} />
          <SecondText>Admin dashboard</SecondText>
          <FirstText>Log In to Dashboard</FirstText>
          <ThirdText>Enter your username and password below</ThirdText>
          <InputContainer>
            <FourthText>Username</FourthText>
            <Input onChange={handleUsername} placeholder="Username" />
          </InputContainer>
          <InputContainer>
            <FourthText>password</FourthText>
            <Input
              type="password"
              onChange={handlePassword}
              placeholder="Password"
            />
          </InputContainer>
          <LogInButton onClick={handleLogIn}>
            <LogInButtonText>Log In</LogInButtonText>
          </LogInButton>
        </WhiteContainer>
      </Container>
    </Animation>
  );
};

export default LogInPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const WhiteContainer = styled.div`
  flex-direction: column;
  margin-top: 5%;
  width: 380px;
  height: 582px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

const Input = styled.input`
  width: 296px;
  height: 22px;
  border-radius: 8px;
  padding: 10px;
  opacity: 0.4;
  border-width: 1px;
  color: ${({ theme }) => theme.colors.text4};
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
  }
`;

const LogInButton = styled.div`
  cursor: pointer;
  margin-top: 30px;
  width: 316px;
  height: 48px;
  background: ${({ theme }) => theme.colors.button};
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  text-align: center;
`;

const LogInButtonText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.buttonText};
`;
