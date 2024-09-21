import "./style.css";

const fetchBtn = document.querySelector("#fetchBtn");


//   async function run() {
//     const res = await fetch("https://fakestoreapi.com/products/");
//     const data = await res.json();
//     console.log(data);
// }  
   async function  run() {
    // fetch("https://fakestoreapi.com/products/1")
    //   .then((res1) => res1.json())
    //   .then((data1) => console.log(data1));

    // fetch("https://fakestoreapi.com/products/2")
    //   .then((res2) => res2.json())
    //   .then((data2) => console.log(data2));

    // fetch("https://fakestoreapi.com/products/3")
    //   .then((res3) => res3.json())
       //   .then((data3) => console.log(data3));
       
         const res1 = await fetch("https://fakestoreapi.com/products/1");
  const data1 = await res1.json();
  console.log(data1);

  const res2 = await fetch("https://fakestoreapi.com/products/2");
  const data2 = await res2.json();
  console.log(data2);

  const res3 = await fetch("https://fakestoreapi.com/products/3");
  const data3 = await res3.json();
  console.log(data3);
}
  
async function fetchData() {
  try {
    // Use await to wait for the fetch promise to resolve
    const response = await fetch("https://fakestoreapi.com/products/33");

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Log the data to the console
    console.log(data);
  } catch (error) {
    // Catch and handle any errors
    console.error("There was a problem with the fetch operation:", error);
  }
}

const handleFetchBtn = () => {
  // fetch("https://fakestoreapi.com/products/")
  //     .then((res) => res.text())
  //     .then((data) => console.log(JSON.parse(data)));
  // setTimeout(() => {
  //     return console.log("with setTimeout function call");
  // },1000)
  // console.log("without setTimeout");
  /*  promise case
    let i = 0;
    let p = new Promise(function (resolve, reject) {
        
    setTimeout(() => {
        resolve(i += 1);
    }, 1000);
});
p.then(function () {
    console.log("with setTimeout function call");
});
// console.log("hello world");
*/
  /*promise
    new Promise(function (resolve, reject) {
        setTimeout(() => {
            const val = Math.floor(Math.random() * 10);
            if (val > 5) { resolve(val) }
            else{reject(val)}
            {}
        }) }).then(function (res) {
            console.log("it is sucess",res)
        },function(rej){ console.log("it is fail",rej)})*/
    // run();
    fetchData();
    
  
};

fetchBtn.addEventListener("click", handleFetchBtn);

console.log("hello");

