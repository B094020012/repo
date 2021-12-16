function screenOnload(){
    document.getElementById("dark_mode_button").onclick = darkMode;
}
function darkMode(){
    
        var buttonchange = document.getElementById("dark_mode_button");
        var body_content = document.getElementById("bodyid");
        var th1 = document.getElementById("th1");
        var th2 = document.getElementById("th2");
        var href = document.getElementById("href");
        if(buttonchange.innerText =="Dark mode"){
           buttonchange.innerText = "Light mode";
            href.style.color = "yellow";
            th1.style.color = "black";
            th2.style.color = "black";
            body_content.style.color = "white";
            body_content.style.backgroundColor = "black"; 
            
        }else if(buttonchange.innerText =="Light mode"){
            buttonchange.innerText = "Dark mode";
            href.style.color = null;
            body_content.style.color = null;
            body_content.style.backgroundColor = null;

        }
}
var a = document.getElementById("th1").tagName

window.onload = screenOnload;

