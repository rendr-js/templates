import { element, useState } from '@rendrjs/core';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return element('div', {
    class: 'App',
    slot: [
      element('div', {
        slot: element('img', {
          class: 'logo',
          src: '/r.svg',
        }),
      }),
      element('button', {
        class: 'btn',
        slot: `count: ${count}`,
        onclick: () => setCount(c => c + 1),
      }),
    ],
  });
};

export default App;
