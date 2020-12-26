import { useState } from 'react';
import './App.css';

function App() {
  const [te, setTe] = useState<string>('');
  const gu = () => {
    setTe('ぐー');
  };
  const tyoki = () => {
    setTe('ちょき');
  };
  const pa = () => {
    setTe('ぱー');
  };
  return (
    <div className="App">
      <button onClick={gu}>ぐー</button>
      <button onClick={tyoki}>ちょき</button>
      <button onClick={pa}>ぱー</button>
      <h1>{te}</h1>
    </div>
  );
}

export default App;
