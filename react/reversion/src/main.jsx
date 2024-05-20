// impertative logic but react use declratiive logic
// const heading = document.createElement("h1");
// heading.innerText = "Todo app";
// rootelement.append(heading);

// const element = createElement(type, props, ...children)
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import "../src/index.css"
const rootelement = document.getElementById('root');

const tasks = [
  "Read js book",
  "learn react",
  "sleep early",
  "meet with client",
];

// const element = createElement(type, props, ...children);

const root = createRoot(rootelement);
// root.render()
// root.render(
//   createElement(
//     "div",
//     null,
//     createElement("h1", null, "Todo"),
//     createElement(
//       "form",
//       null,
//       createElement("input", null),
//       createElement("button", null, "click"),
//       createElement(
//         "ul",
//         null,
//               tasks.map((task, index) => createElement("li", { key: index }, task))
//       )
//     )
//   )
// );

// root.render(
//   createElement(
//     "main",
//     null,
//     "Todo",
//     createElement(
//       "form",
//       null,
//       createElement("input", null),
//       createElement("button", null, "click"),
//       createElement("ul", null,
//         tasks.map((task) => createElement("li", null, task)

//           )
//        )
//     )
//   )
// );

root.render(
  createElement("section", { className : ' p-10'},
    createElement("div",{ className : 'font-bold m-20 text-red-500' } , "Todo"),
    createElement("form", null,
      createElement("input", null),
      createElement("button",null,"click")
    ),
    createElement("ul", null,
      tasks.map((task) => createElement("li",null,task) )
      
    )
  )
)

// root.render(
//   createElement(
//     "div",
//     null,
//     createElement("h1", null, "Todo App"),
//     createElement(
//       "form",
//       null,
//       createElement("input", null),
//       createElement("button", null, "Add List")
//     ),
//     createElement(
//       "ul",
//       null,
//       tasks.map((task, index) => createElement("li", { key: index }, task))
//       // createElement("li", null, "Read js book"),
//       // createElement("li", null, "learn react"),
//       // createElement("li", null, "sleep early")
//     )
//   )
// );
