import React from 'react'

const TodoItem = ({ task, dispatch  }) => {

    const { todo, id } = task;

    const handleClick = e => {
        e.preventDefault();

        const action = {
            type: 'remove',
            payload: {
                id
            }
        }

        dispatch(action);
    }

    return (
        <div className="card text-black p-2 text-break">
            <div className="d-flex justify-content-between ">
                <h3 >{todo}</h3>
                <button onClick={handleClick} className="btn btn-outline-danger">X</button>
            </div>
        </div>
    )
}

export default TodoItem