//1

function seconds(total){
    total %= 60;
    console.log("1)")
    console.log(total)
}
seconds(2421)



//2

function perimeter(side, count){
    p = side * count
    console.log("2)")
    console.log(p)
}
perimeter(5, 3)



//3

function fizzbuzz(n){
    console.log("3)")
    for(let i=1; i<=n; i++){
        if(i % 15 == 0){
            console.log("fizzbuzz")
        }else if(i % 3 == 0){
            console.log("fizz")
        }else if(i % 5 == 0){
            console.log("buzz")
        }else{
            console.log(i)
        }
    }
}
fizzbuzz(15)



//4

function Calculate(x, y, z){
    avg = (x+y+z)/3
    console.log("4)")
    console.log(avg)
}
Calculate(3, 2, 3)

//5.1

function isDivisible1(n, x, y){
    if(n%x == 0 && n%y ==0){
        console.log("5.1) true")
    }else{
        console.log("5.1) false")
    }
}
isDivisible1(12,6,2)


//5.2
let ans = isDivisible2(12,6,2)

function isDivisible2(n, x, y) {
    return (n%x == 0 && n%y ==0) ? true : false;
}
console.log("5.2) "+ans)


//5.3
function isDivisible3(n, x, y){

    let ans;
    switch(n%x && n%y){
        case 0:
            ans ="true"
            console.log("5.3) "+ans)
            break;
        default:
            ans ="false"
            console.log("5.3) "+ans)
    }
}
isDivisible3(12,6,2)



//6
function task6(n){
  console.log("6)")
    let numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    console.log(numbers)
  let min = Math.min(...numbers)
  let max = Math.max(...numbers)
  let sum = numbers.reduce(function(a,b){
    return a+b
  })
  let avg = sum/n
  console.log("odds:")
  for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        }
    }
    console.log("min="+min,"max="+max,"sum="+sum,"avg="+avg)
}

task6(11)



//7
function task7(){
    let matrix = [];
    for (let i = 0; i < 5; i++) {
    matrix[i] = [];
    for (let j = 0; j < 5; j++) {
        matrix[i][j] = Math.floor(Math.random() * 10) - 5;
    }
  }
    for (let i = 0; i < 5; i++) {
    if (matrix[i][i] < 0) {
        matrix[i][i] = 0;
    } else {
        matrix[i][i] = 1;
    }
  }
    console.log("7)");
    for (let i = 0; i < 5; i++) {
    console.log(matrix[i]);
    }
}
task7()



//8
function Add(a, b) {
  console.log("8)")
    let result = a + b;
    console.log("Додавання: " + result);
}
function Sub(a, b) {
let result = a - b;
console.log("Віднімання: " + result);
}
function Mul(a, b) {
let result = a * b;
console.log("Множення: " + result);
}
function Div(a, b) {
if (b === 0) {
    console.log("Помилка: Ділення на нуль неможливе!");
} else {
    let result = a / b;
    console.log("Ділення: " + result);
}
}
Add(2,5)
Sub(2,5)
Mul(2,5)
Div(2,5)



//9
function checkNum(number) {
    console.log("9)");
    if (number > 0) {
      console.log("Позитивне");
    } else if (number < 0) {
      console.log("Негативне");
    } else {
      console.log("Нуль");
    }
  
    let isPrime = true;
    if (number <= 1) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      console.log("Просте");
    } else {
      console.log("Складене");
    }

    let div = [2, 5, 3, 6, 9];
    for (let j = 0; j < div.length; j++) {
      if (number % div[j] === 0) {
        console.log("Ділиться на " + div[j] + " без залишку.");
      } else {
        console.log("Не ділиться на " + div[j] + " без залишку.");
      }
    }
  }
checkNum(6)



//10
function reverseAndSquare(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      if (typeof arr[i] === 'number') {
        result.push(arr[i] * arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  let reversedSquaredArray = reverseAndSquare(["1", 2, 3, 4, 5, 6]);
  console.log("10)");
  console.log(reversedSquaredArray);



//11
function removeDuplicates(arr) {
    let rewriteArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (rewriteArray.indexOf(arr[i]) === -1) {
        rewriteArray.push(arr[i]);
      }
    }
    return rewriteArray;
  }

  let Array = removeDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]);
  console.log("11)");
  console.log(Array);