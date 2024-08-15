import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from '@xyflow/react';
import './App.css';
import '@xyflow/react/dist/style.css';

import { InputNode } from './components/InputNode';
import { initialEdges, initialNodes } from './constants';
import TextNode from './components/TextNode'; 

const nodeTypes = {
  input: InputNode,
  text: TextNode,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true, markerEnd: { type: 'arrow' } }, eds)),
    [setEdges],
  );

  return (
    <div className='App'>
      <header>
        <p>Drag-Drop in React Js</p>
      </header>
    <div className='react-flow-wrapper'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView={false}
        panOnScroll={true}
        zoomOnScroll={false} 
      >
        <Background variant={BackgroundVariant.Dots} />
        <MiniMap />
        <Controls showInteractive={false}/>
      </ReactFlow>
    </div>
    </div>
  );
}

export default App;
