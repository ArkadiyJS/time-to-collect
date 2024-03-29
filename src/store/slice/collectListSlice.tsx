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
    },
    upDateTimeToBegin(state,action){
      state.collect.find((t)=> t.id === action.payload.id ? t.timeToBegin = action.payload.value : '' )
    },
    upDateTimeToFinish(state,action){
      state.collect.find((t)=> t.id === action.payload.id ? t.timeToFinish = action.payload.value : '' ),
      state.collect.find((t)=>t.id === action.payload.id ? t.completed = true : '')
    },

    
  },
})

export const { addDriver,upDateTimeToBegin,upDateTimeToFinish} = collectListSlice.actions


export const selectCollect = (state: RootState) => state.collectListSlice.collect

export default collectListSlice.reducer