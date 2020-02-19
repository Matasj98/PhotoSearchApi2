const initialState = {
  savedQueries: []
};

export const savedQueries = (state = initialState, action) => {
  switch (action.type) {
    case "setSavedQueries":
      return {
        ...state,
        savedQueries: action.savedQueries
      };
    default:
      return state;
  }
};
