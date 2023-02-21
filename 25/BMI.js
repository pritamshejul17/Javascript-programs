function BMI(height, weight){
let bmi = weight/Math.pow(height, 2);
return bmi;
}
let height = 1.79832;
	let weight = 70;
	
	let bmi = BMI(height, weight);
	process.stdout.write("The BMI is " + bmi + " so ");
	
	if (bmi < 18.5)
		console.log("underweight");
	else if (bmi >= 18.5 && bmi < 24.9)
		console.log("Normla Weight");
	else if (bmi >= 24.9 && bmi < 30)
	console.log("overweight");
	else if (bmi >= 30)
		console.log("Obes");
			
