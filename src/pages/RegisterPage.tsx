import { Link } from "react-router-dom";
import classes from "./RegisterPage.module.css";
import {FiArrowRight, FiArrowLeft} from 'react-icons/fi'

const RegisterPage: React.FC = () => {
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
        <p className={classes.authentication}>Registration</p>

        <div className={classes.card}>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={classes.registertext}
          >
            Register <FiArrowRight style={{marginLeft:'10px'}} />
          </Link>
        </div>

        <Link to="/auth" style={{ textDecoration: "none" }}>
          <p className={classes.authentication}><FiArrowLeft/>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
