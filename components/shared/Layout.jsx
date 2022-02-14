import Footer from "./Footer";
import Nav from "./Nav/Nav";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../../styles/muiTheme";
import { useState } from "react";
import { Container } from "@mui/material";

export default function Layout(props) {
  const [theme, setTheme] = useState();

  return (
    <ThemeProvider theme={lightTheme}>
      <Nav />
      <Container sx={{backgroundColor: lightTheme.primary}}>{props.children}</Container>
      <Footer />
    </ThemeProvider>
  );
}
