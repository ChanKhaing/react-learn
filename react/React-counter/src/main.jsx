// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App';
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./Navbar";
// import ''
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Navbar/>)