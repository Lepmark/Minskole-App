let userId = document.getElementById("userId");
let Form1 = document.getElementById("Form1");
let Form2 = document.getElementById("Form2");
let Form3 = document.getElementById("Form3");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2")

 function displayForm2(){
    Form1.style.display = "none";
    Form2.style.display = "block";
    Form3.style.display = "none";
}
function displayForm3(){
    Form1.style.display = "none";
    Form2.style.display = "none";
    Form3.style.display = "block";
}


// functions to display navbar pages .......................
var studentsPage = document.getElementById("studentsPage");
var studentsPageLink = document.getElementById("studentsPageLink");
var mainPage = document.getElementById("mainPage");
var ourSchool = document.getElementById("ourSchool");
var ourSchoolLink = document.getElementById("ourSchoolLink");

function displayStudentsPage(){
    studentsPage.style.display = "block";
    studentsPageLink.style.color = "brown";
    ourSchoolLink.style.color= "black";
    mainPage.style.display ="none";
    ourSchool.style.display = "none";

}
function displayOurSchoolPage(){
    studentsPage.style.display = "none";
    mainPage.style.display ="none";
    ourSchool.style.display = "block";
    ourSchoolLink.style.color= "brown";
    studentsPageLink.style.color = "black";
     
}
//function to send a password reset form using web3forms ........

document.getElementById("forgotPasswordForm").addEventListener("submit", function(event){
    event.preventDefault(); //prevent form from submission....

    //get the value of the sender's name from the input....
    //initiate variable senderName.......
    let senderName = '';
//.....Loop the while function until a valid name is provided
    while (!senderName){
       senderName = prompt("Please Enter your Name:");
//.....show alert until senderName is not empty.....
       if (!senderName){
        alert("Please Enter your name to Proceed");
    }
    }

    //update the default value of the hidden input field "subject" to the name of the sender
    document.getElementById("senderName").value = `${senderName} is requesting a New Password for their Account!`;


    //then submit the form...
    this.submit();

});
