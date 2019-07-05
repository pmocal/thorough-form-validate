var emailconf = document.getElementById("emailconf");
var email = document.getElementById("email");
var button  = document.getElementsByTagName('button')[0];
var error = document.querySelector('.error');
var password = document.getElementById("password");
var passwordconf = document.getElementById("passwordconf");


emailconf.addEventListener("input", function () {
	if (emailconf.value === document.getElementById("email").value) {
		emailconf.setCustomValidity('');
	}
	else {
		emailconf.setCustomValidity("Email confirmation should match email.");
	}
});

button.addEventListener("click", function (event) {
	if (email.value === "" || emailconf.value === "" || password.value === "" || passwordconf.value === "") {
		event.preventDefault();
	};
}, false);

passwordconf.addEventListener("input", function () {
	if (passwordconf.value === document.getElementById("passwordconf").value) {
		passwordconf.setCustomValidity('');
	}
	else {
		passwordconf.setCustomValidity("Password confirmation should match email.");
	}
});