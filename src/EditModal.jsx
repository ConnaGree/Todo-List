const priorities = ["Low", "Medium", "High"];


const EditModal = ({ task, onCancel, taskItems, setTaskItems, setIsEditModalOpen }) => {
    const updatedItems = [...taskItems];


    const handleInputUpdate = (e) => {
        const ItemToBeUpdated = updatedItems.indexOf(task);
        updatedItems[ItemToBeUpdated].value = e.target.value;
        setTaskItems(updatedItems);
    }

    const handlePriorityUpdate = (e) => {
      const ItemToBeUpdated = updatedItems.indexOf(task);
      updatedItems[ItemToBeUpdated].priority = e.target.value;
      setTaskItems(updatedItems);
    };

    const handleDateUpdate = (e) => {
        const ItemToBeUpdated = updatedItems.indexOf(task);
        updatedItems[ItemToBeUpdated].dueDate = e.target.value;
        setTaskItems(updatedItems);
    }

    const handleUpdate = () => {
        setIsEditModalOpen(false);
    }
  return (
    <div className="fixed z-[1000] bg-black flex items-center justify-center top-0 left-0 backdrop-blur-xl opacity-[90%] w-full h-full">
      <div className="edit__field flex flex-col bg-[#000000] opacity-100 p-[4rem] rounded-[1rem]">
        <h1 className="mb-[2rem] text-[2rem]">Edit Task</h1>
        <div className="flex gap-5">
          <input
            className="px-[2rem] py-[1rem] border-[1px] text-white bg-[#212733]"
            type="text"
            value={task.value}
            onChange={handleInputUpdate}
          />
          <select
            onChange={handlePriorityUpdate}
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
            value={task.dueDate}
            onChange={handleDateUpdate}
          />
        </div>

        <button
          onClick={handleUpdate}
          className="update my-[1rem] px-[1rem] py-[.8rem] bg-green-500 text-white"
        >
          Save Changes
        </button>
        <button
          onClick={onCancel}
          className="cancel px-[1rem] py-[.8rem] border-[2px] border-[#fff] text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default EditModal;
