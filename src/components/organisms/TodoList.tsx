import React, { useCallback, useState } from 'react';
import { produce } from 'immer';

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 'React',
      title: 'Learn React',
      done: true,
    },
    {
      id: 'Immer',
      title: 'Try Immer',
      done: false,
    },
  ]);

  const handleToggle = useCallback((id: string) => {
    setTodos(
      produce((draft: Todo[]) => {
        const todo = draft.find((todo) => todo.id === id);
        if (todo) {
          todo.done = !todo.done;
        }
      }),
    );
  }, []);

  const handleAdd = useCallback(() => {
    setTodos(
      produce((draft: Todo[]) => {
        draft.push({
          id: 'todo_' + Math.random().toString(),
          title: 'A new todo',
          done: false,
        });
      }),
    );
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10">
      <ul className="divide-y divide-gray-200">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            className={`flex justify-between items-center p-4 hover:bg-gray-100 cursor-pointer ${
              todo.done ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {todo.title}
            <span>{todo.done ? '✓' : '✗'}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleAdd}
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoList;
