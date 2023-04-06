let user: "string";

let saveButton: HTMLElement | null = document.getElementById("save");

console.log(saveButton);

if (!saveButton === null) {
  // do Somethingn
}

let loggedInUsername: string  ;

const users = [
  { name: "Oby", age: 12 },
  { name: "Toby", age: 32 },
];
const loggedInUser = users.find((user) => user.name === loggedInUsername);
console.log(loggedInUser.age);
// wee can olve this error in 2 ways one way is to tell typescript we as programmer know that this  willl have an element with id 'save' by just devlaring exclamation mark at the end.
//2nd and preferable way is to let savebtn variable as union which is HTMLElement or n ull
//let savebtn: HTMLElement = document.getElementById("save");
//console.log(savebtn);

// let savebtn: HTMLElement = document.getElementById("save")!;
// console.log(savebtn);
// 2nd way
let savebtn: HTMLElement | null = document.getElementById("save")!;
 console.log(savebtn);
