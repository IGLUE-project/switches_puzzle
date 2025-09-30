import { useEffect, useState } from "react";

export default function RoundButton({ theme, onClick, solved, solvedTrigger, controls }) {
  const [img, setImg] = useState(theme.buttonImg);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (solved) setImg(theme.buttonSolvedImg);
  }, [solved]);

  useEffect(() => {
    setDisabled(false);
  }, [solvedTrigger]);

  function click() {
    if (!disabled && controls) {
      setDisabled(true);
      onClick();
    }
  }

  return <img src={img} onClick={click} draggable={false} style={{ height: "100%" }} />;
}
