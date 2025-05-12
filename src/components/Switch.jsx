import "../assets/scss/Switch.scss";
import { iconMap } from "../icons/shapesIcons";

const Switch = ({ id, switchData, theme, setSwitch, size }) => {
  const ledBoxSize = size.width * 0.02;
  const ledBoxMargin = size.width * 0.01;
  const imgSize = size.width * 0.035;
  const iconSize = size.width * 0.04;
  const fontSize = size.width * 0.025;

  const togglePalanca = () => {
    setSwitch(id, !switchData.pressed);
  };

  const getDataLabel = () => {
    if (switchData.image)
      return <img src={switchData.image} draggable={false} height={imgSize} width={imgSize} alt="Switch" />;

    if (switchData.ico) {
      const IconComponent = iconMap[switchData.ico.toLowerCase()];
      if (IconComponent) {
        return <IconComponent color={switchData.colorIco} height={iconSize} width={iconSize} />;
      }
    }
    if (switchData.label) return <div style={{ fontSize: fontSize + "px" }}>{switchData.label}</div>;

    return null;
  };

  function adjustColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + (255 * percent) / 100));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + (255 * percent) / 100));
    const b = Math.min(255, Math.max(0, (num & 0x0000ff) + (255 * percent) / 100));

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  }

  const inner = adjustColor(switchData.color, -40);
  const glow = adjustColor(switchData.color, 10);

  const ledCss = {
    backgroundColor: switchData.color,
    boxShadow: `rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset ${inner} 0 -1px 9px, ${glow} 0 2px 12px`,
    height: ledBoxSize,
    width: ledBoxSize,
  };

  return (
    <div className="Switch">
      <div className="led-box" style={{ margin: ledBoxMargin + "px 0" }}>
        <div
          style={switchData.pressed ? ledCss : { height: ledBoxSize, width: ledBoxSize }}
          className={(switchData.pressed ? "" : "led-off") + " led"}
        ></div>
      </div>

      <img
        className="switch-img"
        src={switchData.pressed ? theme.switchOnImg : theme.switchOffImg}
        alt=""
        onClick={togglePalanca}
        draggable={false}
      />

      <div className="data">{getDataLabel()}</div>
    </div>
  );
};

export default Switch;
