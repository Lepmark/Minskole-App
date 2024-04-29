const userId = document.getElementById("userId");
let Form1 = document.getElementById("Form1");
let Form2 = document.getElementById("Form2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2")

button1.onclick = function(){
    Form1.style.display = "none";
    Form2.style.display = "block";
}