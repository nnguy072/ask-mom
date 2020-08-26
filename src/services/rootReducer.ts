import { combineReducers } from '@reduxjs/toolkit'
import Auth_Reducer from "./auth";

const rootReducer = combineReducers({
  Auth: Auth_Reducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer