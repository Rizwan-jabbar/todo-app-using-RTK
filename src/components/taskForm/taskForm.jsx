import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask } from "../slices/userSlice/taskSlice/taskSlice"
import TaskUi from "../taskUi/taskUi"


function TaskForm () {
    const [task , setTask] = useState('')
    // const allTasks = useSelector(state => state.allTasks)
    const dispatch = useDispatch()

    const loginUser = useSelector(state => state.users.loginUser)
    console.log('login user from task page : ' , loginUser);
    

    const handlechange =(e) => {
       setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask({task , addedBY : loginUser.email}))
    }

    return (
        <>

        <div className="mt-5 flex flex-col items-center ">
            <div className="bg-gray-300 p-4 rounded-md">
            <h3 className="mb-4 text-blue-800">add your task here</h3>
            <form action="" className="flex justify-between gap-4 items-center" onSubmit={handleSubmit}>
                <div className="">
                    <input type="text"
                    name="task"
                    value={task.task}
                    onChange={handlechange}
                     className="border border-gray-400 p-1 rounded-md w-auto" />
                </div>
                <div className="">
                    <button className="bg-green-700 px-5 py-1 rounded-md text-white">add</button>
                </div>
            </form>
            </div>
        </div>

        <TaskUi/>
        
        </>
    )
}

export default TaskForm