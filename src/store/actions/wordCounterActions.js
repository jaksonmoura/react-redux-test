export const count = (sentence) => {
    return {
        type: "count/words",
        payload: sentence
    }
}