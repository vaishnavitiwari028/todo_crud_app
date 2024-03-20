import React from "react";

function TodoList({ todos,item,handleItem,timing,handleTiming,description,handleDescription,handleAddItems, selectedTodo, handleSelectTodo, handleEditItem, handleDeleteItem }) {
  return (
    <div className="flex-1">
    <div className="flex items-center">
      <input
        type="text"
        className="rounded-l-lg px-4 py-2 w-64 bg-gray-800 text-white border-none"
        placeholder="New todo"
        value={item}
        onChange={handleItem}
      />
      <input
        type="text"
        className="rounded-lg px-4 py-2 w-64 bg-gray-800 text-white border-none"
        placeholder="Timing"
        value={timing}
        onChange={handleTiming}
      />
      <input
        type="text"
        className="rounded-r-lg px-4 py-2 w-64 bg-gray-800 text-white border-none"
        placeholder="Description"
        value={description}
        onChange={handleDescription}
      />
      <button
        className="px-4 py-2 rounded bg-blue-500 text-white"
        onClick={ handleAddItems}
      >
         Add
      </button>
    </div>
    <div className="mt-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Timing</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr
              key={todo.id}
              className={`cursor-pointer ${selectedTodo === todo ? "bg-gray-500" : "bg-gray-200"}`}
              onClick={() => handleSelectTodo(todo)}
            >
              <td className="border px-4 py-2 text-black">{todo.id}</td>
              <td className="border px-4 py-2 text-black">{todo.title}</td>
              <td className="border px-4 py-2 text-black">{todo.timing}</td>
              <td className="border px-4 py-2 text-black">{todo.description}</td>
              <td className="border px-4 py-2 text-black">
                <button
                  className="ml-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => handleEditItem(index)}
                >
                  Edit
                </button>

                <button
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default TodoList;
