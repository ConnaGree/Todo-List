import { useState, useEffect } from 'react';
import { GoPlus } from 'react-icons/go';
import TaskContentContainer from './TaskContentContainer';
import EditModal from './EditModal';
import './App.css';

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [inputTaskItem, setInputTaskItem] = useState('');
  const [priority, setPriority] = useState('Low');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [dueDate, setDueDate] = useState('No Due Date')

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('toDoItems'));
    if (storedData) {
      setTaskItems(storedData);
    }
  }, []);

  useEffect(() => {
    if (taskItems.length > 0) {
      localStorage.setItem('toDoItems', JSON.stringify(taskItems));
    }
  }, [taskItems]);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    return `${day} - ${month} - ${year}`;
  };

  const handleAddTaskItem = () => {
    const newTask = {
      id: Date.now(),
      value: inputTaskItem,
      priority: priority,
      checked: false,
      date: `${new Date().getDate()} - ${new
        Date().getMonth() + 1
      } - ${new Date().getFullYear()}`,
      dueDate: dueDate,
    };

    if (newTask.value === '') return

    setTaskItems([...taskItems, newTask]);
    setInputTaskItem('');
    setPriority('low');
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setIsEditModalOpen(true);
  };

  const handleSaveTask = () => {
    const updatedTasks = taskItems.map((item) =>
      item.id === currentTask.id ? currentTask : item
    );
    setTaskItems(updatedTasks);
    setIsEditModalOpen(false);
    setCurrentTask(null);
  };

  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
    setCurrentTask(null);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = taskItems.filter((item) => item.id !== id);
    setTaskItems(updatedTasks);
  };

  const handleToggleTask = (id) => {
    const updatedTasks = taskItems.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTaskItems(updatedTasks);
  };

  return (
    <main>
      <header>
        <label
          className="flex flex-wrap justify-between items-center gap-[1rem]"
          htmlFor=""
        >
          <input
            value={inputTaskItem}
            onChange={(e) => setInputTaskItem(e.target.value)}
            type="text"
            className="flex-1 px-[2rem] py-[1rem] border-[1px] bg-[#212733]"
            placeholder="Type in your upcoming tasks..."
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="px-[2rem] text-[.9rem] py-[1rem] border-[1px] bg-[#212733]"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="date"
            className="px-[2rem] py-[1rem] text-[.9rem] border-[1px] bg-[#212733]"
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button
            onClick={handleAddTaskItem}
            className="w-full flex items-center justify-center py-[1rem] px-[1rem] bg-blue-600 text-white text-[1.5rem] font-[700]"
          >
            <GoPlus />
          </button>
        </label>
      </header>
      <div className="tasks__container mt-[1rem]">
        <TaskContentContainer
          taskItems={taskItems}
          setTaskItems={setTaskItems}
          onEditTask={handleEditTask}
        />
      </div>
      {isEditModalOpen && (
        <EditModal
          task={currentTask}
          taskItems={taskItems}
          setTaskItems={setTaskItems}
          onCancel={handleCancelEdit}
          onChange={setCurrentTask}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      )}
    </main>
  );
}

export default App;
