import initialState from "./state/InitialState";

export default function ShoppingCartReducer(state = initialState.shoppingCart, action) {
    switch(action.type) {
        default:
            return state;
    }
}
