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
import { useEffect } from "react";
import axios from "axios";

const Account = () => {
  const user = useSelector((state: RootState) => state.user);
  useEffect(() => {
    axios
      .get("http://localhost:3333/users", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((resp) => {
        setData(resp.data);
        setNameText(resp.data.username);
        setEmailText(resp.data.email);
        setPasswordText("resp.data.password");
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [data, setData] = useState<{
    username: string;
    email: string;
    password: string;
  }>({ username: '', email: '', password: '' });
  const [typeText, setTypeText] = useState(true);

  const sendLinkHandler = () => {
    if (emailText !== data.email || nameText !== data.username) {
      axios
        .put(
          "http://localhost:3333/users",
          {
            username: nameText,
            email: emailText,
            password:'' ,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
        .then(() => {
          toast.success("Updated");
        })
        .catch((err) => {
          return toast.error("Failed to update user");
        });
    } else {
      toast.error("Not updated. Fields did not changed");
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
                cursor: "pointer",
              }}
              onClick={() => {
                setTypeText((prevState: boolean) => !prevState);
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
