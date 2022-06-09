import { useReducer } from "react";
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList";
import { taskReducer } from "./reducer/taskReduer";


const initialState = []

const App = () => {

    const [tasks, dispatch] = useReducer(taskReducer, initialState);


    return (
        <div className="container">

            <h1 className="text-center">Todo list!</h1>
            <div className="mt-3 row d-flex">

                <div className="col-md-5  text-center">
                    <AddTodo dispatch={dispatch} />
                </div>

                <div className="col-md-7">
                    <h2 className="text-center">Task list</h2>
                    <TodoList tasks={tasks} dispatch={dispatch} />
                </div>

            </div>
        </div>

    )
}

export default App