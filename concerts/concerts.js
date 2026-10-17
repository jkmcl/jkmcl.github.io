"use strict";

const select = document.getElementById("id-select-year");

// Create options under select
select.add(new Option("Please select..."));
for (let i = 2027; i >= 1999; --i) {
	select.add(new Option(i));
}
select.add(new Option("Earlier", "199x"));

// Add event listener to select
select.addEventListener("change", () => {
	window.location.href = `concerts${select.value}.html`;
});
