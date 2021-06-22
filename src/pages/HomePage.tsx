import { FiArrowRight } from "react-icons/fi";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className={classes.container}>
      <header className={classes.containerHeader}>
        <span className={classes.tgl}>TGL</span>
        <div>
          <label className={classes.menuHeader}>Account</label>
          <Link to="/auth" className={classes.menuHeader}>
            Sair <FiArrowRight />
          </Link>
        </div>
      </header>
      <div className={classes.bottomTgl} />

      <div>
        <div
          style={{
            width: "100%",
            height: "auto",
            marginTop: "74px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "50%",
              alignItems: "center",
              marginLeft: "10%",
            }}
          >
            <label className={classes.recent}>Recent Games</label>
            <label className={classes.filters}>Filters</label>
            <div className={classes.buttonType}>
              <span>Lotofácil</span>
            </div>
            <div className={classes.buttonType}>
              <span>Mega-Sena</span>
            </div>
            <div className={classes.buttonType}>
              <span>Quina</span>
            </div>
          </div>

          <div
            style={{
              width: "30%",
              marginRight: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className={classes.newBet}>
              New Bet <FiArrowRight />
            </span>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "20px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "94px",
              backgroundColor: "#7F3992",
              borderRadius: "100px",
            }}
          />
          <div style={{marginLeft:'15px'}}>
            <div className={classes.numbersBet}>
              01,02,03,04,05,06,07,08,09,10,11,12,13,14,15
            </div>
            <div className={classes.infoBet}>30/11/2020 - (R$ 2,50)</div>
            <div className={classes.nameBet}>Lotofácil</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
