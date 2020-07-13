function update() {
	var text=document.getElementById('editor').value;
	document.getElementById('viewer').srcdoc=text;
}