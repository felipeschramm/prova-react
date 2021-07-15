import api from "../../services/games.json";
import ButtonType from "../../components/ButtonType/";
import { Game } from "../../store/Games/gamesSlice";
import { useState } from "react";
import BettingNumbers from "../../components/BettingNumbers/";
import { FiShoppingCart, FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { RootState } from "../../store";
import { addGame, clear } from "../../store/Cart/cartSlice";
import { saveGame } from "../../store/Games/gamesSlice";
import BetInCart from "../../components/BetInCart/";
import Header from "../../components/Header/";
import { useHistory } from "react-router-dom";
import cart from "../../assets/emptyCart.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BottomButtonsRow,ButtonsTypeRow,BetContainer,
  CartContainer,CartTitle,ChooseAGameText,
  Column1,Column2,Container,
  Description,DivBettingNumbers,ForText,
  NewBetText,TotalQttText,DivCartFromStore,
  DivRowTotal,LabelCartText,BottomButton,
  SaveButton,AddButton,SpanTotal, DivFooter
} from "./styles";
import axios from "axios";

type game = {
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
  "min-cart-value": number;
};

const NewBetPage: React.FC = () => {
  const history = useHistory();
  const cartFromStore = useSelector((state: RootState) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [game, setGame] = useState<game>({
    type: "",
    description: "",
    range: 0,
    price: 0,
    "max-number": 0,
    color: "",
    "min-cart-value": 0,
  });
  const [numbersSelected, setNumbersSelected] = useState<number[]>([]);
  const numbersSelect: Array<number> = numbersSelected;

  function defineType(type: string) {
    setType(type);

    api.types.forEach((game) => {
      if (game.type === type) {
        setGame(game);
      }
    });
  }

  const clickNumbersHandler = (index: number) => {
    if (
      numbersSelected.length < game["max-number"] &&
      !numbersSelected.includes(index)
    ) {
      const newArray = [...numbersSelected, index];
      setNumbersSelected(newArray);
    } else {
      setNumbersSelected(numbersSelected.filter((number) => number !== index));
    }
  };

  const generateBettingNumbers = () => {
    let arrayNumbers = [];
    for (let index = 1; index <= game.range; index++) {
      arrayNumbers.push(
        <BettingNumbers
          key={index}
          numberButton={index < 10 ? Number("0" + index) : index}
          colorButton={game.color}
          onClick={() => clickNumbersHandler(index)}
          isClicked={numbersSelected.includes(index)}
        />
      );
    }
    return arrayNumbers;
  };

  const clearGame = () => {
    if (numbersSelected.length === 0) {
      return toast.info("Game is already empty");
    }
    setNumbersSelected([]);
  };

  const completeGame = () => {
    if (numbersSelected.length >= game["max-number"]) {
      return toast.info("Game is already completed");
    }

    const left = game["max-number"] - numbersSelected.length;

    for (var i = 1; i <= left; i++) {
      var number = Math.ceil(Math.random() * game.range);
      var resp = number < 10 ? "0" + number : number;
      if (numbersSelected.includes(Number(resp))) {
        --i;
      } else {
        numbersSelect.push(Number(resp));
      }
    }

    setNumbersSelected([...numbersSelect]);
  };

  const addToCart = () => {
    const left = game["max-number"] - numbersSelected.length;
    if (numbersSelected.length !== game["max-number"]) {
      if (left === 1) return toast.info("Select " + left + " more number");
      return toast.info("Select " + left + " more numbers");
    }
    dispatch(
      addGame({
        index: new Date().toString(),
        date: moment().format("DD/MM/yyyy"),
        numbers: numbersSelected.sort((a, b) => a - b),
        price: Number(game.price.toFixed(2)),
        type: game.type,
        color: game.color,
        max: game["max-number"],
      })
    );
    setTotalQty((prevState) => prevState + 1);
    setTotalPrice((prevState) => prevState + game.price);
    setNumbersSelected([]);
  };

  const saveHandler = () => {
    if (totalPrice >= 30) {
      dispatch(saveGame(cartFromStore));
      history.replace("/");
    } else {
      toast.info(
        "Spend more R$" +
          (30 - totalPrice).toFixed(2) +
          ". Minimum amount of R$30.00"
      );
    }
  };

  return (
    <Container>
      <Header />

      <BetContainer>
        <Column1>
          <NewBetText>NEW BET</NewBetText>
          {type && <ForText>{" FOR " + type.toUpperCase()}</ForText>}
          <ChooseAGameText>Choose a game</ChooseAGameText>
          <ButtonsTypeRow>
            {api.types.map((game, index) => {
              return (
                <ButtonType
                  key={index}
                  game={game}
                  isClicked={type === game.type ? true : false}
                  onClick={() => {
                    if (type !== game.type) {
                      defineType(game.type);
                      setNumbersSelected([]);
                    } else {
                      setType("");
                    }
                  }}
                />
              );
            })}
          </ButtonsTypeRow>
          {type && (
            <>
              <ChooseAGameText>Fill your bet</ChooseAGameText>

              <Description>{game?.description}</Description>
              <DivBettingNumbers>{generateBettingNumbers()}</DivBettingNumbers>
            </>
          )}

          <BottomButtonsRow>
            {type && (
              <>
                <BottomButton onClick={completeGame}>
                  Complete game
                </BottomButton>
                <BottomButton onClick={clearGame}>Clear game</BottomButton>
                <AddButton onClick={addToCart}>
                  <FiShoppingCart size={25} style={{ marginRight: "20px" }} />{" "}
                  Add to cart
                </AddButton>
                <ToastContainer />
              </>
            )}
          </BottomButtonsRow>
        </Column1>
        <Column2>
          <CartContainer>
            <CartTitle>
              CART
              <TotalQttText>{totalQty}</TotalQttText>
            </CartTitle>

            <DivCartFromStore>
              {cartFromStore &&
                cartFromStore.map((item: Game) => {
                  return (
                    <BetInCart
                      key={item.index}
                      game={item}
                      onUpdatePrice={setTotalPrice}
                      prevStatePrice={totalPrice}
                      onUpdateItemQty={setTotalQty}
                      prevStateQty={totalQty}
                    />
                  );
                })}
              {cartFromStore.length === 0 && (
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={cart}
                      height={30}
                      style={{ opacity: "0.5" }}
                    ></img>
                  </div>
                  <div
                    style={{
                      color: "#868686",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      font: "italic normal bold 17px/30px Helvetica Neue",
                    }}
                  >
                    Your cart is empty
                  </div>
                  <div
                    style={{
                      color: "#868686",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      font: "italic normal bold 13px/20px Helvetica Neue",
                    }}
                  >
                    Add something here!
                  </div>
                </div>
              )}
            </DivCartFromStore>
            <DivRowTotal>
              <LabelCartText>CART</LabelCartText>
              <SpanTotal
              >
                TOTAL: {totalPrice.toFixed(2).replace(".", ",")}
              </SpanTotal>
            </DivRowTotal>
          </CartContainer>
          <SaveButton onClick={saveHandler}>
            Save <FiArrowRight size={35} color="#27C383" />
          </SaveButton>
        </Column2>
      </BetContainer>
      <DivFooter
      >
        <p
          style={{
            font: "normal normal normal 15px Helvetica Neue",
          }}
        >
          Copyright 2020 Luby Software
        </p>
      </DivFooter>
    </Container>
  );
};

export default NewBetPage;