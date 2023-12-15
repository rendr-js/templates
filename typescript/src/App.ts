import { button, div, img, useState } from '@rendrjs/core';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return div({
    class: 'App',
    slot: [
      div({
        slot: img({
          class: 'logo',
          src: '/r.svg',
        }),
      }),
      button({
        class: 'btn',
        slot: `count: ${count}`,
        onclick: () => setCount(c => c + 1),
      }),
    ],
  });
};

export default App;
