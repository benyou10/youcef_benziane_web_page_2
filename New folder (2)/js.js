const prNav=document.querySelector(".pr-nav");
const navToggle=document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click",() =>{
    const visibility=prNav.getAttribute("data-visible");
    if(visibility==="false"){
        prNav.setAttribute("data-visible",true);
        navToggle.setAttribute("aria-expended",true);
    }
    if(visibility==="true"){
        prNav.setAttribute("data-visible",false);
        navToggle.setAttribute("aria-expended",false);
    }
    
})