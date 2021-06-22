import classes from './Reset.module.css'
import { Link } from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi'

const ResetPasswordPage: React.FC = () => {
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
        <p className={classes.authentication}>Reset password</p>

        <div className={classes.card}>
          <input placeholder="Email" />
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={classes.sendtext}
          >
            Send link
          </Link>
        </div>

        <Link to="/auth" style={{ textDecoration: "none" }}>
          <p className={classes.authentication}><FiArrowLeft/> Back</p>
        </Link>
      </div>

      {/* <div>
      <p>Copyright 2020 Luby Software</p>
    </div> */}
    </div>
  );
};

export default ResetPasswordPage;
