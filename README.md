# js_tasks

#1
let weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let d = new Date();

console.log(`Today is : ${weekDays[d.getDay()]}.`);
console.log(`Current time is ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`)
#2
<button onclick="window.print()">Clich to print this page</button>
#3
let day = new Date();
let d = day.getDate(),
    m = day.getMonth(),
    y = day.getFullYear();

if(d < 10){
  d = '0' + d;
}

if(m < 10){
  m = '0' + m
}

console.log(`${d}:${m}:${y}`)
#4
let a = 5,
    b = 6,
    c = 7;

let p = (a + b + c)/2;
let s = Math.sqrt(p*((p-a)*(p-b)*(p-c)));

console.log(s)
#5
let str = 'w3source';
let splitedStr = str.split('');
let last = splitedStr.pop();


console.log(last + splitedStr.join(''))
