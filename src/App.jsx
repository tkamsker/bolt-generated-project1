import React, { useState } from 'react'
    import './index.css'

    function App() {
      const [todos, setTodos] = useState([])
      const [inputValue, setInputValue] = useState('')

      const addTodo = () => {
        if (inputValue.trim()) {
          setTodos([...todos, inputValue])
          setInputValue('')
        }
      }

      const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold mb-8">Todo App</h1>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            className="p-2 border rounded mr-2 w-full max-w-md"
          />
          <button onClick={addTodo} className="bg-blue-500 text-white p-2 rounded">
            Add
          </button>
          <ul className="mt-8 w-full max-w-md">
            {todos.map((todo, index) => (
              <li key={index} className="flex justify-between items-center bg-white p-4 mb-2 rounded shadow">
                <span>{todo}</span>
                <button onClick={() => removeTodo(index)} className="bg-red-500 text-white px-3 py-1 rounded">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    }

    export default App
