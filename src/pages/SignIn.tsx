import React from "react";
import {
  Twitter,
  Search,
  PeopleOutline,
  ModeCommentOutlined,
} from "@mui/icons-material";
import { Button, styled, Typography } from "@mui/material";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100vh",
}));

const BlueSide = styled("div")(({ theme }) => ({
  backgroundColor: "#1DA1F2",
  flex: "0 0 50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const LoginSide = styled("div")(({ theme }) => ({
  flex: "0 0 50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
}));

const LoginSideTwitterIcon = styled(Twitter)(({ theme }) => ({
  fontSize: 45,
}));

const LoginSideWrapper = styled("div")(({ theme }) => ({
  maxWidth: 380,
}));

const LoginSideTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 32,
  marginBottom: 60,
  marginTop: 20,
}));

const BlueSideListInfo = styled("ul")(({ theme }) => ({
  listStyle: "none",
  padding: 0,
  margin: 0,
  maxWidth: 380,
  "& h6": {
    display: "flex",
    alignItems: "center",
    fontSize: 20,
    color: "#fff",
  },
}));

const SignIn: React.FC = () => {
  return (
    <Wrapper>
      <BlueSide>
        <BlueSideListInfo>
          <li>
            <Typography variant={"h6"}>
              <Search />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li>
            <Typography variant={"h6"}>
              <PeopleOutline />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li>
            <Typography variant={"h6"}>
              <ModeCommentOutlined />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </BlueSideListInfo>
      </BlueSide>
      <LoginSide>
        <LoginSideWrapper>
          <LoginSideTwitterIcon color={"primary"} />
          <LoginSideTitle variant={"h4"}>
            Узнайте, что происходит в мире прямо сейчас
          </LoginSideTitle>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <Button
            variant={"contained"}
            color={"primary"}
            fullWidth
            style={{ marginBottom: 20 }}
          >
            Зарегистрироваться
          </Button>
          <Button variant={"outlined"} color={"primary"} fullWidth>
            Войти
          </Button>
        </LoginSideWrapper>
      </LoginSide>
    </Wrapper>
  );
};

export default SignIn;
