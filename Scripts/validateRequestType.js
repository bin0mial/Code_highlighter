function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
	  return decodeURIComponent(name[1]);
}
var head = document.getElementsByTagName('head')[0];
var js = document.createElement("script");

js.type = "text/javascript";
language_used_element = document.getElementById("language-used");
code_lang = document.getElementById("code");
if (get("lang")=="java")
{
	js.src = "Scripts/shBrushJava.js";
	language_used_element.innerHTML = "Java"
	code_lang.className="java"
}
else
{
	js.src = "Scripts/shBrushPython.js";
	language_used_element.innerHTML = "Python"
	code_lang.className="python"
	
}

head.appendChild(js);