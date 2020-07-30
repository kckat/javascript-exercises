function add (a, b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (nums) {
	let sum = 0;
	nums.forEach(number => sum += number)
	return sum 
}


function multiply (nums) {
	let sum = 1;
	nums.forEach(number => sum *= number)
	return sum;
}


function power(a, b) {
	return Math.pow(a,b);	
}

function factorial(a) {
	let sum = 1;
	for (let i = 1; i <= a; i++){
		sum = sum*i
		console.log(sum)
	}
	return sum;
}



module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}