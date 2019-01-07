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
    '1975', // This is the first line from the test.
     // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
 
let inputYear = +gets();

let mid0 = Math.abs(inputYear - 2000);
let mid1 = Math.abs(inputYear - 2001);
let mid2 = Math.abs(inputYear - 2002);
let mid3 = Math.abs(inputYear - 2003);
let mid4 = Math.abs(inputYear - 2004);
let mid5 = Math.abs(inputYear - 2005);
let mid6 = Math.abs(inputYear - 2006);
let mid7 = Math.abs(inputYear - 2007);
let mid8 = Math.abs(inputYear - 2008);
let mid9 = Math.abs(inputYear - 2009);
let mid10 = Math.abs(inputYear - 2010);
let mid11 = Math.abs(inputYear - 2011);

let zodiacSign = null;

if (mid0 % 12 === 0) {
    zodiacSign = "Dragon"
}
else if (mid1 % 12 === 0) {
    zodiacSign = "Snake"
}
else if (mid2 % 12 === 0) {
    zodiacSign = "Horse"
}
else if (mid3 % 12 === 0) {
    zodiacSign = "Sheep"
}
else if (mid4 % 12 === 0) {
    zodiacSign = "Monkey"
}
else if (mid5 % 12 === 0) {
    zodiacSign = "Rooster"
}
else if (mid6 % 12 === 0) {
    zodiacSign = "Dog"
}
else if (mid7 % 12 === 0) {
    zodiacSign = "Pig"
}
else if (mid8 % 12 === 0) {
    zodiacSign = "Rat"
}
else if (mid9 % 12 === 0) {
    zodiacSign = "Ox"
}
else if (mid10 % 12 === 0) {
    zodiacSign = "Tiger"
}
else if (mid11 % 12 === 0) {
    zodiacSign = "Hare"
}

print(zodiacSign);