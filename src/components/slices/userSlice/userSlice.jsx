import { createSlice } from "@reduxjs/toolkit";

const registerdUser = localStorage.getItem('registeredUsers') ? JSON.parse(localStorage.getItem('registeredUsers')) : [];
const loginsUser = localStorage.getItem('loginUser') ? JSON.parse(localStorage.getItem('loginUser')) : null
export const UserSlice = createSlice({
    name : 'users',
    initialState : {
        registeredUsers : registerdUser,
        loginUser : loginsUser,
        error : null,
        success : null
    },

    reducers : {
        register : (state , action) => {
            const {email , password } = action.payload.user

            const checkEmail = state.registeredUsers.find(u => u.email === email)
            if(checkEmail){
                state.error = 'email is already exists !'
                state.success = null
                return
            }

            if(password.length < 8){
                state.error = 'password can not be less then 8'
                state.success = null
                return;
            }

            state.registeredUsers.push(action.payload.user)
            state.error = null 
            state.success = 'user registered successfull !'
            localStorage.setItem('registeredUsers' , JSON.stringify(state.registeredUsers))
        },

        login : (state  , action) => {
            const {email , password} = action.payload.user
            const confirmUser = state.registeredUsers.find((user) => user.email === email && user.password === password)

            if(confirmUser){
                state.loginUser = confirmUser
                state.error = null
                state.success = 'user login successFull'    
                localStorage.setItem('loginUser' , JSON.stringify(state.loginUser))            
            }else{
                state.error = 'invalid credentials'
                state.loginUser = null
                state.success = null
            }
        }
    }
})

export const {register , login} = UserSlice.actions
export default UserSlice.reducer