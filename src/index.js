import React from 'react';

import { createRoot } from 'react-dom/client';
import './index.css';
import GitExpertApp from './GifExpertApp';



const divroot = document.getElementById('root');
const root = createRoot(divroot);
root.render(
  
    <GitExpertApp />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

