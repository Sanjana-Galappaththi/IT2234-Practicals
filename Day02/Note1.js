//Array Operations
let numArray = [1,4,5,3];
for(let i=0; i<numArray.length; i++)
{
	console.log(numArray[i]);
}


//find the max number in the array using forEach

let max=0;
numArray.forEach((n) => { 
    /*if(max<n)
	{
		max=n 
	}
})*/

(max<n)&&(max=n)
})
console.log("Maximum number:" +max)


//print the nested Array
//[[1,2,30], [5,6], [8,5,3]]

let arr=[[1,2,30],[5,6],[8,5,3]]
arr.forEach((n) => {
	n.forEach((i) =>
	{
		console.log(i)
	})
})
	
	//arr=[1,2,3,4,5,6]
//target=7
//write a code find the all pairs that sum up to target

let arry=[1,2,3,4,5,6]

let target=7

for(let i=0; i<arry.length; i++)
{
	for(let j=0; j<arry.length; j++)
	{
		if( (arry[i] + arry[j])==target)
		{
			console.log(arry[i] +"," +arry[j])
		}
	}
}

//a=[4,5,6,3,7]
//b=[8,3,2,1,5]
//find the common elements between a and b

let arr1=[4,5,6,3,7];
let arr2=[8,3,2,1,5];

for(let i=0; i<arr1.length; i++)
{
	for(let j=0; j<arr2.length; j++)
	{
		if(arr1[i] == arr2[j])
		{
			console.log(arr1[i])
		}
	}
}

//find the most freaquent elemenyt in array
//[4,8,3,4,3,2,1,8,4]
let ar = [4,8,3,4,3,2,1,8,4];

let frequency = {}; 


let mostFrequentNum = null; 
let maxFrequency = 0; 


for (let i = 0; i < ar.length; i++) {
    let num = ar[i];

    
    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}


for (let num in frequency) {
    if (frequency[num] > maxFrequency) {
        mostFrequentNum = num;
        maxFrequency = frequency[num];
    }
}
console.log("Most frequent number is:", mostFrequentNum)

//Array Operation
//push and pop

/*arr=['a','b','c','d']
console.log(arr)
arr.push('e')
console.log(arr)
arr.pop()
console.log(arr)
*/
//reverse the array using push and pop
//a b c d -> d c b a 

let arrys=['a','b','c','d']

let C=[];
for(let i=arrys.length; i>0; i--)
{
	C.push(arrys.pop());
}
console.log(C);


//Jason
//{key:value}
let student ={regno:'2021/ICT/01',name:'James',age:21,course:'IT',skills:['java',"JS",'c++']}
console.log(student)
console.log(student.name)
/*let students=[
{regno:'2021/ICT/01',name:'James',age:21,course:'IT'},
{regno:'2021/ICT/02',name:'ravi',age:22,course:'IT'},
{regno:'2021/ICT/03',name:'gaya',age:23,course:'IT'},




]
*/

//console.log(students)
//define 10 student Jason
let students = [
  { regno: '2021/ICT/11', name: 'sanjana', age: 21, course: 'Bio', gender: 'Male', gpa: 3.5 },
  { regno: '2021/ICT/12', name: 'pabasara', age: 22, course: 'IT', gender: 'Male', gpa: 3.7 },
  { regno: '2021/ICT/13', name: 'Gayesha', age: 23, course: 'Maths', gender: 'Female', gpa: 3.9 },
  { regno: '2021/ICT/14', name: 'Gavesha', age: 24, course: 'IT', gender: 'Male', gpa: 3.2 },
  { regno: '2021/ICT/15', name: 'Nira', age: 20, course: 'Bio', gender: 'Female', gpa: 3.8 },
  { regno: '2021/ICT/16', name: 'Amira', age: 22, course: 'IT', gender: 'Male', gpa: 3.4 },
  { regno: '2021/ICT/17', name: 'Samara', age: 23, course: 'Maths', gender: 'Female', gpa: 3.6 },
  { regno: '2021/ICT/18', name: 'Alisha', age: 21, course: 'IT', gender: 'Male', gpa: 3.0 },
  { regno: '2021/ICT/19', name: 'Sophia', age: 24, course: 'Bio', gender: 'Female', gpa: 4.0 },
  { regno: '2021/ICT/20', name: 'Mark', age: 25, course: 'IT', gender: 'Male', gpa: 3.3 }
];

//store it in array
let itStudents = students.filter(student => student.course == 'IT');
console.log("IT Students:", itStudents);

//find the female students
let femaleStudents = students.filter(student => student.gender === 'Female');
console.log("Female Students:", femaleStudents);

//find the students who are folllowuing it course
console.log("All Students:", students);


//find the max and average GPA among the student
let maxGPA = Math.max(...students.map(student => student.gpa));
console.log("Maximum GPA:", maxGPA);

//Find the average GPA among the students
let totalGPA = students.reduce((sum, student) => sum + student.gpa, 0);
let averageGPA = totalGPA / students.length;
console.log("Average GPA:", averageGPA);
