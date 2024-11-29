
const intialData = "Dummy"

const myReducer = (state = intialData, action) => {
    if (action.type === "Input") {
        state = action.payload
    }

    return state
};

export default myReducer