import { Link } from "react-router-dom";
import classes from "./AuthPage.module.css";
import { FiArrowRight } from "react-icons/fi";

const AuthPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <p className={classes.thegreatesttext}>The Greatest App</p>

        <div className={classes.green}>
          <span className={classes.span}>for</span>
        </div>

        <p className={classes.lottery}>LOTTERY</p>
      </div>

      <div className={classes.column}>
        <p className={classes.authentication}>Authentication</p>

        <div className={classes.card}>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <Link
            to="/reset"
            style={{ textDecoration: "none" }}
            className={classes.forgot}
          >
            I forgot my password
          </Link>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={classes.logintext}
          >
            Log In <FiArrowRight />
          </Link>
        </div>

        <Link to="/register" style={{ textDecoration: "none" }}>
          <p className={classes.authentication}>
            Sign Up
            <FiArrowRight />
          </p>
        </Link>
      </div>

      {/* <div>
        <p>Copyright 2020 Luby Software</p>
      </div> */}
    </div>
  );
};

export default AuthPage;
