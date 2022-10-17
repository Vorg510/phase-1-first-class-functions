function receivesAFunction(hello) {
  hello();
}

function returnsANamedFunction() {
  return function something () {};
  
}

function returnsAnAnonymousFunction(){
    return function(){};
}