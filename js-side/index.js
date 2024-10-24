// async function getData(){
//   setTimeout(function (){
//     console.log("I am inside set Timeout block")
//   },3000)
// }

// let output = getData();


// await -?

//fetch API

// async function getData(){
//   //get request - async
//   let response = await fetch('https://jsonplaceholder.typicode.com/todos/3')
//   //parse json - async
//   let data = await response.json()
//   console.log(data)
// }

// getData();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

  
const option = {
  method: "POST",
  body: JSON.stringify({ username: "codenep" }),
  headers: myHeaders,
};

async function getData(){
  const url = "https://dummyjson.com/posts";
  const response = await fetch(url);
  let data = await response.json();
  console.log("get data response:",data);
}

async function postData(){
  const response = await fetch(url,option);
  let data = await response.json();
  console.log("post data response :",data);
}

async function processData(){
  await postData()
  await getData()
  
}

processData();
 