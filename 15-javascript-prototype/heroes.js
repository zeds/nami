import data from './sp.json' assert { type: 'json' };
console.log(data);

let name = data["squadName"];

const myp = document.querySelector("p");
myp.innerHTML = name;


