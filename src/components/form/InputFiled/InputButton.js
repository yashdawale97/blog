export default function InputButton({ value, onClickHandler }) {
  return <input type="submit" value={value} onClick={onClickHandler} />;
}
