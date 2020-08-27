import { AppThunk } from './../store';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from 'axios';
import { TOKEN } from "../constants";
import setAuthToken from "../utils/setAuthToken";

type AuthState = {
  token: string;
  isAuthenticated: boolean;
	loading: boolean,
	user: any
}

let initialState: AuthState = {
  token: localStorage.getItem(TOKEN) ?? "",
  isAuthenticated: false,
	loading: true,
	user: null
};

// a lot of repeats in this can't figure out syntax to not do repeats
const authSlice = createSlice({
  name: 'Auth',
  initialState: initialState,
  reducers: {
    handleLoadUser: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    handleLogin: (state, action: PayloadAction<{token: string}>) => {
      localStorage.setItem(TOKEN, action.payload.token);
      state.isAuthenticated = true;
      state.loading = false;
    },
    handleLogout: (state) => {
      localStorage.removeItem(TOKEN);
      state.token = "";
      state.isAuthenticated = false;
      state.loading = false;
    }
  }
});

export const { handleLoadUser, handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer

// not sure where to put all of these
export const loadUser = (): AppThunk => async dispatch => {
  if (localStorage.token)
		setAuthToken(localStorage.token);

  try {
    const res = await axios.get('https://devconnector-server.herokuapp.com/api/auth');
    dispatch(handleLoadUser(res.data));
  }
  catch {
    dispatch(handleLogout());
  }
};

export class RegisterUserModel {
  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}
}

export const register = (command: RegisterUserModel): AppThunk => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } };

  const body = JSON.stringify(command);

  try {
    const res = await axios.post(
      'https://devconnector-server.herokuapp.com/api/users',
      body,
      config
    );
    
    dispatch(handleLogin(res.data));

    dispatch(loadUser());
  }
  catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      // TODO: implement this later
      // errors.forEach((error: any) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(handleLogout());
  }
};

export class LoginModel {
  constructor(
    public email: string,
    public password: string
  ) {}
}

export const login = (command: LoginModel): AppThunk => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } };

	const body = JSON.stringify(command);

	try {
		const res = await axios.post(
			'https://devconnector-server.herokuapp.com/api/auth',
			body,
			config
    );
    
		dispatch(handleLogin(res.data));

		dispatch(loadUser());
	} catch (err) {
    debugger;
    
		const errors = err.response.data.errors;
    
    if (errors) {
      // TODO: implement this 
			// errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch(handleLogout());
	}
}

export const logout = (): AppThunk => dispatch => {
	dispatch(handleLogout());
};