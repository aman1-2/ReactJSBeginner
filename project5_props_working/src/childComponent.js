function ChildComponent(props) {
    //We will have a empty JS obect in props as there is nothig which is passed by App which is the parent component of the childComponent.
    console.log("Checking what we have inside the child component of Props: ",props);
    console.log("Children Props: ", props.children);
    return(
        <div>
            <h1>Child Component</h1>
            <img src={props.src} alt=""></img>
            {props.children};
        </div>
    );
}

export default ChildComponent;