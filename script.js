let input = document.getElementById('input');
let checkBtn = document.getElementById('checkBtn');
let clearBtn = document.getElementById('clearBtn');
let h1 = document.getElementById('h1');

function checkPrimeNumb(numb) {
	for(let i=2; i<numb; i++) {
		if (numb%i === 0) {
			return false;
		}
	}		
	return true;
}

function showResult() {
	let inputValue = Math.abs(Number(input.value).toFixed(0));
	let inputLength = input.value.length;
	let isPrimer = checkPrimeNumb(inputValue);
	h1.innerHTML ="";
	if (inputValue <= 1000000) {
		if(input.value === "0" || input.value === "1") {
			h1.innerHTML = "Opps!! "+inputValue+" is not a primer number";
		} else if (isPrimer && inputLength !== 0) {
				h1.innerHTML = "Congrat!! "+inputValue+" is  a primer number";	
		} else if(!isPrimer && inputLength !== 0) {
			h1.innerHTML = "Opps!! "+inputValue+" is not a primer number";
		} else {
			h1.innerHTML ="tipe a number";
		}
	} else {
		input.value = ""
		h1.innerHTML ="tipe a number less than 1 000 000 for better performance";
	}
}

function clearAll() {
	input.value = "";
	h1.innerHTML = "Check Numbers";
}

//Events
checkBtn.addEventListener("click", showResult);
clearBtn.addEventListener("click", clearAll);
input.addEventListener("keypress", (ev) => {
	if(ev.key === "Enter") {
		showResult()
	}
})