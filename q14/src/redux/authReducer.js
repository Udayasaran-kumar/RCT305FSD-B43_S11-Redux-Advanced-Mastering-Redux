import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.token) {
      dispatch({ type: LOGIN_SUCCESS, payload: data.token });
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: data.error });
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: "Login failed" });
  }
};

export const logoutUser = () => ({ type: LOGOUT });

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, user: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, isAuthenticated: false, error: action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
