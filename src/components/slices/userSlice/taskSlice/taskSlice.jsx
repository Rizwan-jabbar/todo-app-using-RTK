import { createSlice } from "@reduxjs/toolkit";
const allTasks =  localStorage.getItem('allTasks') ? JSON.parse(localStorage.getItem('allTasks')) : []


export const TaskSlice = createSlice({
    name : 'tasks',
    initialState : allTasks,

    reducers : {
        addTask : (state , action) => {
            const newTask = action.payload
            state.push(newTask)
            localStorage.setItem('allTasks' , JSON.stringify(state))
        },

        deleteTask : (state , action) => {
            const delTask = action.payload
            const index = state.findIndex((task) => task.id === delTask.id)
            if(index !== -1){
                state.splice(index , 1)
                localStorage.setItem('allTasks' , JSON.stringify(state))
            }
        },

        updateTask : (state , action) => {
            const {id , task} = action.payload
            const index = state.findIndex(task => task.id === id)
            if(index !== -1){
                state[index].task = task;
                localStorage.setItem('allTasks' , JSON.stringify(state))
            }
        }
        
    }
})

export const {addTask , deleteTask , updateTask} = TaskSlice.actions
export default TaskSlice.reducer