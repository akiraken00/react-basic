const TodoNew = (props) => {

  console.log(">>> check point:", props)
  const { addNewtodo } = props;

  addNewtodo("Aiko")
    return (
        <div className='todo-new'>
        <input type="text" />
        <button> ADD </button>
      </div>
    )
}
export default TodoNew;