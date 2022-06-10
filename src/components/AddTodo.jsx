import { useState } from "react";


const AddTodo = ({ dispatch }) => {

    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim().length === 0) {
            return;
        }

        const action = {
            type: 'add',
            payload: {
                todo: task,
                id: Date.now(),
                done: false
            }
        }


        dispatch(action);       
        setTask('');
    }



    return (

        <div>
            <form onSubmit={handleSubmit} className="d-block">
                <h3>Add a New Taks</h3>
                <input type="text" className="form-control" placeholder="Learn React.." value={task} onChange={e => setTask(e.target.value)} />
                <div className="d-grid gap-2">
                    <input className="btn btn-primary mt-2" type="submit" value="Add" />
                </div>
            </form>
        </div>
    )
}

export default AddTodo