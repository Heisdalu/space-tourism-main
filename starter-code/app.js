(function(){
    const toggle = document.querySelector("#mb-toggle")
    const ul = document.querySelector("#ul--mobile")

    const mobileToggle = () =>{
        toggle.addEventListener("click", ()=>{
            
            ul.classList.toggle("show-link")
        })
        
        
    }
    mobileToggle()

})()