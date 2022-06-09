

export const taskReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'remove':
            return (
                state.filter(task => action.payload.id !== task.id)
            )

        default:
            return state;
    }

}