import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name:'user',
    initialState:{
        data:[],
        data2:[],
        data3:[],
        data4:[],
        data5:[],
        data6:[],
        data7:[],
        data8:[],
        data9:[],
        data10:[],
        data11:[],
        data12:[],
        data13:[],
        data14:[],
        data15:[],

    },
    reducers:{
        addUser(state,action){
            state.data.push(action.payload)
        },
        addUser2(state,action){
              state.data2.push(action.payload)
        },
        addUser3(state,action){
            state.data3.push(action.payload)
      },
      addUser4(state,action){
        state.data4.push(action.payload)
  },
       addUser5(state,action){
       state.data5.push(action.payload)
},
        addUser6(state,action){
         state.data6.push(action.payload)
},
         addUser7(state,action){
         state.data7.push(action.payload)
},
          addUser8(state,action){
           state.data8.push(action.payload)
},
          addUser9(state,action){
           state.data9.push(action.payload)
},
            addUser10(state,action){
             state.data10.push(action.payload)
},
addUser11(state,action){
    state.data11.push(action.payload)
},
 addUser12(state,action){
    state.data12.push(action.payload)
},
 addUser13(state,action){
    state.data13.push(action.payload)
},
 addUser14(state,action){
    state.data14.push(action.payload)
},
 addUser15(state,action){
    state.data15.push(action.payload)
},

    }
})

export const {addUser} = UserSlice.actions
export const {addUser2} = UserSlice.actions
export const {addUser3} = UserSlice.actions
export const {addUser4} = UserSlice.actions
export const {addUser5} = UserSlice.actions
export const {addUser6} = UserSlice.actions
export const {addUser7} = UserSlice.actions
export const {addUser8} = UserSlice.actions
export const {addUser9} = UserSlice.actions
export const {addUser10} = UserSlice.actions
export const {addUser11} = UserSlice.actions
export const {addUser12} = UserSlice.actions
export const {addUser13} = UserSlice.actions
export const {addUser14} = UserSlice.actions
export const {addUser15} = UserSlice.actions

export default UserSlice.reducer
