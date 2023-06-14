import ToDoList from "../components/ToDoList";

const Rough=({person})=>{
    return (
        <div>
            {console.log(person)}
            {Object.keys(person).length!==0 ? <ToDoList />: null}
        </div>
    );
}

export default Rough;