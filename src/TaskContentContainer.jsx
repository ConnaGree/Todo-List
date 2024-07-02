import React from 'react'
import TaskItem from './TaskItem'
import free from '../src/assets/free.png'

const TaskContentContainer = ({taskItems, setTaskItems}) => {
  return (
    <div>

        {taskItems.length === 0 ? <p className='text-center'><img src={free} alt="Free" /> No tasks so far...</p> : 
        taskItems.map((taskItem, index) => (
          <TaskItem key={index} taskItems={taskItems} setTaskItems={setTaskItems} taskItem={taskItem}/>
      ))}
    </div>
  )
}

export default TaskContentContainer