let num= +prompt("Введите значение");

if (isNaN(num) || typeof num != 'number') {
	console.log("Упс, кажется, вы ошиблись");
} else if (num % 2 == 0) {
  console.log ("чётное"); 
} else {
  console.log ("нечётное");
} 