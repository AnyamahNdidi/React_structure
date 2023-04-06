import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import {userInfo, } from "../../types"

const initialState = {
     user: {} as userInfo
}

const Reducer = createSlice({
  name: "second",
  initialState,
    reducers: {
      
        saveUser: (state:any, {payload}: PayloadAction<userInfo>) => {
            state.user = payload
        }
  }
});

export const {
    saveUser
} = Reducer.actions

export default Reducer.reducer