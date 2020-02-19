import { setSavedQueries } from "../Actions/setSavedQueries";
import { saveQueriesLocalStorage } from "../helpers/saveQueriesLocalStorage";
/**
 * Removes selected query from query list and saved new query
 * also call function to update data in localStorage
 */
export const removeQueryItem = term => (dispatch, getState) => {
  const copySavedQueries = [...getState().savedQueries.savedQueries];
  const index = copySavedQueries.indexOf(term);
  copySavedQueries.splice(index, 1);
  dispatch(setSavedQueries(copySavedQueries));
  saveQueriesLocalStorage(copySavedQueries);
};
