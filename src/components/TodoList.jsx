import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({tasks, dispatch}) => {
    
    return (
        <>
            {
                tasks.map((task) => (
                    <TodoItem key={task.id} task={task} dispatch={dispatch}/>
                ))
            }
        </>
    )
}

export default TodoList