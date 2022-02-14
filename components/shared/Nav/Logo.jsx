import Link from "next/link";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import styles from "../../../styles/Logo.module.css";

export default function Logo() {
  return (
    <Link href="/">
      <Button size="large" color="secondary">
        <ChevronLeftIcon className="chev-left" />
        <div className="evyn-name">&nbsp;evyn{" /"}</div>
        <ChevronRightIcon className="chev-right" />
      </Button>
    </Link>
  );
}
