import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TypingArena from './typing-arena';

// ReactDOM.render(
//     <h3>React Component for TYPING-WARS</h3>
//     , document.getElementById('put_me_here')
//   );

ReactDOM.render((
  <BrowserRouter>
    <TypingArena />
  </BrowserRouter>

  ), 
  document.getElementById('put_me_here'));