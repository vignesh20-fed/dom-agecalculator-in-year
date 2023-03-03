
function calculate(){
	
	
let age = document.querySelector("#age").value;
let date = new Date(age);

if(age === ""){
	let result = document.getElementById("result");
	result.innerText="Please Enter a Date";
	result.style.color="red";
}

else {
	// let a = Date.now() - date.getTime();
	// var b = new Date(a);
	// let c = b.getFullYear();
	// var d = Math.round(c - 1970);
	// result.innerHTML=`your age is ${a}`;
	let age = document.querySelector("#age").value;
	let result = document.getElementById("result");
    let date = new Date(age);
	let current = new Date();
	
	let dateyear = date.getFullYear();
    
	console.log(dateyear);
	
	let currentyear = current.getFullYear();
	
	let yearresult = currentyear - dateyear;
	
	document.write(yearresult);
}

}


