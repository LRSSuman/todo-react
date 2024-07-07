import React from 'react';

const ToDoItem = ({ data, removeInput, id }) => {
    return (
        <div
            onClick={(e) => {
                console.log(e.target);
                removeInput(id);
            }}
        >
            <li>{data}</li>
        </div>
    );
};

export default ToDoItem;
