/*
Compete with Neighbour
Description

You are provided an array A which has N elements. Your task is to find the count of such occurrence where the element is larger than its neighbour.


Input
Input Format :

First line of input contains N which is the number of elements present in the array.

Second line contains N integer which are the elements of the array A.

Constraints :

N<100

There will always be at least 2 elements


Output
Output one integer which is the count of such occurences.


Sample Input 1 

8
1 2 3 4 2 1 6 5
Sample Output 1

2
Hint

Output Explanation :

In this case, 4 is bigger than both its neighbour 3 and 2.

Similarly 6 is bigger than both its neighbour 5 and 1.

So, the answer is 2.


*/

function runProgram(input){
	 input = input.split("\n");
  	var N = Number(input[0]);
  var arr = input[1].split(" ").map(Number);
  var count=0;
  for(var i=0; i<N; i++){
    	if(i===0){
        	if(arr[i]> arr[i+1]){
            	count++;
            }
        }
     	if(i===N-1){
    		if(arr[i]> arr[i-1]){
        		count++;
        		}
   		 }
  	if(arr[i+1] > arr[i] && arr[i+1]> arr[i+2]  ){
        	count++;
        }
  }
  console.log(count);
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
});
//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here//Enter code here