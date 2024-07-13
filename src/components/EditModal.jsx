import { TaskContext } from "../TaskContext";
import { useContext } from "react";

const priorities = ["Low", "Medium", "High"];


const EditModal = () => {
    const {
      handleCancelEdit,
      handleInputUpdate,
      handlePriorityUpdate,
      handleDateUpdate,
      handleSaveTask,
      isEditModalOpen,
      currentTask
    } = useContext(TaskContext);

    
    if (!isEditModalOpen) return null;

  return (
    <div className="fixed z-[1000] bg-black flex items-center justify-center top-0 left-0 backdrop-blur-xl opacity-[90%] w-full h-full">
      <div className="edit__field flex flex-col bg-[#000000] opacity-100 p-[4rem] rounded-[1rem]">
        <h1 className="mb-[2rem] text-[2rem]">Edit Task</h1>
        <div className="flex gap-5">
          <input
            className="px-[2rem] py-[1rem] border-[1px] text-white bg-[#212733]"
            type="text"
            value={currentTask.value}
            onChange={(e)=>handleInputUpdate(e)}
          />
          <select
            onChange={(e)=>handlePriorityUpdate(e)}
            className="priority bg-[#212733] px-[2rem] border-[1px] py-[1rem]"
          >
            {priorities.map((priority, index) => (
              <option value={priority} key={index}>
                {priority}
              </option>
            ))}
          </select>
          <input
            type="date"
            className="px-[2rem] py-[1rem] border-[1px] bg-[#212733]"
            value={currentTask.dueDate}
            onChange={handleDateUpdate}
          />
        </div>

        <button
          onClick={handleSaveTask}
          className="update my-[1rem] px-[1rem] py-[.8rem] bg-green-500 text-white"
        >
          Save Changes
        </button>
        <button
          onClick={handleCancelEdit}
          className="cancel px-[1rem] py-[.8rem] border-[2px] border-[#fff] text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default EditModal;
