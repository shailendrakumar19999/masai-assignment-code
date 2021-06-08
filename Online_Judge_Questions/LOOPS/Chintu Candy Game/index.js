/*
Chintu Candy Game
Description

Chintu wants to play a game.

The game has the following rules:

Chintu will be given S points.he has to choose some positive integer number 1 ≤ x ≤ s.

Chintu can perform the following operation any number of times (possibly, zero): buy some candies that costs exactly x points and obtain [x/10] points as a cashback (in other words, Chintu spends x points and obtains ⌊x/10⌋ back). The operation ⌊a/b⌋ means a divided by b rounded down.

It is guaranteed that he can always buy some candies that cost x  for any possible value of x.

Your task is to say the maximum number of points Chintu can spend if he buys candies optimally so that he can win the game.


Input
Input Format

The first line of the input contains one integer t indicates the number of test cases.

The next t lines describe test cases. Each test case is given on a separate line and consists of one integer s — the number of Points Chintu initially has.

Constraints

1 ≤ s ≤ 10^9

1 ≤ t ≤ 10^4


Output
For each test case print the answer on it the maximum number of Points Chintu can spend if he buys candies optimally.


Sample Input 1 

6
1
10
19
9876
12345
1000000000
Sample Output 1

1
11
21
10973
13716
1111111111
Hint

Sample 1 Explanation


*/


function runProgram(input){
	 input = input.split("\n");
  	var T = input[0];
  var pos=1;
  for(var i=0;i<T;i++){
  	var n= Number(input[pos]);
    pos +=1;
    
    var totalProfit = 0;
while (n) {
  if (n < 10) {
    totalProfit = totalProfit + n;
    n = 0;
  }
  else {
    var q = Math.floor(n / 10);
    totalProfit = totalProfit + q * 10;
    n = n % 10;
    n = n  + q;
  }
}
console.log(totalProfit)
  }
  	
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});//Enter code here//Enter code here