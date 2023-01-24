/* Totally Not Another FizzBuzz 

Your CEO wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program that will receive an employee's ID number as input 
and print their prize. 

 */

function awardBonuses(employeeID) {
  if (employeeID % 3 === 0 && employeeID % 5 === 0) {
    console.log('JACKPOT! 1 Million and a Yacht!')
  } else if (employeeID % 3 === 0) {
    console.log('Vacation!')
  } else if (employeeID % 5 === 0) {
    console.log('$100,000 bonus!')
  } else {
    console.log('😥')
  }
}

awardBonuses(30);
awardBonuses(8);
awardBonuses(33);
awardBonuses(20);