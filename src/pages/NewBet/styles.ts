import styled from "styled-components";

export const Container = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  min-height: 100vh;
  min-width: 900px;
`;
export const BetContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-left: 10%;
  padding-bottom: 60px;
`;
export const NewBetText = styled.label`
  font: italic normal bold 24px/85px Helvetica Neue;
  color: #707070;
`;
export const ForText = styled.span`
  font: italic normal 300 24px/85px Helvetica Neue;
  color: #707070;
`;
export const ChooseAGameText = styled.div`
  font: italic normal bold 17px/40px Helvetica Neue;
  color: #868686;
`;
export const Description = styled.div`
  font: italic normal normal 17px/24px Helvetica Neue;
  color: #868686;
  margin-bottom: 10px;
`;
export const DivBettingNumbers = styled.div`
  width: 100%;
  height: 320px;
  padding-top: 20px;
  overflow-x: hidden;
`;
export const CartContainer = styled.div`
  width: 317px;
  height: 388px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 10px 10px 0px 0px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const Column1 = styled.div`
  width: 60%;
  height: auto;
`;

export const Column2 = styled.div`
  width: 40%;
  height: auto;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsTypeRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BottomButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  margin-top: 20px;
`;

export const CartTitle = styled.div`
  margin-left: 19px;
  font: italic normal bold 24px/70px Helvetica Neue;
  color: #707070;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TotalQttText = styled.label`
  border-radius: 100px;
  background-color: #f7f7f7;
  margin-left: 160px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  box-shadow: 2px 2px #ccc;
`;

export const DivCartFromStore = styled.div`
  height: 280px;
  overflow-y: auto;
`;

export const DivRowTotal = styled.div`
  padding-left: 19px;
  height: 60px;
  margin-top: 15px;
`;

export const LabelCartText = styled.label`
  font: italic normal bold 24px Helvetica Neue;
  color: #707070;
  margin-right: 15px;
`;

export const BottomButton = styled.button`
  width: 164px;
  height: 52px;
  border: 1px solid #27c383;
  border-radius: 10px;
  background-color: #f7f7f7;
  cursor: pointer;
  margin-right: 20px;
  color: #27c383;
  font: normal normal medium 16px Helvetica Neue;
`;

export const SaveButton = styled.button`
  cursor: pointer;
  width: 319px;
  height: 96px;
  background: #f4f4f4;
  border: 1px solid #e2e2e2;
  border-radius: 0px 0px 10px 10px;
  bottom: 0;
  font: italic normal bold 35px/70px Helvetica Neue;
  color: #27c383;
  margin-top: -1px;
`;

export const AddButton = styled.button`
  width: 209px;
  height: 52px;
  background-color: #27c383;
  border: 1px solid #27c383;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
`;

export const SpanTotal = styled.span`
  font: normal normal 300 24px Helvetica Neue;
  color: #707070;
`;

export const DivFooter = styled.div`
  width: 100%;
  height: 79.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ebebeb;
  color: #707070;
`;
