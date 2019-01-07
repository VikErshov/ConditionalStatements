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
    '18',
    '44' // This is the first line from the test.
     // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let totalNumberOfMessages = +gets();
let totalNumberOfMinutes = +gets();

let additionalMessages = 0;
let additionalMinutes = 0;

if (totalNumberOfMessages > 20) {
    additionalMessages = totalNumberOfMessages %  20;
}

if (totalNumberOfMinutes > 60) {
    additionalMinutes = totalNumberOfMinutes % 60;
}


let additionalMessagesCost = additionalMessages * 0.06;
let additionalMinutesCost = additionalMinutes * 0.10;

let additionalTaxes = (additionalMessagesCost + additionalMinutesCost) * 0.2;

let includedMessages = totalNumberOfMessages - additionalMessages;
let includedMinutes = totalNumberOfMinutes - additionalMinutes;

let totalBill = (additionalMessagesCost + additionalMinutesCost + additionalTaxes) + 12.00;

print(`${additionalMessages} additional messages for ${additionalMessagesCost.toFixed(2)} levas`)
print(`${additionalMinutes} additional minutes for ${additionalMinutesCost.toFixed(2)} levas`)
print(`${additionalTaxes.toFixed(2)} additional taxes`)
print(`${totalBill.toFixed(2)} total bill`);