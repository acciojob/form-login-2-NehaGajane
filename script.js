//your JS code here. If required.
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let phone = document.getElementById('phone');
let email = document.getElementById('email');


document.getElementById('btn').addEventListener('click', function() {
	alert(`First Name: ${fname.value} /n
Last Name: ${lname.value} /n	Phone Number: ${phone.value} /n
Email ID: ${email.value}`);
});