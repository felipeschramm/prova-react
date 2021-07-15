import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FiArrowRight, FiEye } from "react-icons/fi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { register } from "../../store/User/userSlice";
import {
  Authentication,
  TheGreatestText,
  Span,
  Lottery,
  Green,
  Card,
  SendText,
  InputText,
  Column,
  Container,
} from "./styles";
import { toast, ToastContainer } from "react-toastify";

const Account = () => {
  const nameRegistered = useSelector((state: RootState) => state.user.name);
  const emailRegistered = useSelector((state: RootState) => state.user.email);
  const passwordRegistered = useSelector(
    (state: RootState) => state.user.password
  );
  const [nameText, setNameText] = useState(nameRegistered);
  const [emailText, setEmailText] = useState(emailRegistered);
  const [typeText, setTypeText] = useState(true);
  const [passwordText, setPasswordText] = useState(passwordRegistered);
  const dispatch = useDispatch();

  const sendLinkHandler = () => {
    if (
      emailText !== emailRegistered ||
      nameText !== nameRegistered ||
      passwordText !== passwordRegistered
    ) {
      dispatch(
        register({ email: emailText, name: nameText, password: passwordText })
      );
      toast.success("Updated");
    } else {
      toast.error("Not updated");
    }
  };

  return (
    <Container>
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Column>
          <TheGreatestText>The Greatest App</TheGreatestText>

          <Green>
            <Span>for</Span>
          </Green>

          <Lottery>LOTTERY</Lottery>
        </Column>

        <Column>
          <Authentication>Update Data</Authentication>

          <Card>
            <InputText
              placeholder="Name"
              type="text"
              required
              value={nameText}
              onChange={(input) => setNameText(input.target.value)}
            />
            <InputText
              placeholder="Email"
              type="email"
              required
              value={emailText}
              onChange={(input) => setEmailText(input.target.value)}
            />
            <InputText
              placeholder="Password"
              type={typeText ? "password" : "some"}
              required
              value={passwordText}
              onChange={(input) => setPasswordText(input.target.value)}
            />
            <SendText
              onClick={sendLinkHandler}
              style={{ textDecoration: "none" }}
            >
              Update <FiArrowRight size={30} style={{ marginLeft: "10px" }} />
            </SendText>
            <FiEye
              color="9d9d9d"
              style={{
                width: "30px",
                height: "30px",
                position: "absolute",
                marginTop: "170px",
                marginLeft: "300px",
                cursor:'pointer'
              }}
              onClick={() => {
                setTypeText((prevState:boolean)=>!prevState);
              }}
            />
          </Card>
        </Column>
      </div>
      <ToastContainer />
      <Footer />
    </Container>
  );
};

export default Account;
