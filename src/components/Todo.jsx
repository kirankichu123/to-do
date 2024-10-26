import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTodo, toggleComplete } from '../redux/TodoSlice';

const Todo = () => {
  const { todo } = useSelector(state => state.TodoReducer);
  const dispatch = useDispatch();
  
  const [create, setCreate] = useState('');

  const handleCreate = () => {
    if (create.trim()) {
      dispatch(createTodo(create));
      setCreate('');
    } else {
      alert('Please type something that you want to Note!!');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <>
      <div className='my-5 mx-4 d-flex' >
        <input
          value={create} 
          onChange={e => setCreate(e.target.value)}
          type="text"
          placeholder='Add ToDo'
          className='form-control w-25'
        />
        <button onClick={handleCreate} className='btn btn-info'>Create</button>
      </div>
      
      {todo.length > 0 ? (
        <ol>
  {todo.map((item) => (
    <li
      key={item.id}
      className='d-flex align-items-center justify-content-between'
      style={{
        backgroundColor: item.completed ? 'lightgreen' : 'white',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type='checkbox'
          checked={item.completed}
          onChange={() => handleToggleComplete(item.id)}
          style={{ marginRight: '10px' }}
        />
        <span
          style={{
            textDecoration:'none',
            fontSize: '16px',
          }}
        >
          {item.text}
        </span>
      </label>
      <button
        onClick={() => handleDelete(item.id)}
        className='btn btn-danger'
        style={{ fontSize: '16px' }}
      >
        <i className='fa-solid fa-trash'></i>
      </button>
    </li>
  ))}
</ol>

      ) 
      : (
        <div style={{ height: '70vh', width: '100%' }} className="container">
          <h1 className='text-danger text-center'>Your todo list is empty!!!</h1>
        </div>
      )}
    </>
  );
};

export default Todo;
