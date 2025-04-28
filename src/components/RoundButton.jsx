import { useState } from "react";

const ArcadeButton = () => {
  const [isHovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);

  const color = "#ff3b00";

  const lighten = (color, percent) => {
    const amt = Math.round(2.55 * percent);
    return color
      .replace(/^#/, "")
      .replace(/../g, (c) => ("0" + Math.min(255, parseInt(c, 16) + amt).toString(16)).slice(-2));
  };

  const darken = (color, percent) => {
    const amt = Math.round(2.55 * percent);
    return color
      .replace(/^#/, "")
      .replace(/../g, (c) => ("0" + Math.max(0, parseInt(c, 16) - amt).toString(16)).slice(-2));
  };

  const mainColor = isActive ? `#${darken(color, 15)}` : isHovered ? `#${lighten(color, 10)}` : color;

  const backgroundImage = isActive
    ? `radial-gradient(circle at 40% 40%, ${color} 15%, #${darken(color, 15)} 30%, #${darken(color, 15)} 40%, #${darken(
        color,
        25,
      )} 65%)`
    : isHovered
    ? `radial-gradient(circle at 40% 40%, #${lighten(color, 5)}, #${lighten(color, 10)} 30%, #${lighten(
        color,
        10,
      )} 40%, #${lighten(color, 5)} 65%)`
    : `radial-gradient(circle at 40% 40%, ${color} 15%, #${lighten(color, 6)} 30%, #${lighten(color, 6)} 40%, #${darken(
        color,
        1,
      )} 65%)`;

  const boxShadow = isActive
    ? `rgba(0,0,0,.8) 0 0 10% 5%,
       rgba(0,0,0,.8) 0 3% 3% inset,
       #${darken(color, 30)} 0 8% 10% inset,
       rgba(0,0,0,.3) 0 20% 10% inset,
       rgba(255,255,255,.3) 0 -2% 3% inset,
       #${darken(color, 30)} 0 -7% 20% inset`
    : isHovered
    ? `rgba(0,0,0,.8) 0 0 10% 5%,
         rgba(255,255,255,.9) 0 3% 3% inset,
         #${darken(color, 30)} 0 8% 10% inset,
         rgba(0,0,0,.3) 0 20% 10% inset,
         rgba(255,255,255,.5) 0 -2% 3% inset,
         #${darken(color, 30)} 0 -7% 20% inset`
    : `rgba(0,0,0,.8) 0 0 10% 5%,
         rgba(255,255,255,.7) 0 3% 3% inset,
         #${darken(color, 40)} 0 8% 10% inset,
         rgba(0,0,0,.3) 0 20% 10% inset,
         rgba(255,255,255,.5) 0 -2% 3% inset,
         #${darken(color, 30)} 0 -7% 20% inset`;

  const buttonStyle = {
    position: "relative",
    cursor: "pointer",
    width: "100%",
    aspectRatio: "1/1",
    fontSize: "2em",
    borderRadius: "50%",
    padding: "10%",
    backgroundColor: mainColor,
    backgroundImage,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow,
    zIndex: 1,
  };

  const beforeStyle = {
    content: '""',
    position: "absolute",
    top: "-10%",
    left: "-10%",
    width: "120%",
    height: "120%",
    background: `#${darken(color, 10)}`,
    borderRadius: "50%",
    boxShadow: `
      #${darken(color, 20)} 0 4% 5% inset,
      rgba(255,255,255,0.5) 0 12% 5% inset,
      #${darken(color, 30)} 0 -12% 5% inset,
      rgba(0,0,0,0.8) 0 4% 8%
    `,
    zIndex: -1,
  };

  return (
    <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
      {/* <div style={beforeStyle}></div> */}
      <button
        style={buttonStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setActive(false);
        }}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
      >
        &nbsp;
      </button>
    </div>
  );
};

export default ArcadeButton;
