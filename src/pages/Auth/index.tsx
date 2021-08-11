import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { login} from "../../store/User/userSlice";
import Footer from "../../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Authentication,
  Card,
  Column,
  Green,
  Lottery,
  Span,
  TheGreatestText,
  Forgot,
  LoginText,
  SignUpText,
} from "./styles";
import axios from "axios";

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: RootState) => state.user);

  const submitHandler = async(event: React.FormEvent) => {
    event.preventDefault();
    await axios
      .post("http://192.168.0.100:3333/sessions", {
        email: email,
        password: password,
      })
      .then((resp) => {
        dispatch(login({token:(resp.data.token).toString()})); 
        history.push("/");
      })
      .catch((err) => {
        if (err) return toast.error("Failed to log in");
      });
  };

  return (
    <Container>
      <Column>
        <TheGreatestText>The Greatest App</TheGreatestText>

        <Green>
          <Span>for</Span>
        </Green>

        <Lottery>LOTTERY</Lottery>
      </Column>

      <Column>
        <Authentication>Authentication</Authentication>

        <Card onSubmit={submitHandler}>
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(input) => setEmail(input.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            minLength={7}
            onChange={(input) => setPassword(input.target.value)}
          />
          <Forgot onClick={() => history.push("/reset")}>
            I forgot my password
          </Forgot>
          <LoginText>
            Log In <FiArrowRight size={35} style={{ marginBottom: "-5px" }} />
          </LoginText>
        </Card>

        <Link to="/register" style={{ textDecoration: "none" }}>
          <SignUpText>
            Sign Up
            <FiArrowRight style={{ marginLeft: "10px" }} />
          </SignUpText>
        </Link>
      </Column>
      <ToastContainer />
      <Footer />
    </Container>
  );
};

export default AuthPage;
