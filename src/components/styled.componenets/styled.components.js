import styled from "styled-components";

export const Input = styled.input`
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

export const SearchBar = styled(Input)`
  padding: 10px;
  widht: 150px;
  height: 10px;
  border: 1px rgba(159, 162, 180) solid;
`;

export const FirstText = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.colors.text1};
`;

export const SecondText = styled.p`
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.text2};
  opacity: 0.7;
`;

export const ThirdText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.colors.text3};
`;

export const FourthText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text3};
`;

export const FifthText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.text2};
`;

export const UserDetailsText = styled.p`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.text1};
`;

export const SectionText = styled(UserDetailsText)`
  text-align: left;
  font-size: 19px;
  line-height: 0px;
  text-aling: center;
`;

export const SectionTextLevelTwo = styled(UserDetailsText)`
  text-align: left;
`;

export const SectionTextLevelThree = styled(UserDetailsText)`
  text-align: left;
  font-size: 12px;
  border-bottom: 1px rgba(159, 162, 180, 0.3) solid;
`;
export const SectionTextLevelFour = styled(UserDetailsText)`
  text-align: left;
  font-size: 12px;
`;
