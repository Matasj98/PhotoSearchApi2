export const initialState = {
  term: ""
};

/**
 * Term is empty string because Term value is used for input in SearchBar,
 * null works too but it's bad practice
 */

export const searchTerm = (state = initialState, action) => {
  switch (action.type) {
    case "setSearchTerm":
      return {
        ...state,
        term: action.term
      };

    default:
      return state;
  }
};
