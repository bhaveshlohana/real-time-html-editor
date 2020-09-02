function update() {
	console.log("123");
	let htmlCode=document.getElementById("htmlCode").value;
	let cssCode=document.getElementById("cssCode").value;
	let javascriptCode=document.getElementById("javascriptCode").value;
	let text=htmlCode+"<style>"+cssCode+"</style>"+"<scri"+"pt>"+javascriptCode+"</scri"+"pt>";
	let iframe=document.getElementById('viewer').contentWindow.document;
	iframe.open();
	iframe.write(text);
	iframe.close();
	console.log("12345");
}