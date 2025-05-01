const btn1 = document.querySelector('.btn-on');
const img = document.querySelector('img');

btn1.addEventListener("click", () => {
    
    btn1.textContent = " press blub image to Turn Off";
    img.src = "bulb-on.png";  
});
img.addEventListener("click", () =>{
    img.src = "bulb-off.png"; 
    btn1.style.backgroundColor = "black";
    btn1.style.color = "white"; 
    btn1.textContent = "Turn on"

})
btn1.addEventListener("mouseenter", () =>{
    btn1.style.backgroundColor = "white";
    btn1.style.color = "black";
    
})
btn1.addEventListener("mouseleave", () =>{
    btn1.style.backgroundColor = "black";
    btn1.style.color = "white";
    
})