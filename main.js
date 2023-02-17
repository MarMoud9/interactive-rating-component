var submit_btn = document.querySelector(".submit-btn")
var btns = document.querySelectorAll(".notes")
function btn(a){
    console.log(a)
    submit_btn.disabled = false;
    for(i = 0; i< btns.length; i++){
        btns[i].classList.remove("active")
    }
    btns[a-1].classList.add("active")
    submit(a)
}
function submit(a){
    if(a != 69 ){
        i = a
    } else if (a === 69){
        document.querySelector("main").innerHTML = `
        <img src="images/illustration-thank-you.svg" alt="">
        <p class="rating">You selected ${i} out of 5</p>
        <h1>Thank you!</h1>
        <p class="cent">We appreciate yu taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! </p>
    `
        document.querySelector("main").style.alignItems = "center"
        document.querySelector("main").style.justifyContent= "space-evenly"
        document.querySelector("main .cent").style.textAlign = "center"
    }
}