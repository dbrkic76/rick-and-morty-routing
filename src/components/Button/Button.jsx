import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButton({ text, handle }) {
  return (
    <Button variant="contained" color="success" onClick={() => handle(null)}>
      {text}
    </Button>
  );
}
