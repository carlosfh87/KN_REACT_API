import axios from 'axios';
import * as types from './types';

export function getFollowers( { user1, user2 }) {
  let axios_instance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT",
      "Access-Control-Allow-Headers": "X-Requested-With"
    }
  });

  const API_URL = "http://knomatic-twitter.herokuapp.com/users";
  const url = `${API_URL}?user1=${user1}&user2=${user2}`;
  const result = axios_instance.get(url);
  // const request = {followers:[1,2,3,4], friends:[1,2]}; // api request format

  return {
      type: types.GET_FOLLOWERS,
      payload: result
  }
}

export function userSelected(user) {
  return {
      type: types.USER_SELECTED,
      payload: user
  }
}

export function showLoader(show) {
  return {
      type: types.SHOW_LOADER,
      payload: show
  }
}
