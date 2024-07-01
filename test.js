//que 1

/*function generatefibonacci(n){
let fibonacci = [0,1];
for (let i = 2; i < n; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
 }
 return fibonacci.slice(0,n);
}
let int = 5;
console.log(generatefibonacci(int));*/


// que 2

/*function twosum(n, t){
    for (let i = 0; i < n.length - 1; i++){
        for(let j = i + 1; j < n.length; j++){
            if (n[i] + n[j] === t){
                return [i. j];
            }
        }
    }
}

let n = [2, 7 , 11, 15];
let t = 9;
console.log(twosum(n, t));*/


// que 3
/*function valid(s){
    let stack = [];
    let map = {
        ')':'(',
        '}':'{',
        ']':'['
     
    };
    for (let char of s){
        if(char === '(' ||  char === '{' || char ==='['){
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) {
                return false;
            }

        }
    }
    return stack.l === 0;
}
console.log(valid("()[]{]"));*/

