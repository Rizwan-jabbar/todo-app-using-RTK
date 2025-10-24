import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask } from "../slices/userSlice/taskSlice/taskSlice";
import { useState } from "react";

function TaskUi() {
    const allTasks = useSelector((state) => state.allTasks);
    const loginUser = useSelector((state) => state.users.loginUser);
    const dispatch = useDispatch();
    const [taskId, setTaskId] = useState(null);
    const [editedTask, setEditedTask] = useState("");

    const currentUserTasks = allTasks.filter(
        (task) => task.addedBY === loginUser?.email
    );

    return (
        <div className="overflow-x-auto w-full mt-5 flex justify-center px-4">
            <table className="min-w-full table-auto border-collapse border border-gray-400 text-center">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="border border-gray-400 px-4 py-2">#</th>
                        <th className="border border-gray-400 px-4 py-2">Task</th>
                        <th className="border border-gray-400 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUserTasks.length > 0 ? (
                        currentUserTasks.map((task, index) => (
                            <tr key={task.id || index} className="bg-white">
                                <td className="border border-gray-400 px-4 py-2">
                                    {index + 1}
                                </td>

                                <td className="border border-gray-400 px-4 py-2 capitalize">
                                    {taskId === task.id ? (
                                        <input
                                            type="text"
                                            value={editedTask}
                                            onChange={(e) => setEditedTask(e.target.value)}
                                            className="border border-gray-400 p-1 rounded-md w-full"
                                        />
                                    ) : (
                                        task.task
                                    )}
                                </td>

                                <td className="border border-gray-400 px-4 py-2 flex gap-2 justify-center flex-wrap">
                                    {taskId === task.id ? (
                                        <button
                                            className="bg-green-600 text-white px-3 py-1 rounded-md"
                                            onClick={() => {
                                                dispatch(updateTask({ id: task.id, task: editedTask })); // ✅ Correct data format
                                                setTaskId(null)
                                            }}
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                                            onClick={() => {
                                                setTaskId(task.id);
                                                setEditedTask(task.task);
                                            }}
                                        >
                                            Edit
                                        </button>
                                    )}

                                    <button
                                        className="bg-red-600 text-white px-3 py-1 rounded-md"
                                        onClick={() => dispatch(deleteTask(task))}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="3"
                                className="border border-gray-400 px-4 py-2 text-gray-500"
                            >
                                No Tasks Available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TaskUi;
