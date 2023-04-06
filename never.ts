//if we decide to our function never do anything

function error():never{
    throw new Error('new error')
}
function fail(){
    return error
}
console.log(fail)