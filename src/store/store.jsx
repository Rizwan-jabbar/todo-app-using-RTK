import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../components/slices/userSlice/userSlice'
import  taskReducer  from '../components/slices/userSlice/taskSlice/taskSlice'

export const store = configureStore({
    reducer : {
        users : userReducer,
        allTasks : taskReducer
    }
})