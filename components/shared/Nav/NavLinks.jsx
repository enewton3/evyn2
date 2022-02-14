import { Button } from "@mui/material";
import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <Link className="nav-link" href="/about">
        <Button color="secondary">About</Button>
      </Link>
      <Link className="nav-link" href="/dev">
        <Button color="secondary">Software Development</Button>
      </Link>
      <Link className="nav-link" href="/theater">
        <Button color="secondary">Theater and Lighting</Button>
      </Link>
      {/* <Link className="nav-link" to="/other">
  Other Projects
</Link> */}
      <Link className="nav-link" href="/contact">
        <Button color="secondary">Contact</Button>
      </Link>
    </>
  );
}
