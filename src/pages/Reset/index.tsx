import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Footer from "../../components/Footer/";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  Authentication,
  Column,
  Container,
  Green,
  InputText,
  SendText,
  Span,
  TheGreatestText,
  Lottery,
} from "./styles";
import axios from "axios";

const ResetPasswordPage: React.FC = () => {
  const [emailText, setEmailText] = useState("");
  const emailRegistered = useSelector((state: RootState) => state.user.email);

  const sendLinkHandler = async () => {
    if (emailText.length !== 0) {
      if (emailRegistered === emailText) {
        await axios
          .post("http://localhost:3333/reset", {
            email: emailText,
            redirect_url: "http://www.meusistema.com/resetar_senha",
          })
          .then(() => {
            setEmailText("");
            toast.success("Link sent to your email");
          })
          .catch((err) => {
            if (err) return toast.error("Failed to reset password");
          });
      } else {
        toast.info("Email not registered");
      }
    } else {
      toast.info("Email is empty");
    }
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
        <Authentication>Reset password</Authentication>

        <Card>
          <InputText
            placeholder="Email"
            type="email"
            required
            value={emailText}
            onChange={(input) => setEmailText(input.target.value)}
          />
          <SendText
            onClick={sendLinkHandler}
            style={{ textDecoration: "none" }}
          >
            Send link <FiArrowRight size={30} style={{ marginLeft: "5px" }} />
          </SendText>
        </Card>

        <Link to="/auth" style={{ textDecoration: "none" }}>
          <Authentication>
            <FiArrowLeft /> Back
          </Authentication>
        </Link>
      </Column>
      <ToastContainer />
      <Footer />
    </Container>
  );
};

export default ResetPasswordPage;
