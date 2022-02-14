import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#303131",
      light: "#333232",
      dark: "#000000",
    },
    secondary: {
      main: "#f9a825",
      light: "#7b7b7b",
      dark: "#d4890b",
      contrastText: "rgba(0,0,0,0.87)",
    },
    background: {
      default: "#000000",
      paper: "#b39797",
    },
  },
});
