import React from "react";
import { Button, Typography } from "@mui/material";
import {
  Wrapper,
  BlueSide,
  LoginSide,
  LoginSideTwitterIcon,
  BlueSideTwitterIcon,
  BlueSideListItem,
  BlueSideListInfo,
  LoginSideWrapper,
  SearchIcon,
  LoginSideTitle,
  ModeCommentOutlinedIcon,
  PeopleOutlineIcon,
} from "./styles";

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
