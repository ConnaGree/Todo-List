import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

const TaskProvider = ({children}) => {
    const [taskItems, setTaskItems] = useState([]);
    const [inputTaskItem, setInputTaskItem] = useState("");
    const [priority, setPriority] = useState("Low");
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [dueDate, setDueDate] = useState("No Due Date");
    const updatedItems = [...taskItems];

     useEffect(() => {
       const storedData = JSON.parse(localStorage.getItem("toDoItems"));
       if (storedData) {
         setTaskItems(storedData);
       }
     }, []);

     useEffect(() => {
       if (taskItems.length > 0) {
         localStorage.setItem("toDoItems", JSON.stringify(taskItems));
       }
     }, [taskItems]);

     const handleAddTaskItem = () => {
       const newTask = {
         id: Date.now(),
         value: inputTaskItem,
         priority,
         checked: false,
         date: `${new Date().getDate()} - ${
           new Date().getMonth() + 1
         } - ${new Date().getFullYear()}`,
         dueDate,
       };


       if (newTask.value === "") return;

       setTaskItems([...taskItems, newTask]);
       setInputTaskItem("");
       setPriority("Low");
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

     const handleDeleteTask = (taskItem) => {
       const updatedTasks = taskItems.filter((item) => item !== taskItem);
       setTaskItems(updatedTasks);
     };

     const handleToggleTask = (id) => {
       const updatedTasks = taskItems.map((item) =>
         item.id === id ? { ...item, checked: !item.checked } : item
       );
       setTaskItems(updatedTasks);
     };

      const handleInputUpdate = (e) => {
        const ItemToBeUpdated = updatedItems.indexOf(currentTask);
        updatedItems[ItemToBeUpdated].value = e.target.value;
        setTaskItems(updatedItems);
      };

      const handlePriorityUpdate = (e) => {
        const ItemToBeUpdated = updatedItems.indexOf(currentTask);
        updatedItems[ItemToBeUpdated].priority = e.target.value;
        setTaskItems(updatedItems);
      };

      const handleDateUpdate = (e) => {
        const ItemToBeUpdated = updatedItems.indexOf(currentTask);
        updatedItems[ItemToBeUpdated].dueDate = e.target.value;
        setTaskItems(updatedItems);
      };

     return (
       <TaskContext.Provider
         value={{
           taskItems,
           inputTaskItem,
           priority,
           isEditModalOpen,
           currentTask,
           dueDate,
           setTaskItems,
           setInputTaskItem,
           setPriority,
           setIsEditModalOpen,
           setCurrentTask,
           setDueDate,
           handleAddTaskItem,
           handleEditTask,
           handleSaveTask,
           handleCancelEdit,
           handleDeleteTask,
           handleToggleTask,
           handleInputUpdate,
           handlePriorityUpdate,
           handleDateUpdate,
         }}
       >
         {children}
       </TaskContext.Provider>
     );
}

export default TaskProvider;