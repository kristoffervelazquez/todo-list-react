import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

const TodoItem = ({ task, dispatch }) => {

    const { todo, id, done, removing } = task;


    const handleClick = (e) => {
        e.preventDefault();

        const action = {
            type: 'remove',
            payload: {
                id
            }
        }

        Swal.fire({
            title: 'Are you sure?',
            text: 'The task will be deleted...',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it'
        }).then((result) => {
            if (result.isConfirmed) {

                const action2 = {
                    type: 'removing',
                    payload: {
                        id
                    }
                }

                dispatch(action2)

                setTimeout(() => {
                    dispatch(action);
                }, 1000);


            }

        })

    }

    const handleCompleted = () => {
        const action = {
            type: 'done',
            payload: {
                id
            }
        }

        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })

        dispatch(action);
    }

    return (
        <div className={`${removing ? 'animate__animated animate__bounceOutRight' : ''} card text-black p-2 text-break animate__animated animate__bounceInRight`}>
            <div className="d-flex justify-content-between">
                <h3 onClick={handleCompleted} className={(`pointer ${done ? 'text-decoration-line-through' : ''}`)}>{todo}</h3>
                <button onClick={handleClick}
                    className="btn btn-outline-danger" >X</button>
            </div>
        </div>
    )
}

export default TodoItem