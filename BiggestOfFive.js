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
    '-0.5',
    '-4',
    '-3',
    '-10',
    '0' // This is the first line from the test.
     // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
 
  let first = +gets();
  let second = +gets();
  let third = +gets();
  let fourth = +gets();
  let fifth = +gets();
  
  let biggestNum = Number.POSITIVE_INFINITY;
  
  if (biggestNum > first) {
    biggestNum = first;
  }
  if (biggestNum < second) {
    biggestNum = second
  }
  if (biggestNum < third) {
    biggestNum = third;
  }
  
  if(biggestNum < fourth){
    biggestNum = fourth;
  }
  if(biggestNum < fifth){
    biggestNum = fifth;
  }
  
  print(biggestNum)