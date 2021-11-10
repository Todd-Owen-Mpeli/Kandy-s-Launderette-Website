/*==================== SCROLL REVEAL ANIMATION ====================*/
AOS.init();

const backgroundDisplay = document.getElementById("backgroundDisplay");
// backgroundDisplay.style.backgroundImage = "../img/BackgroundImage.jpg";

/*===== NOTIFICATION DISPLAY =====*/
function inStoreOptionDisplay() {
	const showDisplay = document.getElementById("inStoregOption");
	const displayStyles = document.getElementById("info");
	const plusBtn = document.getElementById("inStoregOptionBtn");

	// Changing Div styles
	if (showDisplay.style.display === "none") {
		showDisplay.style.display = "block";
		displayStyles.style.color = "#fff";
		displayStyles.style.minHeight = "5.5rem";
		plusBtn.style.backgroundColor = "#ff0099";

		// More Featured Projects Button
		plusBtn.innerHTML = `<i class="bi bi-dash-lg"></i>`;
	} else {
		showDisplay.style.display = "none";
		displayStyles.style.color = "#111";
		plusBtn.style.backgroundColor = "#ff0099";
		// More Featured Projects Button
		plusBtn.innerHTML = `<i class="bi bi-plus-lg"></i>`;
	}
}

/*==================== BUTTON LISTENER ====================*/
// Submit Button Listener
inStoregOptionBtn.addEventListener("click", () => {
	inStoreOptionDisplay();
});

/*===== WEBSITE SCROLL REVEAL =====*/

/*==================== CONTACT US ====================*/

//
function validate() {
	var name = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");

	console.info(name);

	// error_message.style.padding = "10px";

	// var text;

	// if (name.length < 3) {
	// 	text = "Please Enter valid Name";
	// 	error_message.innerHTML = text;
	// 	return false;
	// }

	// if (isNaN(phone) || phone.length != 10) {
	// 	text = "Please enter valid Phone Number";
	// 	error_message.innerHTML = text;
	// 	return false;
	// }

	// if (email.indexOf("@") == -1 || email.length < 6) {
	// 	text = "Please Enter valid Email";
	// 	error_message.innerHTML = text;
	// 	return false;
	// }

	// if (subject.length < 10) {
	// 	text = "Please Re-enter a Subject";
	// 	error_message.innerHTML = text;
	// 	return false;
	// }

	// if (message.length <= 140) {
	// 	text = "Please Enter More Than 140 Characters";
	// 	error_message.innerHTML = text;
	// 	return false;
	// }

	// alert("Form Submitted Successfully!");
	// return true;
}
