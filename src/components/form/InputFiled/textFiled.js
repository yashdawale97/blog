export default function TextFiled({
  label,
  placeholder,
  name,
  value,
  onChangeHandler,
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  );
}
