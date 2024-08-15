import { useState } from 'react';
import { Handle, Position, useReactFlow } from '@xyflow/react';
import { nanoid } from 'nanoid';

export function InputNode() {
    const [inputText, setInputText] = useState('');
    const { setNodes } = useReactFlow();

    const handleClick = () => {
        setNodes((prevNodes) => [
            ...prevNodes,
            {
                id: nanoid(),
                type: 'text',
                position: { x: Math.random() * 300, y: Math.random() * 300 },
                data: {
                    text: inputText
                },
                style: {
                    background: '#fff',
                    border: '1px solid black',
                    borderRadius: 15,
                    fontSize: 12,
                    padding: 10,
                    width: 220,
                    height: 120,
                },
            },
        ]);
    };

    return (
        <>
            <Handle type="target" position={Position.Left} />
            <div className='inputNode'>
                <label htmlFor="text" style={{textAlign:'justify'}}>Text</label>
                <input
                    id="text"
                    name="text"
                    onChange={e => setInputText(e.target.value)}
                    className="nodrag"
                    placeholder='Enter text'
                />
                <button onClick={handleClick}>Add</button>
            </div>
            <Handle type="source" position={Position.Right} id="a" />
        </>
    );
}
