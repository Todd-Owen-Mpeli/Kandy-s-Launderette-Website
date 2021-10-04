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

/*==================== QUESTIONNAIRE INFO ====================*/
// Submit Button Listener
inStoregOptionBtn.addEventListener("click", () => {
	inStoreOptionDisplay();
});
