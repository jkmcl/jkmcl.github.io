function changePage(selectObj)
{
	var value = selectObj.options[selectObj.selectedIndex].value;
	if (!value) {
		value = selectObj.options[selectObj.selectedIndex].text;
	}
	window.location.href="concerts"+value+".html";
}

var opts = "<option>Please select...</option>";
for (var i = 2019; i >= 1999; --i) {
	opts += "<option>" + i + "</option>";
}
opts += '<option value="199x">Earlier</option>';

document.write('<select onchange="changePage(this)">' + opts + '</select>');
