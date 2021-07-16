import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #f7f7f7;
  height: 100vh;
  min-width: 900px;
`;
export const Recent = styled.label`
  width: 200px;
  font: italic normal bold 24px Helvetica Neue;
  color: #707070;
  margin-right: 45px;
`;
export const Filters = styled.label`
  font: italic normal normal 17px/70px Helvetica Neue;
  color: #868686;
  margin-right: 15px;
`;
export const NewBet = styled(Link)`
  font: italic normal bold 24px Helvetica Neue;
  color: #b5c401;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const ContainerRow = styled.div`
  width: 100%;
  height: auto;
  margin-top: 74px;
  display: flex;
  flex-direction: row;
`;
export const ContainerData = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  align-items: center;
  margin-left: 10%;
`;
export const DivNewBetText = styled.div`
  width: 20%;
  margin-right: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivBets = styled.div`
  width: 60%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 380px;
  margin-left: 10%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ContainerErrorData = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const DivErrorText = styled.div`
  color: #ff9494;
  font: italic normal bold 17px/30px Helvetica Neue;
`;
