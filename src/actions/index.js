import axios from 'axios';
// import Constants from '../constants/index';

export function getFollowers( { user1, user2 }) {
  const API_URL = "http://knomatic-twitter.herokuapp.com/users";
  const url = `${API_URL}?user1=${user1}&user2=${user2}`;
  const result = axios.get(url);
  const request = {followers:[1,2,3,4], friends:[1,2]}; // complement api request

  console.log(result, url);

  return {
      type: 'GET_FOLLOWERS',
      users: request
  }
}

export function userSelected(user) {
  return {
      type: 'USER_SELECTED',
      user: user
  }
}
