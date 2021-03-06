import React from "react";
import { useEffect } from "react";
import api from "../../services/games.json";
import { Game } from "../../store/Games/gamesSlice";
import {
  Container,
  LineColor,
  DivInfo,
  InfoBet,
  NameBet,
  NumbersBet,
} from "./styles";

const BetsListItem: React.FC<{ game: Game }> = (props) => {
  // const generateNumbers = (numbers: string) => {
  //   let resp = "";
  //   const copyNumbers = [...numbers];
  //   copyNumbers
  //     .sort((a, b) => a - b)
  //     .forEach(function (number, index) {
  //       if (index !== numbers.length - 1) resp += number + ", ";
  //       else resp += number;
  //     });

  //   return <NumbersBet>{resp}</NumbersBet>;
  // };
  useEffect(()=>{
    // console.log('props:' + JSON.stringify(props))
  })

  const item = api.types.filter((item) => {
    return item.type === props.game.type;
  });

  return (
    <Container>
      <LineColor color={item[0].color} />
      <DivInfo>
        <NumbersBet>{props.game.numbers}</NumbersBet>
        <InfoBet>
          {props.game.date + " - R$" + props.game.price.toFixed(2)}
        </InfoBet>
        <NameBet color={item[0].color}>{props.game.type}</NameBet>
      </DivInfo>
    </Container>
  );
};

export default BetsListItem;
