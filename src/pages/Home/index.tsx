import { FiArrowRight, FiXCircle } from "react-icons/fi";
import ButtonType from "../../components/ButtonType/";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import BetsListItem from "../../components/BetsListItem/";
import React, { useState, useEffect, useCallback } from "react";
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
  DivPages,
} from "./styles";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { generatePath } from "react-router-dom";

type game = {
  index: string;
  numbers: string;
  date: string;
  price: number;
  type: string;
  "max-number": number;
  color: string;
};

type info = { lastPage: number; total: string };

const HomePage: React.FC = () => {
  const token = useSelector((state: RootState) => state.user.token);
  const [typesGames, setTypesGames] = useState<game[]>();
  const [gamesFromRequest, setGamesFromRequest] = useState<game[]>([]);
  const [allgamesFromRequest, setAllGamesFromRequest] = useState<game[]>([]);
  const [infoPages, setInfoPages] = useState<info>({ lastPage: 1, total: "" });
  useEffect(() => {
    axios
      .get("http://192.168.0.100:3333/games", {
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
      .get(`http://192.168.0.100:3333/bets?page=1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp.data.data);
        setGamesFromRequest(resp.data.data);
        setInfoPages({
          lastPage: resp.data.lastPage,
          total: resp.data.total,
        });
      })
      .catch((err) => {
        return toast.error("Failed to load bets");
      });

    axios
      .get(`http://192.168.0.100:3333/allbets?`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setAllGamesFromRequest(resp.data);
      })
      .catch((err) => {
        return toast.error("Failed to load bets");
      });
  }, []);

  const [filteredGames, setFilteredGames] = useState(gamesFromRequest);
  const [type, setType] = useState("");

  function clickButtonHandler(type: string) {
    setType(type);

    const filtGames = allgamesFromRequest?.filter((game) => game.type === type);
    setFilteredGames(filtGames);
  }

  const changePage = (page: number) => {
    axios
      .get(`http://192.168.0.100:3333/bets?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        if (type) {
          setGamesFromRequest(allgamesFromRequest);
        }
        setGamesFromRequest(resp.data.data);
      })
      .catch((err) => {
        return toast.error("Failed to load bets");
      });
  };

  const generatePagesNumber = () => {
    let resp = [];
    for (let i = 1; i <= infoPages.lastPage; i++) {
      resp.push(
        <button
          onClick={() => {
            changePage(i);
          }}
        >
          {i}
        </button>
      );
    }
    return resp;
  };

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
      {!type && <DivPages>{generatePagesNumber()}</DivPages>}
      <ToastContainer />
      <Footer />
    </Container>
  );
};

export default HomePage;
