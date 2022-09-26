const firstSection = document.querySelector(".firstsection");
const secondSection = document.querySelector(".secondsection");
const thirdSection = document.querySelector(".thirdsection");

const nextOnly = document.querySelector("#nextonlybtn");
const bTSU = document.querySelector("#backToSignUpbtn");
const next = document.querySelector("#nextbtn");
const bTPI = document.querySelector("#backToPIbtn");
const submit = document.querySelector("#submitbtn");



nextOnly.addEventListener("click", function (){
    const input1 = document.querySelector(".input1");
    const input2 = document.querySelector(".input2")
    const input3 = document.querySelector(".input3")
    // form validation
    let valid = true;
    valid = valid && input1.value !== "" && input2.value !== "" && input3.value !== ""
    if (valid) {
        firstSection.style.display = "none";
        secondSection.style.display ="block";
    }

    else{alert("please fill all fields");
    };
});

bTSU.addEventListener("click", function (){
    firstSection.style.display = "block";
    secondSection.style.display ="none";
});

next.addEventListener("click", function (){
    const input4 = document.querySelector(".input4");
    const input5 = document.querySelector(".input5")
    const input6 = document.querySelector(".input6")
    let valid = true;
    valid = valid && input4.value !== "" && input5.value !== "" && input6.value !== ""
    if (valid) {
        secondSection.style.display ="none";
        thirdSection.style.display = "block";
    }
    else{alert("please fill all fields");
}
});

bTPI.addEventListener("click", function (){
    secondSection.style.display ="block";
    thirdSection.style.display = "none";
});

submit.addEventListener("click", function (){
    const input7 = document.querySelector(".input7");
    const input8 = document.querySelector(".input8")
    const input9 = document.querySelector(".input9")
    let valid = true;
    valid = valid && input7.value !== "" && input8.value !== "" && input9.value !== ""
    if (valid) {

    }
    else{alert("please fill all fields");
}

})
