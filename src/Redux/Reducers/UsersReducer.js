import { REPLACE_USERS_DATA, SET_USER_INPUT } from '../Constants/UsersConstant';

const initialState = {
  input: "",
  users: []
};


const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPLACE_USERS_DATA: {
      return {
        ...state,
        users: action.payload.data
      }
    }
    case SET_USER_INPUT: {
      return {
        ...state,
        input: action.payload.input
      }
    }
    default: {
      return state
    }
  }
};

export default UsersReducer;