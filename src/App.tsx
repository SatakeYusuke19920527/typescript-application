import { useState } from 'react';
import './App.css';

function App() {
  const [te, setTe] = useState<string>('じゃんけんしましょう！');
  const [cpuTe, setCpuTe] = useState<string>('CPU待機中');
  const gu = () => {
    setTe('ぐー');
    cpu();
  };
  const tyoki = () => {
    setTe('ちょき');
    cpu();
  };
  const pa = () => {
    setTe('ぱー');
    cpu();
  };
  const cpu = () => {
    let random = Math.floor(Math.random() * 3);
    console.log(random, 'cpu');
    if (random === 0) {
      setCpuTe('ぐー');
    } else if (random === 1) {
      setCpuTe('ちょき');
    } else {
      setCpuTe('ぱー');
    }
  };
  return (
    <div className="App">
      <button onClick={gu}>ぐー</button>
      <button onClick={tyoki}>ちょき</button>
      <button onClick={pa}>ぱー</button>
      <h1>あなたの手：{te}</h1>
      <h1>CPUの手：{cpuTe}</h1>
    </div>
  );
}

export default App;
