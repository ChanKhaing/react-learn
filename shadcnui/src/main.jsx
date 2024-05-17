import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client';
import "../src/index.css"


const rootelement = document.getElementById('root');
const root = createRoot(rootelement);
root.render(<App/>)


