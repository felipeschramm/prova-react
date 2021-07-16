import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeGame } from "../../store/Cart/cartSlice";
import { Game } from "../../store/Games/gamesSlice";
import {
  Container,
  LineColor,
  NumbersTextStyle,
  TypeTextStyle,
  PriceText,
} from "./styles";

const BetInCart: React.FC<{
  game: Game;
  onUpdatePrice: React.Dispatch<React.SetStateAction<number>>;
  prevStatePrice: number;
  onUpdateItemQty: React.Dispatch<React.SetStateAction<number>>;
  prevStateQty: number;
}> = (props) => {
  const { game, onUpdatePrice, prevStatePrice, onUpdateItemQty, prevStateQty } =
    props;
  const dispatch = useDispatch();

  // const formatNumbers = (numbers: Array<number>) => {
  //   let resp = "";
  //   numbers.forEach(function (number, index) {
  //     if (index !== numbers.length - 1) resp += number + ", ";
  //     else resp += number;
  //   });
  //   return resp;
  // };

  return (
    <Container >
      <FiTrash2
        size={25}
        color={"#888888"}
        style={{ marginRight: "5px", marginLeft: "15px", cursor: "pointer" }}
        onClick={() => {
          dispatch(removeGame(game.index));
          onUpdatePrice(prevStatePrice - game.price);
          onUpdateItemQty(prevStateQty - 1);
        }}
      />
      <LineColor max={game['max-number']} color={game.color} />
      <div style={{ width: "234px", marginLeft: "5px" }}>
        <NumbersTextStyle>{game.numbers}</NumbersTextStyle>
        <TypeTextStyle color={game.color}>{game.type}</TypeTextStyle>
        <PriceText>R$ {game.price.toFixed(2).replace(".", ",")}</PriceText>
      </div>
    </Container>
  );
};

export default BetInCart;
