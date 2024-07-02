import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";

const TaskItem = ({taskItem, taskItems, setTaskItems}) => {

  const handleCheck = () => {
    console.log(taskItem)
    const updatedItems = taskItems.map(item => item.id === taskItem.id ? {...taskItem, checked: !taskItem.checked} : item)
    setTaskItems(updatedItems)
  }

  const handleDelete = () => {
    console.log(taskItem)
    const updatedItems = taskItems.filter(item => item.id !== taskItem.id)
    setTaskItems(updatedItems)
  }

  return (
    <div className='flex items-center justify-between border-[1px] p-[1rem] mb-[1rem]'>
      <div className="left__section flex items-center gap-[1rem]">
          <div className="check__box w-[30px] h-[30px] border-[1px]" onClick={handleCheck}>
                {taskItem.checked ? <span className='w-full h-full bg-blue-600 p-1 flex items-center justify-center text-white'><IoCheckmarkOutline /></span> : ''}
            </div>
            <span className={`${taskItem.checked ? 'line-through text-gray-500' : ''}`}>{taskItem.value}</span>
      </div>
        <button onClick={handleDelete} className="delete__btn p-2 bg-red-500 text-white text-[1.2rem]"><GoTrash /></button>
    </div>
  )
}

export default TaskItem