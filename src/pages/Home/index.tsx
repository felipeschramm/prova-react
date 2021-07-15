import { FiArrowRight, FiXCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../services/games.json";
import ButtonType from "../../components/ButtonType/";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import BetsListItem from "../../components/BetsListItem/";
import { useState } from "react";
import Header from "../../components/Header/";
import Footer from "../../components/Footer/";
import {
  Container,
  Filters,
  NewBet,
  Recent,
  ContainerData,
  ContainerRow,
  DivBets,
  DivNewBetText,
  ContainerErrorData,
  DivErrorText,
} from "./styles";

const HomePage: React.FC = () => {
  const games = useSelector((state: RootState) => state.games);
  const [type, setType] = useState("");
  const [filteredGames, setFilteredGames] = useState(games);

  function clickButtonHandler(type: string) {
    setType(type);

    const filtGames = games.filter((game) => game.type === type);
    setFilteredGames(filtGames);
  }

  return (
    <Container>
      <Header />

      <ContainerRow>
        <ContainerData>
          <Recent>Recent Games</Recent>
          <Filters>Filters</Filters>
          {api.types.map((game, index) => {
            return (
              <ButtonType
                key={index}
                game={game}
                isClicked={type === game.type ? true : false}
                onClick={() => {
                  if (type !== game.type) {
                    clickButtonHandler(game.type);
                  } else {
                    setType("");
                  }
                }}
              />
            );
          })}
        </ContainerData>

        <DivNewBetText>
          <NewBet to="/new-bet">
            New Bet <FiArrowRight size={27} style={{ marginLeft: "10px" }} />
          </NewBet>
        </DivNewBetText>
      </ContainerRow>

      <DivBets>
        {type &&
          filteredGames.length !== 0 &&
          filteredGames.map((game) => (
            <BetsListItem game={game} key={game.index} />
          ))}
        {!type && games.length === 0 && (
          <ContainerErrorData>
            <DivErrorText>
              <FiXCircle size={20} color="#FF9494" />
              No bet found. Click on{" "}
              <span style={{ color: "#b5c401" }}>New Bet</span> to add a new
              one!
            </DivErrorText>
          </ContainerErrorData>
        )}
        {type && filteredGames.length === 0 && (
          <ContainerErrorData>
            <DivErrorText>
              <FiXCircle size={20} color="#FF9494" />
              {"No bet of type " + type + " found"}
            </DivErrorText>
          </ContainerErrorData>
        )}
        {!type &&
          games.length !== 0 &&
          games.map((game) => <BetsListItem game={game} key={game.index} />)}
      </DivBets>
      <Footer />
    </Container>
  );
};

export default HomePage;
