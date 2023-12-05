import { rendr, useState } from '@rendrjs/core';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return rendr('div', {
    class: 'App',
    slot: [
      rendr('div', {
        slot: rendr('img', {
          class: 'logo',
          src: 'logo.png',
        }),
      }),
      rendr('button', {
        class: 'btn',
        slot: `count: ${count}`,
        onclick: () => setCount(c => c + 1),
      }),
    ],
  });
};

export default App;
