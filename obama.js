let arr3 = ["wee wee", "obamka", "aboba", "jojo", "жижа"] //3
let yy="";
let yyy = "";
let arr4 =[];


/*for (let i=0; i<3; i++) {
	yy +=arr3[i] 
	

	
}

let i = 0; 
let w = arr3.length
while (i < w) {
  yy+=arr3[i]
   
  if (i%2==1)
  	yyy+=arr3[i-0]
  i += 1;
}
*/
//console.log(yy);



function logSquare(s,index) {
  //yy+=s+" "
 //console.log(s); 
 arr4.push([s, index])

 //arr4.push(s)
}

arr3.forEach( logSquare )
console.log(arr4);


// Выведутся квадраты элемента массива 0 25 9 4






















































































