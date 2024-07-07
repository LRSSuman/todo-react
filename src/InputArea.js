import React, { useState } from 'react';

const InputArea = ({ addInput }) => {
    const [input, setInput] = useState('');
    const handleInput = (e) => {
        const data = e.target.value;
        setInput(data);
    };

    return (
        <div>
            <input type='text' onChange={handleInput} value={input} />
            <button
                onClick={() => {
                    addInput(input);
                    setInput('');
                }}
            >
                add
            </button>
        </div>
    );
};

export default InputArea;
