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
    '1',
    '2',
    '3'
    // This is the first line from the test.
     // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
 
let first = +gets();
let second = +gets();
let third = +gets();
let temp = 0;

if (first < second) {
  temp = first;
  first = second;
  second = temp
}
if (second < third) {
  temp = second;
  second = third;
  third = temp;
}
if (first < second) {
  temp = second;
  second = first;
  first = temp;
}

print(`${first} ${second} ${third}`);
