import initialState from "./state/InitialState";

export default function ContentReducer(state = initialState.content, action) {
    switch(action.type) {
        default:
            return state;
    }
}
