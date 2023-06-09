const stars = document.querySelectorAll(".fa-star")
// const starss = document.getElementsByClassName("stars")[0].children;
const emogies = document.querySelectorAll(".far")
// console.log(stars, starss)

stars.forEach((check, index) => {
    check.addEventListener("click", ()=>{
        // console.log("clicked", index)
        console.log(index)
        updateProgess(index);
    })
});
function updateProgess(index){
    stars.forEach((elm, ind)=>{
        if(ind <= index){
            // console.log(ind, index)
            elm.classList.add("active")
        }else{
            elm.classList.remove("active")
        }
    })

    emogies.forEach(elm =>{
        elm.style.transform  = `translateX(-${index * 50}px)`
    })

}