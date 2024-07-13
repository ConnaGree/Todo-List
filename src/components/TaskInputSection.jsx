import { useContext } from "react";
import { TaskContext } from "../TaskContext";
import { GoPlus } from "react-icons/go";

const TaskInputSection = () => {
    const {
      inputTaskItem,
      priority,
      setInputTaskItem,
      setPriority,
      setDueDate,
      handleAddTaskItem,
    } = useContext(TaskContext);

  return (
    <div>
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
    </div>
  );
}
export default TaskInputSection