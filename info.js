const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const edstat = document.getElementById('edstat');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const age = document.getElementById('age');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const usernameValue = username.value.trim();
	const edstatValue = edstat.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const ageValue = age.value.trim();
	
	if(firstnameValue === '') {
		setErrorFor(firstname, 'Firstname cannot be blank');
	} else if (!isName(firstname)) {
		setErrorFor(firstname, 'Not a valid FirstName');
	} else {
		setSuccessFor(firstname);
	}
	
	if(lastnameValue === '') {
		setErrorFor(lastname, 'Lastname cannot be blank');
		} else if (!isName(lastname)) {
		setErrorFor(firstname, 'Not a valid FirstName');
		} else {
		setSuccessFor(lastname);
	}
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(edstatValue === '') {
		setErrorFor(edstat, 'Education Status cannot be blank');
	} else {
		setSuccessFor(edstat);
	}	
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(ageValue === '') {
		setErrorFor(age, 'Age cannot be blank');
	} else if (ageValue < 18) {
		setErrorFor(age, 'Age cannot be less than 18');
	} 
	else if (ageValue > 60) {
		setErrorFor(age, 'Age cannot be more than 60');
	} else {
		setSuccessFor(age);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isName(name) {
	return /^[A-Z][a-z0-9_-]{3,19}$/.test(name);
}