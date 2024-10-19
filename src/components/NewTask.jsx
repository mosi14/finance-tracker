import React, { useState } from 'react';

const NewTask = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);  // Call the parent's function to add the task
            setTask('');    // Clear the input field after adding the task
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-3 mb-6">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter new task"
                className="flex-grow p-2 border border-gray-300 rounded"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Add Task
            </button>
        </form>
    );
};

export default NewTask;