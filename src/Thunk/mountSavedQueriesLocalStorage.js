import { setSavedQueries } from "../Actions/setSavedQueries";
/**
 * It mounts query from localStorage
 */
export const mountSavedQueriesLocalStorage = () => dispatch => {
  if (localStorage.getItem("savedQueries") !== null) {
    dispatch(setSavedQueries(JSON.parse(localStorage.getItem("savedQueries"))));
  }
};
