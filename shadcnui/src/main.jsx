import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootelement = document.getElementById('root');
const root = createRoot(rootelement);
root.render(<App/>);