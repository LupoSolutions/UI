import {
    RETRIEVE_SUGGESTIONS,
    RETRIEVE_SUGGESTIONS_FAILURE,
    RETRIEVE_SUGGESTIONS_SUCCESS,
    SET_VISIBILITY
} from '../constants/ActionTypes'
import initialState from "./state/InitialState";

export default function autocompleteReducer(state = initialState.autoComplete, action) {
    switch(action.type) {
        case SET_VISIBILITY:
            return {
                 ...state,
                visible: action.isVisible
            };
        case RETRIEVE_SUGGESTIONS:
            return {
                ...state,
            }
        case RETRIEVE_SUGGESTIONS_SUCCESS:
            return {
                ...state,
                suggestions: processResponse(action.payload)
            }
            //TODO: Need to do failure
        case RETRIEVE_SUGGESTIONS_FAILURE:
            return {
                ...state,
            }
        default:
            return state;
    }
}

function processResponse(response) {
    const suggestions = []
    response.map((suggestionValue) => {
        suggestions.push(suggestionValue.suggestion)
    })
    return suggestions;
}
