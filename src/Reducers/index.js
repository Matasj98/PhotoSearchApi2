import { combineReducers } from "redux";
import { searchTerm } from "./searchTerm";
import { photoList } from "./photoList";
import { savedQueries } from "./savedQueries";

/**
 * Connect all reducers here
 * Also I always set a IF statement which checks for 'RESET_APP',
 * it's my basic setup if needed in future to reset all state.
 */
const appReducer = combineReducers({
  searchTerm,
  photoList,
  savedQueries
});

export const allReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }
  return appReducer(state, action);
};
