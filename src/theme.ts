import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "rgb(29, 161, 242)",
      dark: "rgb(26, 145, 218)",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgb(26, 145, 218)",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: "none",
          fontSize: 16,
          height: 40,
        },
        textPrimary: {
          paddingLeft: 20,
          paddingRight: 20,
        },
        outlinedPrimary: {
          borderColor: "rgb(29, 161, 243)",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        underline: {
          "&:after": {
            borderBottomWidth: "2px",
          },
          "&:before": {
            borderColor: "#000",
            borderBottomWidth: "2px",
          },
        },
        input: {
          backgroundColor: "rgb(245, 248, 250)",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 15,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          marginBottom: 8,
        },
      },
    },
  },
});
