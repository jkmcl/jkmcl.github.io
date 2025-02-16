"use strict";

function createOption(text, value) {
	const option = document.createElement("option");
	option.text = text;
	if (value) {
		option.value = value;
	}
	return option;
}

const select = document.getElementById("id-select-year");

// Create options under select
select.add(createOption("Please select..."));
for (let i = 2025; i >= 1999; --i) {
	select.add(createOption(i));
}
select.add(createOption("Earlier", "199x"));

// Add event listener to select
select.addEventListener("change", () => {
	const value = select.options[select.selectedIndex].value;
	window.location.href = "concerts" + value + ".html";
});
