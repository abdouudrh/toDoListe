const initialState = [{
    workName: 'work 1'
}, {
    workName: 'work 2'
}]
// eslint-disable-next-line import/no-anonymous-default-export
export default (state= initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        default:
            return state
    }
}