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
  collect : [ { id:'',  name:'', timeToBegin:'',  timeToFinish:'', completed:false  },]
}

export const collectSlice = createSlice({
  name: 'collects',
  
  initialState,
  reducers: {
    addDriver(state,action){
      state.collect.push(action.payload)
    }

    
  },
})

export const {  } = collectSlice.actions


export const selectCount = (state: RootState) => state.counter.value

export default collectSlice.reducer