// --------------Booking selector---------------

let selectBtn = document.querySelectorAll(".select-btn")
let SelectMenu = document.querySelectorAll(".select-menu")


selectBtn.forEach((opt) =>{
    opt.addEventListener("click", ()=>{
        let k = opt.parentElement
        k.classList.toggle("active-select")
    })
})
     SelectMenu.forEach((optn) =>{
        let e = optn;
    let options = e.querySelectorAll(".option")
    let sBtn_text = e.querySelector(".sbtn-text")
    options.forEach((optio) => {
        optio.addEventListener("click", () => {
            let selectedOption = optio.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            e.classList.remove("active-select")
        })

    })
     })


    //  -----------------------Car-models---------------------
    

    let carnamebtns = document.getElementsByClassName("carname-btn")
    let cardetailscontainers = document.getElementsByClassName("car-details-container")

    function opentab(carmodel){
        for(carnamebtn of carnamebtns){
            carnamebtn.classList.remove("rd")
        }
        for(cardetailscontainer of cardetailscontainers){
            cardetailscontainer.classList.remove("active-models")
        }
        event.currentTarget.classList.add("rd")
        document.getElementById(carmodel).classList.add("active-models")
    }


// -----------------------------faq-section-----------------------------


let selectfaqs = document.getElementsByClassName("select-faq")
let answerfaqs = document.getElementsByClassName("answer-faq")
let rtts = document.getElementsByClassName("rtt")

const openfaq = (answer) =>{
    for(selectfaq of selectfaqs){
        selectfaq.classList.remove("rd")
    }
    for(answerfaq of answerfaqs){
        answerfaq.classList.remove("active-answer")
    }
    for(rtt of rtts){
        rtt.classList.remove("rt")
    }
    event.currentTarget.classList.add("rd")
    event.currentTarget.firstElementChild.nextElementSibling.classList.add("rt")
    document.getElementById(answer).classList.add("active-answer")
}


// -------------------------login-registration-pop-------------------------

let wrapper = document.querySelector(".wrapper")
let loginlink = document.querySelector(".login-link")
let registerlink = document.querySelector(".register-link")
let loginpopbtn = document.querySelector(".loginpopbtn")
let respobtn = document.querySelector(".respo")
let iconclose = document.querySelector(".cancel-icon")

registerlink.addEventListener("click", ()=>{
    wrapper.classList.add('act')
})
loginlink.addEventListener("click", ()=>{
    wrapper.classList.remove('act')
})
loginpopbtn.addEventListener("click", ()=>{
    wrapper.classList.toggle('act-pop')
})
respobtn.addEventListener("click", ()=>{
    wrapper.classList.toggle('act-pop')
})
iconclose.addEventListener("click", ()=>{
    wrapper.classList.remove('act-pop')
})

// ---------------sidebar---------------------

let barr = document.getElementById("barr")
let cross = document.getElementById("cross")
let sidemenu = document.getElementById("sidemenu")

barr.addEventListener("click", () =>{
    sidemenu.classList.add("showsidebar");
})
cross.addEventListener("click", ()=>{
    sidemenu.classList.remove("showsidebar");
})
document.addEventListener("mouseup", (m)=>{
    if(!sidemenu.contains(m.target)){
        sidemenu.classList.remove("showsidebar");
    }
})