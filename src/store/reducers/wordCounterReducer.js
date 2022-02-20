const initialState = {
    counter: 0
}

const wordCounterReducer = (state = initialState, action) => {
    switch (action.type){
        case 'count/words':
            return { counter: action.payload.split(" ").length }
        default:
            return state
        }
}

export default wordCounterReducer