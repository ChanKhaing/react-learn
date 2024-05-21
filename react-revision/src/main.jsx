import React, { createElement } from "react";
import { createRoot } from "react-dom/client";
import TestApp from "./TestApp";


const root = document.querySelector("#root");

const reactRoot = createRoot(root);


reactRoot.render(<TestApp/>)
