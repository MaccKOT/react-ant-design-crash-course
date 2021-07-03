import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hello Vite + React!</p>
      <p>
        <Button type='primary' onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </Button>
      </p>
    </div>
  );
}

export default App;
