const TodoNew = (props) => {

  console.log(">>> check point:", props)
  const { addNewtodo } = props;

  // addNewtodo("Aiko") // fire
  const handleclick = () => {
    alert ("click me")
  }

  const handleOnChange = (name) => {
    console.log(">>> handleOnChange", name)
  }

    return (
        <div className='todo-new'>
        <input type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        />
        <button 
        style={{ cursor: "pointer"}}
        onClick={handleclick}
        > ADD </button>
      </div>
    )
}
export default TodoNew;