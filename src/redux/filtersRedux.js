/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const CHANGE_TAG = createActionName('CHANGE_TAG');
// DONE - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });
export const changeTag = payload => ({ payload, type: CHANGE_TAG });
// DONE - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
      /*case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          from:action.payload.type === 'from' &&,
          to: action.payload.type === 'to' &&,
        }
        //FINISH IT CARYCA
      };*/
    /*case CHANGE_TAG:
      return {
        ...statePart,
        //FINISH IT CARYCA
      };*/
    // TODO - handle other action types
    default:
      return statePart;
  }
}
