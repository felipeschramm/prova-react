import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FiArrowLeft, FiArrowRight, FiEye, FiMail } from "react-icons/fi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
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
  SendToken,
} from "./styles";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

const Account = () => {
  const user = useSelector((state: RootState) => state.user);
  const [password, setPassword] = useState("");
  useEffect(() => {
    axios
      .get("http://192.168.0.100:3333/users", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((resp) => {
        setData(resp.data);
        setNameText(resp.data.username);
        setEmailText(resp.data.email);
        setPassword(resp.data.password);
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [tokenText, setTokenText] = useState("");
  const [data, setData] = useState<{
    username: string;
    email: string;
    password: string;
  }>({ username: "", email: "", password: "" });
  const [showCard, setShowCard] = useState(true);
  const [typeText, setTypeText] = useState(true);

  const sendLinkHandler = async () => {
    if (emailText !== data.email || nameText !== data.username) {
      await axios
        .put(
          "http://192.168.0.100:3333/users",
          {
            username: nameText,
            email: emailText,
            password: password,
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

  const sendEmailHandler = () => {
    axios
      .post("http://192.168.0.100:3333/reset", {
        email: emailText,
        redirect_url: "http://192.168.0.100:3000/resetPassword",
      })
      .then(() => {
        toast.success("A token was sent to your email");
      })
      .catch((err) => {
        return toast.error("Try again");
      });
    setShowCard(false);
  };

  const updatePasswordHandler = () => {
    axios
      .put("http://192.168.0.100:3333/reset", {
        token: tokenText,
        password: passwordText,
      })
      .then(() => {
        setTokenText("");
        setPasswordText("");
        toast.success("Password updated");
        setShowCard(true);
      })
      .catch((err) => {
        return toast.error("Try again");
      });
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

        <Column style={{ paddingRight: "5%" }}>
          <Authentication>Update Data</Authentication>

          {showCard && (
            <>
              <Card>
                <InputText
                  placeholder="Name"
                  type="text"
                  required
                  value={nameText}
                  onChange={(input) => setNameText(input.target.value)}
                />
                <SendText
                  onClick={sendLinkHandler}
                  style={{ textDecoration: "none" }}
                >
                  Send <FiArrowRight size={30} style={{ marginLeft: "10px" }} />
                </SendText>
              </Card>
              <Authentication
                style={{
                  marginTop: "-1px",
                  fontSize: "25px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setShowCard(false);
                }}
              >
                Update password{" "}
                <FiArrowRight size={30} style={{ marginLeft: "5px" }} />
              </Authentication>
            </>
          )}

          {!showCard && (
            <>
              <Card>
                <InputText
                  placeholder="token"
                  type="text"
                  required
                  value={tokenText}
                  onChange={(input) => setTokenText(input.target.value)}
                />
                <InputText
                  placeholder="new password"
                  type={typeText ? "password" : "some"}
                  required
                  value={passwordText}
                  onChange={(input) => setPasswordText(input.target.value)}
                />
                <FiEye
                  color="9d9d9d"
                  style={{
                    width: "30px",
                    height: "30px",
                    position: "absolute",
                    marginTop: "95px",
                    marginLeft: "300px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setTypeText((prevState: boolean) => !prevState);
                  }}
                />
                <SendText
                  onClick={updatePasswordHandler}
                  style={{ textDecoration: "none" }}
                >
                  Update{" "}
                  <FiArrowRight size={30} style={{ marginLeft: "10px" }} />
                </SendText>
              </Card>
              <Authentication
                style={{ marginTop: "-1px", cursor: "pointer" }}
                onClick={() => {
                  setShowCard(true);
                }}
              >
                <FiArrowLeft /> Back
              </Authentication>

              <SendToken onClick={sendEmailHandler}>
                Send token{" "}
                <FiMail color="white" style={{ marginLeft: "5px" }} />
              </SendToken>
            </>
          )}
        </Column>
      </div>
      <ToastContainer />
      <Footer />
    </Container>
  );
};

export default Account;
