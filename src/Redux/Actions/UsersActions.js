import { REPLACE_USERS_DATA, SET_USER_INPUT } from '../Constants/UsersConstant';

export const fetchGithubUserAsync = input => {
  return dispatch => {
      const url = `https://api.github.com/search/users?q=${input}&access_token=4c345b8678cd44482435fb3ec3040f6d6d40fd7d`;
      fetch(url).then(response => {
        return response.json()
      }).then(data => {
        dispatch(replaceUsersData(data.items));
      });
  }
};

export const replaceUsersData = data => {
  return {
    type: REPLACE_USERS_DATA,
    payload: {
      data
    }
  }
};

export const setUserInput = input => {
  return {
    type: SET_USER_INPUT,
    payload: {
      input
    }
  }
};