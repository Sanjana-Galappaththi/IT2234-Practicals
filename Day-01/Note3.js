//print numbers from 1-10

console.log("print numbers from 1-10");
for(let i=1; i<=10; i++)
{
	console.log(i);
}

//print only odd numbers

console.log("print only odd numbers");
for(let i=0; i<=10; i++)
{
	if(i%2 != 0)
	{
		console.log(i);
	}
}

//print the numbers in reverse

console.log("print the numbers in reverse");
for(let i=10; i>=1; i--)
{
	console.log(i);
}

//reverse numbers in left and right 

let i = 15
let mid = parseInt(i/2) + 1;

console.log("reverse numbers in left and right");
for(let j= mid - 1; j>0; j--)
{
	
	console.log(j)
}

console.log(mid);

for(let j = i; j>mid; j--)
{
	console.log(j)
}