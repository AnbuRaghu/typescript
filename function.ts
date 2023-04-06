function greet(name:string,age:number){
    return `Hello ${name},your age is ${age}`
}
console.log( greet('Anbu',29))
// we can determain our return result's data type like this
function greet1(name:string,age:number):string{
    return `Hello ${name},your age is ${age}`
    //here this function only returns string as we added string type above
}
console.log( greet1('Anbu',29))
// we can also use void 
function greet2(name:string,age:number):void{
    //return `Hello ${name},your age is ${age}`
    /// here we can't return anything as we use void
}
console.log( greet2('Anbu',29))