function commit_code(){
	code = document.getElementById("code");
	code.innerHTML = code.value;
}
function code_generator(){
	if (document.getElementsByClassName("dp-highlighter").length > 0) {
		document.body.removeChild(document.getElementsByClassName("dp-highlighter")[0]);
	}
	dp.SyntaxHighlighter.HighlightAll('code', true,false);
	document.getElementById("code").style.display="block";
}
function clear_code_generator(){
	if (document.getElementsByClassName("dp-highlighter").length > 0) {
		document.body.removeChild(document.getElementsByClassName("dp-highlighter")[0]);
	}
}
function show_code(){
	document.getElementById("code").style.display="block";
}
function hide_code(){
	document.getElementById("code").style.display="none";
}
function clear_code(){
	code = document.getElementById("code");
	code.value = "";
	code.innerHTML = "";
}
document.getElementById("commit-code").addEventListener("click", commit_code);
document.getElementById("generate-code").addEventListener("click", code_generator);
document.getElementById("clear-generated-code").addEventListener("click", clear_code_generator);
document.getElementById("show-code").addEventListener("click", show_code);
document.getElementById("hide-code").addEventListener("click", hide_code);
document.getElementById("clear-code").addEventListener("click", clear_code);

//document.body.removeChild(document.getElementById("code"));