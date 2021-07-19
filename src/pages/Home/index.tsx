import { FiArrowRight, FiXCircle } from "react-icons/fi";
import ButtonType from "../../components/ButtonType/";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import BetsListItem from "../../components/BetsListItem/";
import { useState, useEffect } from "react";
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
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

type game = {
  index: string;
  numbers: string;
  date: string;
  price: number;
  type: string;
  "max-number": number;
  color: string;
};

const HomePage: React.FC = () => {
  const [gamesFromRequest, setGamesFromRequest] = useState<game[]>();
  const token = useSelector((state: RootState) => state.user.token);
  const [typesGames, setTypesGames] = useState<game[]>();
  useEffect(() => {
    axios
      .get("http://localhost:3333/games", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setTypesGames(resp.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3333/bets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setGamesFromRequest(resp.data);
      })
      .catch((err) => {
        return toast.error("Failed to load bets");
      });
  }, []);
  const [filteredGames, setFilteredGames] = useState(gamesFromRequest);
  // const games = useSelector((state: RootState) => state.games);
  const [type, setType] = useState("");

  function clickButtonHandler(type: string) {
    setType(type);

    const filtGames = gamesFromRequest?.filter((game) => game.type === type);
    setFilteredGames(filtGames);
  }

  return (
    <Container>
      <Header />

      <ContainerRow>
        <ContainerData>
          <Recent>Recent Games</Recent>
          <Filters>Filters</Filters>
          {typesGames?.map((game, index) => {
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
          filteredGames?.length !== 0 &&
          filteredGames?.map((game) => (
            <BetsListItem game={game} key={game.index} />
          ))}
        {!type && gamesFromRequest?.length === 0 && (
          <ContainerErrorData>
            <DivErrorText>
              <FiXCircle size={20} color="#FF9494" />
              No bet found. Click on{" "}
              <span style={{ color: "#b5c401" }}>New Bet</span> to add a new
              one!
            </DivErrorText>
          </ContainerErrorData>
        )}
        {type && filteredGames?.length === 0 && (
          <ContainerErrorData>
            <DivErrorText>
              <FiXCircle size={20} color="#FF9494" />
              {"No bet of type " + type + " found"}
            </DivErrorText>
          </ContainerErrorData>
        )}
        {!type &&
          gamesFromRequest?.length !== 0 &&
          gamesFromRequest?.map((game) => {
            return <BetsListItem game={game} key={game.index} />;
          })}
      </DivBets>
      <ToastContainer />
      <Footer />
    </Container>
  );
};

export default HomePage;
