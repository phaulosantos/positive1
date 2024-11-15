function random(){
	let r = Math. floor(Math.random()*10);
	//.floor() to round down to whoe Number
	//range is 0 up to but not including10
	
	//	create a var with the first part
	
	let page = document.getElementById("demo");
	page.innerHTML = r;
	
	//document.getElementById("demo").innerHTML = r;
	page.style.backgroundColor = "olive";
	//document.getElementById("demo").style.backgroundColor = "olive";
	page.style.color = "white";
}
