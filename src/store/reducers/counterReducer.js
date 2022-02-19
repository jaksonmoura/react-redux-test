const initialState = {
    value: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case 'increment':
            return { value: state.value + action.payload};
        case 'decrement':
            let dec = state.value - action.payload
            return { value: dec < 0 ? 0 : state.value - action.payload};
        default:
            return state
    }
}

export default counterReducer