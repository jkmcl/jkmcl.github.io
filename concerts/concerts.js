function createOption(text, value) {
	var option = document.createElement("option");
	option.text = text;
	if (value) {
		option.value = value;
	}
	return option;
}

window.onload = function() {
	var select = document.getElementById("yearSelect");

	// Populate options
	select.add(createOption("Please select..."));
	for (var i = 2021; i >= 1999; --i) {
		select.add(createOption(i));
	}
	select.add(createOption("Earlier", "199x"));

	// Add event listener
	select.onchange = function() {
		var value = select.options[select.selectedIndex].value;
		if (!value) {
			value = select.options[select.selectedIndex].text;
		}
		window.location.href = "concerts" + value + ".html";
	}
}
