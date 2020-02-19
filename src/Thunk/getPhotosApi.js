import axios from "axios";
import { setPhotoList } from "../Actions/setPhotoList";
/**
 * I use async to track when data is received from API or it's failed
 * If data is still fetching I set photoList to "Loading" which outputs spinner if "Error" it outputs 
 * fail message
 */
export const getPhotosApi = () => {
  return async (dispatch, getState) => {
    const success = connection => {
      dispatch(setPhotoList(connection.data.results));
      return success;
    };
    const error = err => {
      dispatch(setPhotoList("error"));
      console.log(err);
      return error;
    };
    try {
      dispatch(setPhotoList("Loading"));
      const connection = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: getState().searchTerm.term },
          headers: {
            Authorization:
              "Client-ID c2c1213b2926687ccb49f712386ddba8815b841153dd247b26b4de79efea9fea"
          }
        }
      );
      return success(connection);
    } catch (err) {
      return error(err);
    }
  };
};
