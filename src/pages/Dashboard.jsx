import {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import TaskList from '../components/TaskList';
import NewTask from '../components/NewTask';

const Dashboard = () => {
    const { user, isAuthenticated } = useAuth0();
    const [tasks, setTasks] = useState([]);
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <p className="text-gray-600">You need to be logged in to view the dashboard.</p>
            </div>
        );
    }

    const addTask = (taskText) => {
        const newTask = {
            id: tasks.length + 1,
            text: taskText,
            completed: false
        };
        setTasks([...tasks, newTask]);
    };

    const toggleComplete = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const editTask = (id) => {
        const newTaskText = prompt("Edit your task:");
        if (newTaskText) {
            const updatedTasks = tasks.map(task =>
                task.id === id ? { ...task, text: newTaskText } : task
            );
            setTasks(updatedTasks);
        }
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <img src={user.picture} alt={user.name} className="rounded-full w-16 h-16"/>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Hello, {user.name || 'User'}! Welcome to your Dashboard.
                </h1>
                <p className='mb-4'>{user.email}</p>
                <p className="text-gray-600 mb-8">Manage your tasks efficiently below:</p>

                <div className="mb-8">
                    <NewTask addTask={addTask} />
                </div>

                <div>
                    <TaskList editTask={editTask}  deleteTask={deleteTask}  toggleComplete={toggleComplete} tasks={tasks} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;