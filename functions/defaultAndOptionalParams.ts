function intro(name: string, age: number, country?: string = "UK"): string {
    if(country){
      return `My name is ${name} and I am ${age} years old and I live in ${country}`;
    }
    return `My name is ${name} and I am ${age} years old `;
  }
  console.log(intro("john", 32));
  console.log(intro("john", 32, "USA"));
  