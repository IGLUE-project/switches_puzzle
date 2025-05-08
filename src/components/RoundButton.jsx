import { useState } from "react";

export default function RoundButton({ theme }) {
  const [activo, setActivo] = useState(false);

  return <img src={theme.buttonImg} style={{ height: "100%" }} />;
}
