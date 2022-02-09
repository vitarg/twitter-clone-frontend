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
  backgroundColor: "#62c6ff",
  flex: "0 0 50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
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

const SearchIcon = styled(Search)(({ theme }) => ({
  fontSize: 36,
  marginRight: 16,
}));

const PeopleOutlineIcon = styled(PeopleOutline)(({ theme }) => ({
  fontSize: 36,
  marginRight: 16,
}));

const ModeCommentOutlinedIcon = styled(ModeCommentOutlined)(({ theme }) => ({
  fontSize: 36,
  marginRight: 16,
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
  position: "relative",
  "& h6": {
    display: "flex",
    alignItems: "center",
    fontSize: 20,
    color: "#fff",
  },
}));

const BlueSideListItem = styled("li")(({ theme }) => ({
  marginBottom: 40,
}));

const BlueSideTwitterIcon = styled(Twitter)(({ theme }) => ({
  position: "absolute",
  left: "-100%",
  top: "-100%",
  height: "300%",
  width: "300%",
}));

const SignIn: React.FC = () => {
  return (
    <Wrapper>
      <BlueSide>
        <BlueSideTwitterIcon color={"primary"} />
        <BlueSideListInfo>
          <BlueSideListItem>
            <Typography variant={"h6"}>
              <SearchIcon />
              Читайте о том, что вам интересно.
            </Typography>
          </BlueSideListItem>
          <BlueSideListItem>
            <Typography variant={"h6"}>
              <PeopleOutlineIcon />
              Узнайте, о чем говорят в мире.
            </Typography>
          </BlueSideListItem>
          <BlueSideListItem>
            <Typography variant={"h6"}>
              <ModeCommentOutlinedIcon />
              Присоединяйтесь к общению.
            </Typography>
          </BlueSideListItem>
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
