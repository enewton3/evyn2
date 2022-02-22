import { AppBar, Button, Toolbar } from "@mui/material";
import styles from "../../../styles/Nav.module.css";

import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

export default function Nav() {
  return (
    <AppBar color="primary" position="sticky" className={styles.appbar}>
      <Toolbar className={styles.toolbar}>
        <Logo />
        <NavLinks />
      </Toolbar>
    </AppBar>
  );
}
