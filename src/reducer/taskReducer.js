

export const taskReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'remove':
            return (
                state.filter(task => action.payload.id !== task.id)
            )
        case 'done':

            const setDoneTask = state.find(task => task.id === action.payload.id)
            setDoneTask.done = !setDoneTask.done
            return [...state];

        case 'removing':
            const setRemovingTask = state.find(task => task.id === action.payload.id)
            setRemovingTask.removing = true;
            return [...state];
            
        default:
            return state;
    }

}