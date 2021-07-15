import { Link, useHistory } from "react-router-dom";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/User/userSlice";
import Footer from "../../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import {
  Container,
  Authentication,
  Card,
  Column,
  TheGreatestText,
  Green,
  Lottery,
  RegisterText,
  Span,
} from "./styles";
import axios from "axios";

const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const dataUser = {
    email: email,
    password: password,
    name: name,
  };

  const registerHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(register(dataUser));

    axios
      .post("http://localhost:3333/users", {
        username: name,
        email: email,
        password: password,
      })
      .then((resp) => {
        setName("");
        setEmail("");
        setPassword("");
        toast.success("User created. Go back to login page");
      })
      .catch((err) => {
        if (err) return toast.error("Failed to create user");
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
        <Authentication>Registration</Authentication>

        <Card onSubmit={registerHandler}>
          <input
            placeholder="Name"
            required
            value={name}
            onChange={(input) => setName(input.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            required
            value={email}
            onChange={(input) => setEmail(input.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            required
            minLength={7}
            value={password}
            onChange={(input) => setPassword(input.target.value)}
          />
          <RegisterText>
            Register <FiArrowRight style={{ marginLeft: "10px" }} />
          </RegisterText>
        </Card>

        <Link to="/auth" style={{ textDecoration: "none" }}>
          <Authentication>
            <FiArrowLeft />
            Back
          </Authentication>
        </Link>
      </Column>
      <ToastContainer />
      <Footer />
    </Container>
  );
};

export default RegisterPage;
