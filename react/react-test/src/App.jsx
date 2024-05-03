// const App = () => {
//   return (
//     <div>
//       <h1>hello react</h1>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
//         soluta!
//       </p>
//     </div>
//   );
// };

import Test from "./Test";

// export default App;

const App = () => {
  const headingstyle = {
    background: "red",
    padding: "10px",
    display: "inline-block",
    marginTop:"50px"
  }
  return (
    <div>
      {/* <h1 style={headingstyle}>hello world</h1> */}
      {/* <h3>try the best first</h3>
      <h3>try the best second</h3>
      <h3>try the best third</h3>

      <Test />
      <form action="">
        <input type="text" />
        <button>click</button>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </form> */}
      <Test/>
    </div>
  );
}

export default App;
