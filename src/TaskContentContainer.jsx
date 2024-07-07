import React from "react";
import TaskItem from "./TaskItem";
import { Reorder } from "framer-motion";

const TaskContentContainer = ({ taskItems, setTaskItems, onEditTask }) => {
  return (
    <div>
      <Reorder.Group values={taskItems} onReorder={setTaskItems}>
        {taskItems.length === 0 ? (
          <p className="text-center">No tasks so far...</p>
        ) : (
          taskItems.map((taskItem) => (
            <Reorder.Item value={taskItem} key={taskItem.id}>
              <TaskItem
                taskItems={taskItems}
                onEditTask={onEditTask}
                setTaskItems={setTaskItems}
                taskItem={taskItem}
              />
            </Reorder.Item>
          ))
        )}
      </Reorder.Group>
    </div>
  );
};

export default TaskContentContainer;
