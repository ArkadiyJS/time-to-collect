import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


interface CollectState {
  collect: {
    id: string;
    name: string;
    timeToBegin: string;
    timeToFinish: string;
    completed:boolean;
}[]
}


const initialState: CollectState = {
  collect : [ ]
}

export const collectListSlice = createSlice({
  name: 'collect',
  
  initialState,
  reducers: {
    addDriver(state,action){
      state.collect.push(action.payload)
    }

    
  },
})

export const { addDriver } = collectListSlice.actions


export const selectCollect = (state: RootState) => state.collectListSlice.collect

export default collectListSlice.reducer