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
    'June',
    '24',
    
    // This is the first line from the test.
     // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
 
  let month = gets();
  let date = +gets();

  let season = null;

  switch(month) {
      case "January":
      season = "Winter";
      break;
      case "February":
      season = "Winter";
      break;
      case "March":
        if (date >= 20) {
          season = "Spring";
        }
        else{
          season = "Winter";
        }
      break;
      case "April":
      season = "Spring";
      break;
      case "May":
      season = "Spring";
      break;
      case "June":
        if (date >= 21) {
          season = "Summer"
        }
        else{
          season = "Spring"
        }
      break;
      case "July":
      season = "Summer";
      break;
      case "August":
      season = "Summer";
      break;
      case "September":
        if (date >= 22) {
            season = "Autumn";
        }
        else{
            season = "Summer";
        }
      break;
      case "October":
      season = "Autumn";
      break;
      case "November":
      season = "Autumn";
      break;
      case "December":
        if (date >= 21) {
          season = "Winter";
        }
        else{
          season = "Autumn";
        }
      break;
  }

  print(season);