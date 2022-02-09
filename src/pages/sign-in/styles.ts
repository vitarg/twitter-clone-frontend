import { styled, Typography } from "@mui/material";
import {
  ModeCommentOutlined,
  PeopleOutline,
  Search,
  Twitter,
} from "@mui/icons-material";

export const Wrapper = styled("div")({
  display: "flex",
  height: "100vh",
});

export const BlueSide = styled("div")({
  backgroundColor: "#62c6ff",
  flex: "0 0 50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
});

export const LoginSide = styled("div")({
  flex: "0 0 50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

export const LoginSideTwitterIcon = styled(Twitter)({
  fontSize: 45,
});

export const LoginSideWrapper = styled("div")({
  maxWidth: 380,
});

export const SearchIcon = styled(Search)({
  fontSize: 36,
  marginRight: 16,
});

export const PeopleOutlineIcon = styled(PeopleOutline)({
  fontSize: 36,
  marginRight: 16,
});

export const ModeCommentOutlinedIcon = styled(ModeCommentOutlined)({
  fontSize: 36,
  marginRight: 16,
});

export const LoginSideTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: 32,
  marginBottom: 60,
  marginTop: 20,
});

export const BlueSideListInfo = styled("ul")({
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
});

export const BlueSideListItem = styled("li")({
  marginBottom: 40,
});

export const BlueSideTwitterIcon = styled(Twitter)({
  position: "absolute",
  left: "-100%",
  top: "-100%",
  height: "300%",
  width: "300%",
});
