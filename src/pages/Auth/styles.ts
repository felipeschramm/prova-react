import styled from "styled-components";

export const Container = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  min-width: 900px;
`;

export const Column = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TheGreatestText = styled.p`
  width: 244px;
  color: #707070;
  text-align: center;
  font: italic normal bold 65px/70px Helvetica Neue;
`;

export const Green = styled.div`
  width: 144px;
  height: 39px;
  border-radius: 100px;
  background-color: #b5c401;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  margin-bottom: -60px;
`;
export const Span = styled.span`
  font: italic normal bold 22px/85px Helvetica Neue;
  color: white;
`;

export const Lottery = styled.p`
  font: italic normal bold 83px/85px Helvetica Neue;
  color: #707070;
`;

export const Authentication = styled.p`
  font: italic normal bold 35px/70px Helvetica Neue;
  color: #707070;
  display: flex;
  align-items: center;
`;

export const SignUpText = styled.p`
  font: italic normal bold 35px Helvetica Neue;
  color: #707070;
  display: flex;
  align-items: center;
`;

export const Card = styled.form`
  margin-top: -30px;
  width: 352px;
  height: auto;
  border-radius: 14px;
  border: 1px solid #dddddd;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 25px #00000014;
  margin-bottom:-20px;
  input {
    border: none;
    border-bottom: 2px solid #ebebeb;
    border-radius: 14px 14px 0px 0px;
    height: 60px;
    font-size: 17px;
    padding-left: 30px;
    color: #9d9d9d;
    font: italic normal bold 17px Helvetica Neue;
    ::placeholder{
      color:#9d9d9d
    }
  }
  input:focus {
    outline: none;
  }
`;

export const Forgot = styled.button`
  font: italic normal normal 17px/70px Helvetica Neue;
  color: #c1c1c1;
  text-align: right;
  margin-right: 20px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background-color: #fff;
`;
export const LoginText = styled.button`
  font: italic normal bold 35px Helvetica Neue;
  color: #b5c401;
  margin-bottom: 40px;
  background: none;
  cursor: pointer;
  border: none;
  display: "flex";
  justify-content: "center";
  align-items: "center";
`;
