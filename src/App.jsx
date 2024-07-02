import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoPlus } from "react-icons/go";
import TaskContentContainer from './TaskContentContainer';

function App() {
  const [taskItems, setTaskItems] = useState([])
  const [inputTaskItem, setInputTaskItem] = useState('')

  // getting the data from the local storage when the page reload
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("toDoItems"))
    setTaskItems(storedData)
  }, [])

  // load the data to the local storage when the page loads
  useEffect(() => {
    if (taskItems.length > 0) {
      localStorage.setItem("toDoItems", JSON.stringify(taskItems))
    }
  }, [taskItems])


  const handleAddTaskItem = () => {
    const newTask = {
      id: Date.now(),
      value: inputTaskItem,
      checked: false,
    }

    setTaskItems([...taskItems, newTask])
    setInputTaskItem('')

  }

  return (
    <main>
      <header>
        <label className='flex items-center gap-[1rem]' htmlFor="">
          <input value={inputTaskItem} onChange={(e) => setInputTaskItem(e.target.value)} type="text" className='flex-1 px-[2rem] py-[1rem] border-[1px]'/>
          <button onClick={handleAddTaskItem} className='py-[1rem] px-[1rem] bg-blue-600 text-white text-[1.2rem]'><GoPlus /></button>
        </label>
      </header>
      <div className="tasks__container mt-[1rem]">
        <TaskContentContainer taskItems={taskItems} setTaskItems={setTaskItems}/>
      </div>
    </main>
  )
}

export default App
