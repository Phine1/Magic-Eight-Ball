const userName = 'Phinehas';
userName ? console.log(`Hello, welcome to the Magic Eight Ball fortune teller, ${userName}!`) :
console.log('Hello!');
let userQuestion = ' Will I pass my exams?';
console.log(`${userName} asked that ${userQuestion}`);
const randomNumber = Math.floor(Math.random()*8);
let eightBall = '';
switch (randomNumber) {
  case 0: eightBall = 'It is certain';
  break;
  case 1: eightBall = 'It is decidedly so';
  break;
  case 2: eightBall = 'Im out of answers now, Try again later';
  break;
  case 3: eightBall = 'Cannot predict now';
  break;
  case 4: eightBall = 'Donot count on it';
  break;
  case 5: eightBall = 'Hell NO, I cant help you now';
  break;
  case 6: eightBall = 'Outlook not so good';
  break;
  case 7: eightBall = 'Signs point to yes';
  break;
}
console.log(`The Magic Eigth Ball answered: ${eightBall}`);



