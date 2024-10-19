const TaskList = ({tasks, toggleComplete, editTask, deleteTask}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            {tasks.length === 0 ? (
                <p className="text-gray-600">No tasks available.</p>
            ) : (
                <ul className="space-y-4">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleComplete(task.id)}
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span className={task.completed ? "line-through text-gray-500" : ""}>
                                     {task.text}
                                </span>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => editTask(task.id)}
                                    className="text-sm text-green-500 hover:underline"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteTask(task.id)}
                                    className="text-sm text-red-500 hover:underline"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;