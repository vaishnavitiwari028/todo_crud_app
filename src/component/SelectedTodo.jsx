import React from "react";

function SelectedTodoDetails({ selectedTodo }) {
  return (
    <div className="flex-1">
 <div className="mt-4 ml-20 flex flex-col items-center justify-center gap-20 border border-solid py-10 mx-20">
          <h2 className="text-xl font-bold text-white">Selected Todo</h2>
          {selectedTodo && (
            <div className="text-white flex flex-col gap-4">
              <p>Timing: {selectedTodo.timing}</p>
              <p>Description: {selectedTodo.description}</p>
            </div>
          )}
        </div>    </div>
  );
}

export default SelectedTodoDetails;
