import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../src/style.css';


const rootelement = document.getElementById('root');
const root = createRoot(rootelement);
root.render(<App/>);

