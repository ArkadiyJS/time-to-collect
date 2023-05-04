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
  collect : [ { id:'1',  name:'1', timeToBegin:'1',  timeToFinish:'1', completed:false  },
{ id:'2',  name:'2', timeToBegin:'2',  timeToFinish:'2', completed:false  },
{ id:'3',  name:'3', timeToBegin:'3',  timeToFinish:'3', completed:false  },
{ id:'4',  name:'4', timeToBegin:'4',  timeToFinish:'4', completed:false  },]
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