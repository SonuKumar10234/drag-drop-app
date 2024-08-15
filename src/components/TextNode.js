import { memo, useCallback } from 'react';
import { Handle, Position, NodeResizer, useReactFlow } from '@xyflow/react';
import ModalInfo from './ModalInfo';

const TextNode = ({ id, data, selected }) => {
  const { setNodes } = useReactFlow();

  // Handle the resizing event
  const handleResize = useCallback(
    (event, { width, height }) => {
      setNodes((nodes) =>
        nodes.map((node) =>
          node.id === id
            ? {
                ...node,
                style: {
                  ...node.style,
                  width: `${width}px`,
                  height: `${height}px`,
                }, // Update the node's width and height
              }
            : node
        )
      );
    },
    [id, setNodes]
  );

  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={100}
        minHeight={30}
        onResize={handleResize} // resize handler
      />
      <Handle type="target" position={Position.Left} />
      <div
        style={{
          padding: 10,
          width: data.style?.width || 'auto',
          height: data.style?.height || 'auto',
          ...data.style,
        }}
      >
        <p>{data.text.slice(0, 100) + (data.text.length > 100 ? '...' : '')}</p>
        <ModalInfo text={data.text}/>
      </div>
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(TextNode);
