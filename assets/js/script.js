let menuOptins = document.querySelector(".eventJs span")
let arrowImg = document.querySelector(".event1 > span > img")
let menuEvent = document.querySelector(".menuLInks")





  menuOptins.addEventListener("click", () => {
    if(menuEvent.className.includes('displaynone') ){
      menuEvent.classList.remove("displaynone")
      menuEvent.classList.add("jsClass")
      arrowImg.style.transform = "rotate(180deg)"
    }  else{
      menuEvent.classList.add("displaynone")
      menuEvent.classList.remove("jsClass")
      arrowImg.style.transform = "rotate(0)"
    }
  })




  let menuOptins2 = document.querySelector(".eventJS2 span")
  let arrowImg2 = document.querySelector(".eventJS2 > img")
  let menuEvent2 = document.querySelector(".abaCompany")
  

  menuOptins2.addEventListener("click", () => {
    if(menuEvent2.className.includes('companyNone') ){
      menuEvent2.classList.remove("companyNone")
      menuEvent2.classList.add("abacompany")
      arrowImg2.style.transform = "rotate(180deg)"
    }  else{
      menuEvent2.classList.add("companyNone")
      menuEvent2.classList.remove("abacompany")
      arrowImg2.style.transform = "rotate(0)"
    }
  })


  let  menuMobile = document.querySelector(".menuMobile")
  let imgMobile = document.querySelector(".navPt2 img")
  let imgcloseMobile = document.querySelector(".imgFechar img")

  imgMobile.addEventListener("click" , () => {
    menuMobile.style.display = "block"
  })

imgcloseMobile.addEventListener("click" , () => {
  menuMobile.style.display = "none"
})


let menuMomaNone = document.querySelector(".eventClickMenuMobaNone")
let imgMenuMomaNone = document.querySelector(".mobaEvet1 > img")
let spanEvent1 = document.querySelector(".mobaEvet1")

spanEvent1.addEventListener("click", () => {
  if(menuMomaNone.className.includes('eventClickMenuMobaNone') ){
    menuMomaNone.classList.remove("eventClickMenuMobaNone")
    imgMenuMomaNone.style.transform = "rotate(180deg)"

  }   else{
    menuMomaNone.classList.add("eventClickMenuMobaNone")
    imgMenuMomaNone.style.transform = "rotate(0deg)"
  }
})

let menuMomaNone2 = document.querySelector(".eventClickMenuMobaNone2")
let imgMenuMomaNone2 = document.querySelector(".mobaEvet2 > img")
let spanEvent2 = document.querySelector(".mobaEvet2")


spanEvent2.addEventListener("click", () => {
  if(menuMomaNone2.className.includes('eventClickMenuMobaNone2') ){
    menuMomaNone2.classList.remove("eventClickMenuMobaNone2")
    imgMenuMomaNone2.style.transform = "rotate(180deg)"

  }   else{
    menuMomaNone2.classList.add("eventClickMenuMobaNone2")
    imgMenuMomaNone2.style.transform = "rotate(0deg)"
  }
})
