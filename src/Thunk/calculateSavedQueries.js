import { setSavedQueries } from "../Actions/setSavedQueries";
import { saveQueriesLocalStorage } from "../helpers/saveQueriesLocalStorage";

/*
  check if savedQuery array has term which is entered, if yes term is not added
  if term isn't found it's added to query.
*/
export const calculateSavedQueries = () => (dispatch, getState) => {
  let found = false;
  const term = getState().searchTerm.term;
  const copySavedQueries = [...getState().savedQueries.savedQueries];
  for (let i = 0; i < copySavedQueries.length; i++) {
    if (term === copySavedQueries[i]) {
      found = true;
      break;
    }
  }
  /*
    if term wasnt found and term isn't empty we save it to Redux reducer and to local storage whole query
    we push new term to query copy which was defined above and send that copy which has new term.
  */
  if (found === false && term.length !== 0) {
    copySavedQueries.push(term);
    dispatch(setSavedQueries(copySavedQueries));
    saveQueriesLocalStorage(copySavedQueries);
  }
};
