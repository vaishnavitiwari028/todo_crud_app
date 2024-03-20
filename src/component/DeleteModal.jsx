import React from "react";

function DeleteModal({ showDeleteModal, setShowDeleteModal, confirmDeleteItem }) {
  return (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this todo?</p>
            <div className="flex mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={confirmDeleteItem}
              >
                Yes
              </button>
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md ml-2"
                onClick={() => setShowDeleteModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>    
  );
}

export default DeleteModal;
