import axios from 'axios';
import {
  GET_POSTS,
  GET_POST_DETAIL,
  GET_MY_POSTS,
  UPLOAD_POST
} from './types/types';
import { POST_SERVER } from '../components/Config.js';

export function getPosts() {
  const request = axios.get(`${POST_SERVER}/getPosts`)
    .then(response => response.data);
    
  return {
    type: GET_POSTS,
    payload: request
  }
}

export function getPostDetail(id) {
  const request = axios.post(`${POST_SERVER}/getPostDetail`, id)
    .then(response => response.data);
    
  return {
    type: GET_POST_DETAIL,
    payload: request
  }
}

export function getMyPosts(id) {
  const request = axios.post(`${POST_SERVER}/getMyPosts`, id)
    .then(response => response.data);
    
  return {
    type: GET_MY_POSTS,
    payload: request
  }
}

export function uploadPost(dataToSubmit) {
  const request = axios.post(`${POST_SERVER}/uploadPost`, dataToSubmit)
    .then(response => response.data);
    
  return {
    type: UPLOAD_POST,
    payload: request
  }
}