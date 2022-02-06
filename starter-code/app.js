(function(){
    const toggle = document.querySelector("#mb-toggle")
    const ul = document.querySelector("#ul--mobile")

    const mobileToggle = () =>{
        toggle.addEventListener("click", ()=>{
            
            ul.classList.toggle("show-link")
        })
        
        
    }
    mobileToggle()
    let destLinks = document.querySelectorAll(".main .dest-click")
<<<<<<< HEAD
    const destLinksTwo = document.querySelectorAll(".dot")
    const destLinksTech = document.querySelectorAll(".circle-link .circle button")
   const switchPlanets = (buttons) =>{
=======
   const switchPlanets = () =>{
>>>>>>> b9173f168bf8f7df1567a03a3f533238029a9b88
       const sectionList = document.querySelectorAll(".main")
       buttons.forEach(element => {
           element.addEventListener("click", (e)=>{
               sectionList.forEach(section=>{
                   if (element.dataset.id === section.id){
                       section.classList.add("show-main")
                   }
                   else section.classList.remove("show-main")
               })
           })
       });
   }
   switchPlanets(destLinks)
   switchPlanets(destLinksTwo)
   switchPlanets(destLinksTech)

})()
