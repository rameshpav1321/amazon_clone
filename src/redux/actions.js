import * as types from "./actionType";
import { auth } from "../utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const addToBasket = (item) => ({
  type: types.ADD_TO_BASKET,
  payload: item,
});

export const removeFromCart = (id) => ({
  type: types.REMOVE_FROM_CART,
  payload: id,
});

// action for register
const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});
const registerError = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});
// action for login

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});
const loginError = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

// action for logout

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});
const logoutError = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

// register dispatcher
export const registerInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerError(error.message)));
  };
};

// login dispatcher
export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginError(error.message)));
  };
};

// logout dispatcher
export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => {
        dispatch(logoutSuccess());
      })
      .catch((error) => dispatch(logoutError(error.message)));
  };
};
