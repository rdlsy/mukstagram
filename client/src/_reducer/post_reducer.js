import {
  GET_POSTS,
  GET_POST_DETAIL,
  UPLOAD_POST
} from '../_action/types/types';


export default function post(state = {}, action){
  switch(action.type){
    case GET_POSTS:
      return { ...state, posts: action.payload }
    case GET_POST_DETAIL:
      return { ...state, postDetail: action.payload }
    case UPLOAD_POST:
      return { ...state, uploadPost: action.payload }
    default:
      return state;
  }
}
