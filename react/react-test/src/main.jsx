// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import React from "react";

import { createRoot } from "react-dom/client";
import "./style.css";
import Test from "./Test";


// import 

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


const chank = document.querySelector("#root");


const root = createRoot(chank);

    //reactdom root //it is render react node
root.render(<Test />);

