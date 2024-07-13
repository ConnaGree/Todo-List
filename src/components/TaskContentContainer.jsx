import React from "react";
import TaskItem from './TaskItem'
import { Reorder } from "framer-motion";
import { useContext } from "react";
import { TaskContext } from "../TaskContext";

const TaskContentContainer = () => {
  const {taskItems, setTaskItems} = useContext(TaskContext)

  return (
    <div>
      <Reorder.Group values={taskItems} onReorder={setTaskItems}>
        {taskItems.length === 0 ? (
          <p className="text-center">No tasks so far...</p>
        ) : (
          taskItems.map((taskItem) => (
            <Reorder.Item value={taskItem} key={taskItem.id}>
              <TaskItem taskItem={taskItem} />
            </Reorder.Item>
          ))
        )}
      </Reorder.Group>
    </div>
  );
};

export default TaskContentContainer;
