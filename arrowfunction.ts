const func: (a:string, b:string,c:string) => Boolean =(a,b,c)=>{
    return true
}
//if we have a function that doesn't return anything then use void
const funct: (a:string, b:string,c:string) => void =(a,b,c)=>{
    console.log(a,b,c)
}
//inside of typescript there are 2 ways to type object 
// 1. type
//2:interface :interface are extendable like class component
//to define a interfae we start with the keyword interface and the name usually the name starts with I
interface ISearchBox {
    className: string;
    placeholder?: string;// this optional we tell typescript you can expect a string or null means nothing

}
// we get const SearchBox = ({ className, placeholder, onChangeHandler })  as props here onchangeHandler is afunction so we can make this type different ways 
//way:1 extending  onchaneHandlerthe interface
interface ISearchBox extends IChangeHandler {
    className: string;
    placeholder?: string;// this optional we tell typescript you can expect a string or null means nothing

}
interface IChangeHandler{
    onChangeHandler:(a:string) => void;
}



//react code jsx 
// const SearchBox = ({ className, placeholder, onChangeHandler }) => (
//     <input
//       className={`search-box ${className}`}
//       type='search'
//       placeholder={placeholder}
//       onChange={onChangeHandler}
//     />
//   );
  
//   export default SearchBox;

//we cahnge this as typescript


const SearchBox = ({ className, placeholder, onChangeHandler }: ISearchBox) => (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
  
  export default SearchBox;


  // the way 2: is by overloading  if we type ISearchBox twice typescript combines togethrt
  interface ISearchBox{
    className: string;
    placeholder?: string;// this optional we tell typescript you can expect a string or null means nothing

}
interface ISearchBox{
    onChangeHandler:(a:string) => void;
}


const SearchBox = ({ className, placeholder, onChangeHandler }: ISearchBox) => (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
  
  export default SearchBox;

  // 1. type it lacks of the two functionality we can't overload we can't extends to write a type, it's
  //similar to interface but we don't need I prefixed
  

  type SearchBox = {
    className: string;
    placeholder?: string;
    onChangeHandler:(a:string) => void;
  }

  const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBox) => (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
  
  export default SearchBox;

  // type allow us to do something known as union, union is combinations  of types
  type CanadianAddresses = {
    street:string;
    province:string;
  }
  type UsAddresses = {
    street:string;
    state:string;
  }
  type ItalianAddresses = {
    street:string;
    region:string;
  }


  //to make a union.... this  | is importsnt
  type NorthAmericanAddress =  CanadianAddresses | UsAddresses | ItalianAddresses
  const Address : NorthAmericanAddress = {
    // we can have either state or province
    street:'adsadafd',
    province:'fefwefgrwgrger'
  }

  // to decide which to use if we use functional programming style then we would use type. if we use object oriented programming style then we use interfaces instead

//--------------------------------------------------------------------------------------------------

  //ChangeEventHandler type from react
  import {ChangeEventHandler } from 'react'


  type SearchBox = {
    className: string;
    placeholder?: string;
    onChangeHandler:ChangeEventHandler<HTMLInputElement>;
  }
  const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBox) => (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
  
  export default SearchBox;