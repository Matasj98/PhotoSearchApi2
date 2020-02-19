const initialState = {
  term: null
};

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
