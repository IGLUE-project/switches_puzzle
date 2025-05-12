export default function RoundButton({ theme, onClick }) {
  return <img src={theme.buttonImg} onClick={onClick} draggable={false} style={{ height: "100%" }} />;
}
