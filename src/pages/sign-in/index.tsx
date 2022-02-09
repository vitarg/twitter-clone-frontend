import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormGroup,
  IconButton,
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
import CloseIcon from "@mui/icons-material/Close";

const SignIn: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            variant={"contained"}
            color={"primary"}
            fullWidth
            style={{ marginBottom: 20 }}
          >
            Зарегистрироваться
          </Button>
          <Button
            onClick={handleClickOpen}
            variant={"outlined"}
            color={"primary"}
            fullWidth
          >
            Войти
          </Button>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle id={"from-dialog-title"}>
              <IconButton
                onClick={handleClose}
                color={"secondary"}
                aria-label={"close"}
              >
                <CloseIcon style={{ fontSize: 26 }} color={"primary"} />
              </IconButton>
              Войти в Твиттер
            </DialogTitle>
            <DialogContent>
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
                <Button onClick={handleClose} variant={"contained"} fullWidth>
                  Войти
                </Button>
              </FormControl>
            </DialogContent>
          </Dialog>
        </LoginSideWrapper>
      </LoginSide>
    </Wrapper>
  );
};

export default SignIn;
