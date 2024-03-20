import React from "react";

function EditModal({ showEditModal, setShowEditModal, item, timing, description, handleItem, handleTiming, handleDescription, handleAddItems }) {
  return (
    <div>
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl mb-4">Edit Todo</h2>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
              value={item}
              onChange={handleItem}
            />
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
              value={timing}
              onChange={handleTiming}
            />
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
              value={description}
              onChange={handleDescription}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleAddItems}
            >
              Update
            </button>
            <button
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md ml-2"
              onClick={() => setShowEditModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>    </div>
  );
}

export default EditModal;
