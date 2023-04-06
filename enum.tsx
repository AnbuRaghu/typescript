

// enum is just like using Constant variable in js e.g
//const ADMIN="admin";
//const AUTHOR="author";
//const EDITOR="editor";
// typescript gives betterway as enum

// when we declare an enum ts automatically gives value for our enum  like so
// export enum Roles {
//     admin = 0,
//     author = 1,
//     editor = 2,
//   }
// we can reset the valueas we want
export enum Roles {
    admin = "admin",
    author = "author",
    editor = "editor",
  }
  
  type Person = {
    name: string;
    email: string;
    password: string;
    role: Roles;
  };
  
  const person: Person = {
    name: "John",
    email: "john@email.com",
    password: "password",
    role: Roles.admin,
  };
  