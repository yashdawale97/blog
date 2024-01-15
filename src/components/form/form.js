import { useState } from "react";
import InputButton from "./InputFiled/InputButton";
import TextFiled from "./InputFiled/textFiled";

export default function Form() {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });
  const { userName, password } = form;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setForm({ userName: userName, password: password });
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setForm({ userName: "", password: "" });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form>
        <TextFiled
          label="User Name"
          name="userName"
          placeholder="Please enter username"
          value={userName}
          onChangeHandler={onChangeHandler}
        />
        <TextFiled
          label="Password"
          name="password"
          placeholder="Please enter password"
          value={password}
          onChangeHandler={onChangeHandler}
        />
        <InputButton value="Submit" onClickHandler={onSubmitHandler} />
        <InputButton value="Reset" onClickHandler={resetHandler} />
      </form>
    </div>
  );
}
