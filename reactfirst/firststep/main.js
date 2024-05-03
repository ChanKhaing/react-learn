import React from 'react';
import './style.css'
import ReactDom from "react-dom/client";


const rootElement = document.querySelector("#root");

const root = ReactDom.createRoot(rootElement);

const heading = React.createElement("h1",null,"i am chankhine");

root.render(heading);