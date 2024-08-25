const TodoData = (props) => {
{
// props là một object {}
    // name :"Aiko"
    // age: 25;
    // data: {}
}
// vi du 1 
//     const { name, age, data } = props;

// vi du 2
//   const name = props.name;
//   const age = props.age;
//   const data = props.data;


    console.log(">>> check props :", props)
    return (
        <div className='todo-data'>
            <div>My name is {props.name} </div>
        <div> learningReact </div>
        <div> Watching Youtube </div>
        </div>
    )
}
export default TodoData;