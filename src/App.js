import React, { useState } from 'react';
import InputArea from './InputArea';
import './App.css';
import ToDoItem from './ToDoItem';
import { useDispatch, useSelector } from 'react-redux';
import { UseDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './slices/todoSlice';

const App = () => {
    const todo = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const addInput = (data) => {
        dispatch(addTodo(data));
    };

    const removeInput = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className='container'>
            <InputArea addInput={addInput} />
            <ul>
                {todo.map((data, index) => {
                    return (
                        <ToDoItem
                            key={index}
                            data={data}
                            removeInput={removeInput}
                            id={index}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
