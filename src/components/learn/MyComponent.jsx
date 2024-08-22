// JSX : 1 parent
//fragment

import './style.css'
const MyComponent = () =>{
    // const Aiko = "Akira 1" // string
    // const Aiko = 25; //number
    // const Aiko = true; // boolean
    // const Aiko = undefined;
    // const Aiko = null;
    const Aiko = [1, 2, 3];
    // const Aiko = {
    //     name: "Akira",
    //     age: 24
    // };
    return (
    <>
        <div> {JSON.stringify(Aiko)} Akira</div>
        <div>{console.log("Aiko")}</div>
        <div className="child"
            style={{borderRadius: "10px"}}
        >child</div>
    </>
    );
  }
export default MyComponent;