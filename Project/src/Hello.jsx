// src/Hello.jsx
import { useState } from 'react';

export default function Hello() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: 20 }}>
      <h1>Hello, Nishanth! 👋</h1>
      <p>Button clicks: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Click me</button>
    </div>
  );
}
