import {
    SET_VISIBILITY,
    RETRIEVE_SUGGESTIONS,
    RETRIEVE_SUGGESTIONS_SUCCESS,
    RETRIEVE_SUGGESTIONS_FAILURE
} from '../constants/ActionTypes'
import { createAction } from 'redux-api-middleware';

  function displayAutoCompleteAction(isVisible) {
    return { type: SET_VISIBILITY, isVisible}
}

export function displayAutocomplete (isVisible) {
    return function (dispatch) {
        dispatch(displayAutoCompleteAction({isVisible}))
    }
}

 const retrieveSuggestionsAction = (userInput, dispatch) => {
      dispatch(
          createAction( {
              types: [RETRIEVE_SUGGESTIONS, RETRIEVE_SUGGESTIONS_SUCCESS, RETRIEVE_SUGGESTIONS_FAILURE],
              endpoint: `http://www.localhost:8081/suggest?query=${userInput}`,
              method: 'GET',
          })
      )
};

export function retrieveSuggestions(userInput) {
    return function(dispatch) {
        retrieveSuggestionsAction(userInput, dispatch)
    }
}
