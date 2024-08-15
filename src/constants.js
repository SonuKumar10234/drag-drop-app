import { nanoid } from "nanoid";

// Define the style for the initial node
const nodeStyle = {
    background: '#fff',
    border: '1px solid black',
    borderRadius: 15,
    fontSize: 12,
    padding: 10,
    width: 220,
    height: 120
};

// Initial nodes and edges
export const initialNodes = [
    { 
        id: nanoid(), 
        position: { x: 20, y: 20 }, 
        data: { label: 'Input Node' }, // Assuming this is the label or text you want to show
        type: 'input', 
        style: nodeStyle // Assign the style to the node
    },
];

export const initialEdges = [];
