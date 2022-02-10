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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface DialogSingInProps {
  title: string;
  open: boolean;
  onClose: () => void;
}

const DialogSignIn: React.FC<DialogSingInProps> = ({
  title,
  children,
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id={"from-dialog-title"}>
        <IconButton onClick={onClose} color={"secondary"} aria-label={"close"}>
          <CloseIcon style={{ fontSize: 26 }} color={"primary"} />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default DialogSignIn;
