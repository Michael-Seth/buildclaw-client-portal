import { FigspecFileViewer } from '@figspec/components';
import React from 'react'

const FigmaRenderer = () => {
    const prototypeUrl = 'https://www.figma.com/proto/Wpu0nLtSMqYMeCi0o1oFKR/brandmeals?node-id=771-26&t=qf957LGs5d7pizLF-1&scaling=scale-down&content-scaling=fixed&page-id=574%3A291&starting-point-node-id=911%3A31';

    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <iframe
          src={prototypeUrl}
          style={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
        />
      </div>
    );
  };

export default FigmaRenderer