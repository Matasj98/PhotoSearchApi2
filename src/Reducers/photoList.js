const initialState = {
  photoList: null
};

export const photoList = (state = initialState, action) => {
  switch (action.type) {
    case "setPhotoList":
      return {
        ...state,
        photoList: action.photoList
      };
    default:
      return state;
  }
};
