import {
  FETCH_POSTS_FULFILLED,
  FETCH_POST_FULFILLED,
  FETCH_PROFILE_FULFILLED
} from "../actions/posts";
import _ from "lodash";

const postReducer = (state = {}, action)=>{
  switch (action.type) {
    case FETCH_POSTS_FULFILLED:
      return _.mapKeys(action.payload.data.post, "_id");
    case FETCH_POST_FULFILLED:
      return { ...state, [action.payload.data._id]: action.payload.data };
    case FETCH_PROFILE_FULFILLED:
      return _.mapKeys(action.payload.data.posts, "_id");
    default:
      return state;
  }
}

export default postReducer;
