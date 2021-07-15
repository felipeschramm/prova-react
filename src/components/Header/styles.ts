import { Link } from "react-router-dom";
import styled from "styled-components";

export const Tgl = styled.span`
  font: italic normal bold 44px Helvetica Neue;
  color: #707070;
  margin-top: 15px;
`;

export const ContainerHeader = styled.header`
  width: 80%;
  height: 75.5px;
  border-bottom: 2px solid #ebebeb;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuHeader = styled(Link)`
  margin-left: 50px;
  font: italic normal bold 20px Helvetica Neue;
  color: #707070;
  text-decoration: none;
`;
export const BottomTgl = styled.div`
  position: absolute;
  top: 73px;
  left: 10%;
  width: 95px;
  height: 7px;
  background-color: #b5c401;
  border-radius: 6px;
`;
