import { useState } from "react";

const TodoNew = (props) => {
  //useState hook (getter/setter)
  // const valueInput = "Aiko";
  const [valueInput, setvalueInput] = useState("Aiko");

  // console.log(">>> check point:", props)
  const { addNewtodo } = props;

  // addNewtodo("Aiko") // fire
  const handleclick = () => {
    console.log(">>> check valueInput: ", valueInput)
    // alert("click me");
  };

  const handleOnChange = (name) => {
    // console.log(">>> handleOnChange", name);
    setvalueInput(name)
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button style={{ cursor: "pointer" }} onClick={handleclick}>
        {" "}
        ADD{" "}
      </button>
      <div>My text input = {valueInput}</div>
    </div>
  );
};
export default TodoNew;
