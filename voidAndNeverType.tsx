const addnumbers = (): void => {
  console.log(2 + 4);
}; ;
addnumbers();

// the diffeence between void and never is void doesent return anything whereas never type is stops the function execution and terminates the program
const throwNewError= = (): never => {
   throw new Error( "Your Program Terminated because of error");
};
throwNewError();


