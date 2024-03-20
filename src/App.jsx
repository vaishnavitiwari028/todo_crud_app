import React, { useState } from "react";
import TodoList from "./component/TodoList";
import EditModal from "./component/EditModal";
import DeleteModal from "./component/DeleteModal";
import SelectedTodoDetails from "./component/SelectedTodo";



function App() {
  const [item, setItem] = useState("");
  const [timing, setTiming] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [todos, setTodos] = useState([
    { id: 1, title: "Morning Walk", timing: "10:00 AM", description: "Description 1" },
    { id: 2, title: "office Work", timing: "11:00 AM", description: "Description 2" },
    { id: 3, title: "Meeting", timing: "12:00 PM", description: "Description 3" }
  ]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleItem = (e) => {
    setItem(e.target.value);
  };

  const handleTiming = (e) => {
    setTiming(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddItems = () => {
    if (item.trim() !== "") {
      if (editIndex !== null) {
        const newTodos = [...todos];
        newTodos[editIndex] = { id: todos[editIndex].id, title: item, timing: timing, description: description };
        setTodos(newTodos);
        setEditIndex(null);
        setShowEditModal(false); 
      } else {
        const newTodo = {
          id: todos.length + 1,
          title: item,
          timing: timing,
          description: description
        };
        setTodos([...todos, newTodo]);
      }
      setItem("");
      setTiming("");
      setDescription("");
    } else {
      alert("Please Write something");
    }
  };

  const handleDeleteItem = (index) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  const confirmDeleteItem = () => {
    const newTodos = todos.filter((_, index) => index !== deleteIndex);
    setTodos(newTodos);
    setShowDeleteModal(false); 
  };

  const handleEditItem = (index) => {
    setItem(todos[index].title);
    setTiming(todos[index].timing);
    setDescription(todos[index].description);
    setEditIndex(index);
    setShowEditModal(true);
  };

  const handleSelectTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const handleEditTodo = (id) => {
    const editedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, title: item, timing: timing, description: description };
      }
      return todo;
    });
    setTodos(editedTodos);
    setItem("");
    setTiming("");
    setDescription("");
    setSelectedTodo(null);
  };

  const handleRemoveTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
    setSelectedTodo(null);
  };

  return (
    <div className="bg-black min-h-screen flex flex-row p-10">
     <TodoList
        todos={todos}
        item={item}
        handleItem={handleItem}
        timing={timing}
        handleTiming={handleTiming}
        description={description}
        handleDescription={handleDescription}
        handleAddItems={handleAddItems}
        selectedTodo={selectedTodo}
        handleSelectTodo={handleSelectTodo}
        handleEditItem={handleEditItem}
        handleDeleteItem={handleDeleteItem}
      />
      <SelectedTodoDetails selectedTodo={selectedTodo} />
      {showEditModal && (
        <EditModal
          item={item}
          timing={timing}
          description={description}
          handleItem={handleItem}
          handleTiming={handleTiming}
          handleDescription={handleDescription}
          handleAddItems={handleAddItems}
          setShowEditModal={setShowEditModal}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          confirmDeleteItem={confirmDeleteItem}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
    </div>
  );
}

export default App;