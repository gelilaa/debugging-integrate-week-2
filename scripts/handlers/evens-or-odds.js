'use strict';
// write the logic

console.log('--- loading: evens or odds');

function evensOrOddsHandler() {
  debugger;
  console.log('\n--- action: sum numbers in range ---');
  console.log('range:', typeof range, '\n', range);

  // read user input
  const displayEvens = confirm('Click OK to see even numbers\n Click Cancel to see odd numbers?');
  console.log('displayEvens:', typeof displayEvens, '\n', displayEvens);

  // perform core logic
  /* create a comma-separated list if all the evens or odds in the range
    if range is 5 and the user asks for evens:
      "2, 4, "
    if range is 5 and the user asks for odds:
      "1, 3, 5, "
    if range is 8 and the user asks for evens:
      "2, 4, 6, 8, "
    ...
  */
  let listedNumbers = '';
  
  for (let i = 1; i <=range ; i++) {
    if (displayEvens ===true){
      i % 2 === 0? listedNumbers += `${i},`:listedNumbers;
    }else { (displayEvens === false)
      i%2 !== 0? listedNumbers += `${i},`:listedNumbers;

    }
  }
      
  console.log('listedNumbers:', typeof listedNumbers, '\n', listedNumbers);

  // alert result for the user
  alert(listedNumbers);
}
