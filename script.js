const firstSection = document.querySelector(".firstsection");
const secondSection = document.querySelector(".secondsection");
const thirdSection = document.querySelector(".thirdsection");

const nextOnly = document.querySelector("#nextonlybtn");
const bTSU = document.querySelector("#backToSignUpbtn");
const next = document.querySelector("#nextbtn");
const bTPI = document.querySelector("#backToPibtn");
const submit = document.querySelector("#submitbtn");

nextOnly.addEventListener("click", function (){
    firstSection.style.display = "none";
    secondSection.style.display ="block";
});

bTSU.addEventListener("click", function (){
    firstSection.style.display = "block";
    secondSection.style.display ="none";
});

next.addEventListener("click", function (){
    secondSection.style.display ="none";
    thirdSection.style.display = "block";
});

bTPI.addEventListener( "click",function (){
    secondSection.style.display ="block";
    thirdSection.style.display = "none";
});