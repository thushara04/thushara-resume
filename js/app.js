
let menu = document.querySelector(".menu")
let togBtn = document.querySelector("#toggler")

togBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
});


/* progress bar logic */
const cirProgress = document.querySelectorAll(".progress");

Array.from(cirProgress).forEach(item => {
    const proVal = item.getAttribute("data-value");
    console.log(`proVal =`, proVal)

    const inCircle = item.querySelector(".inner-circle");
    const pro= item.querySelector(".pro-val")
    let startVal = 0;
    let endVal = Number(proVal);
    let speed = 50;
    let proColor = "deeppink";

    //timer

    const progress=setInterval(()=> {
        startVal++;
        pro.textContent = `${startVal}%`;
        pro.style.color='black'

        //adding background colors to each outer circle
        item.style.background=`conic-gradient(blue,${startVal *3.6}deg,deepskyblue 0deg)`
        if(startVal==endVal){
            clearInterval(progress) //to clear the timer
        }
    },speed)
});


// to display current year

document.querySelector(".yr").innerText = new Date().getFullYear();