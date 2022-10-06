export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const userState = {
  login: true,
};

const UserReducer = (state: any = userState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: true,
      };
    case LOGOUT:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
