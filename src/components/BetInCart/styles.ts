import styled from "styled-components";

interface Props {
  color: string;
  max: number;
}

interface PropsType {
  color: string;
}

// export const Container = styled.div`
//     margin-left: 19px;
//     font: italic normal bold 24px/70px Helvetica Neue;
//     color: #707070;
//     height: 70px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
// `

// export const PriceText = styled.div`
//     margin-right: 5px;
//     margin-left: 15px;
//     cursor: pointer;
// `

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 284px;
  margin-bottom: 20px;
`;

export const LineColor = styled.div`
  width: 4px;
  height: ${(props: Props) => (props.max > 8 ? "86px" : "60px")};
  background-color: ${(props: Props) => props.color};
  border-radius: 100px 0px 0px 100px;
  margin-right: 5px;
`;

export const NumbersTextStyle = styled.div`
  font: italic normal bold 15px Helvetica Neue;
  color: #868686;
  margin-bottom:5px
`;

export const TypeTextStyle = styled.label`
  font: italic normal bold 16px Helvetica Neue;
  color: ${(props: PropsType) => props.color};
  margin-right: 5px;
`;

export const PriceText = styled.label`
  font: normal normal normal 16px Helvetica Neue;
  color: #868686;
  margin-left: 5px;
`;
