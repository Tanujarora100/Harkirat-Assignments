import {useEffect, useState} from "react";
import todoItem from "./todoItem.ts";


// @ts-ignore
function Todo({id}) {


    const [todo, setTodo] = useState<todoItem>(null);


    const fetchData = async () => {
        try {
            const response = await fetch("https://sum-server.100xdevs.com/todo?id=" + id);
            const json = await response.json();
            console.log(json);
            if (json.todo !== null)
                setTodo(json.todo);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        fetchData().then()
            .catch();
    }, [id]);


    return (
        <div>
            <h1>{todo?.title}</h1>
            <h2>{todo?.description}</h2>
            <h3>{todo?.completed ? 'Completed' : 'Not Completed'}</h3>
        </div>
    );
}

export default Todo;