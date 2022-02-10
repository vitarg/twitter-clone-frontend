import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
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
import DialogSignIn from "../../components/dialog";

const SignIn: React.FC = () => {
  const [openSignInDialog, setOpenSignInDialog] = useState<boolean>(false);
  const [openSignUpDialog, setOpenSignUpDialog] = useState<boolean>(false);

  const handleClickOpen = (type: string) => {
    if (type === "sign-in") {
      setOpenSignInDialog(true);
    }

    if (type === "sign-up") {
      setOpenSignUpDialog(true);
    }
  };

  const handleClose = (type: string) => {
    if (type === "sign-in") {
      setOpenSignInDialog(false);
    }

    if (type === "sign-up") {
      setOpenSignUpDialog(false);
    }
  };
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
            onClick={() => handleClickOpen("sign-up")}
            variant={"contained"}
            color={"primary"}
            fullWidth
            style={{ marginBottom: 20 }}
          >
            Зарегистрироваться
          </Button>
          <Button
            onClick={() => handleClickOpen("sign-in")}
            variant={"outlined"}
            color={"primary"}
            fullWidth
          >
            Войти
          </Button>
        </LoginSideWrapper>
        <DialogSignIn
          open={openSignInDialog}
          title={"Войти в аккаунт"}
          onClose={() => handleClose("sign-in")}
        >
          <FormControl component={"fieldset"} fullWidth>
            <FormGroup aria-label={"position"} row>
              <TextField
                autoFocus
                variant={"filled"}
                id={"email"}
                label={"E-mail"}
                type={"email"}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ marginBottom: 18 }}
              />
              <TextField
                autoFocus
                variant={"filled"}
                id={"password"}
                label={"Пароль"}
                type={"password"}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ marginBottom: 18 }}
              />
            </FormGroup>
            <Button
              onClick={() => handleClose("sign-in")}
              variant={"contained"}
              fullWidth
            >
              Войти
            </Button>
          </FormControl>
        </DialogSignIn>
      </LoginSide>
    </Wrapper>
  );
};

export default SignIn;
