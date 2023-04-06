//if we decide to our function never do anything
function error() {
    throw new Error('new error');
}
function fail() {
    return error;
}
console.log(fail);
