//1

function seconds(total){
    total %= 60;
    console.log("1) "+total)
}
seconds(2421)



//2

function perimeter(side, count){
    p = side * count
    console.log("2) "+p)
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
    console.log("4) "+avg)
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
isDivisible1(12,12,12)


//5.2
let ans = isDivisible2(12,11,12)

function isDivisible2(n, x, y) {
    return (n%x == 0 && n%y ==0) ? true : false;
}
console.log("5.2) "+ans)


//5.3
function isDivisible3(n, x, y){
    let ans;
    switch(n%x == 0 && n%y ==0){
        case 0:
            ans ="true"
            console.log("5.3) "+ans)
            break;
        default:
            ans ="false"
            console.log("5.3) "+ans)
    }
}
isDivisible3(12,12,12)



//6
function task6(n){
  const numbers = Array.from({length: n}, (_, i) => (i + 1)*2);
  console.log(numbers)
  let min = Math.min(...numbers)
  let max = Math.max(...numbers)
  let sum = numbers.reduce(function(a,b){
    return a+b
  })
  let avg = sum/n
  const odds = [];
  numbers.forEach((num) => {
  if (num % 2 === 1) {
    odds.push(num);
  }
});
  console.log("min="+min,"max="+max,"sum"+sum,"avg="+avg)
  console.log(odds)
}
task6(10)


