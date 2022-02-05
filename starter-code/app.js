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
    /*
    setInterval((value) => {
        value = document.querySelectorAll(".main .dest-click")
        console.log(value)
    }, 1000);
    */
   const switchPlanets = () =>{
       const sectionList = document.querySelectorAll(".main")
       destLinks.forEach(element => {
           element.addEventListener("click", (e)=>{
               console.log
               sectionList.forEach(section=>{
                   if (element.dataset.id === section.id){
                       section.classList.add("show-main")
                   }
                   else section.classList.remove("show-main")
               })
           })
       });
   }
   switchPlanets()

})()