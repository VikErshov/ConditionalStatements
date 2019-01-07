const getGets = (arr) => {
    let index = 0;
  
    return () => {
      const toReturn = arr[index];
      index += 1;
      return toReturn;
    };
  };
  
  // This is the place where you must place your test data
  const test = [
    '-9' // This is the first line from the test.
     // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let digit = +gets();

switch(digit){
    case 0: 
    print("zero")
    break;
    case 1: 
    print("one")
    break;
    case 2: 
    print("two")
    break;
    case 3: 
    print("three")
    break;
    case 4: 
    print("four")
    break;
    case 5: 
    print("five")
    break;
    case 6: 
    print("six")
    break;
    case 7: 
    print("seven")
    break;
    case 8: 
    print("eight")
    break;
    case 9: 
    print("nine")
    break;
    default: 
    print("not a digit")
    break;
}