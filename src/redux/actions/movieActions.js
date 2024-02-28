import axios from "axios";
import { ActionTypes } from "../actionTypes";
import { options } from "../../constants";

export const getPopular = () => (dispatch) => {
  //yüklenme durumunu reducer a bildir
  dispatch({
    type: ActionTypes.MOVIES_LOADING,
  });
  //api dan popüler filmleri al
  axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    //başarılı olursa reducer a bildir
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVIES_SUCCESS,
        payload: res.data.results,
      })
    )
    //başarısız olursa reducer abildir
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVIES_ERROR,
        payload: err.message,
      })
    );
};
