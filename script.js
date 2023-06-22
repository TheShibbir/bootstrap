

const body = document.getElementsByTagName("body");
const darkLight = document.getElementById("flexSwitchCheckChecked");


// switch mode
darkLight.addEventListener("click", () => {
  const darkLight = body[0].getAttribute("data-bs-theme");
  if ( darkLight === "light") {
    body[0].setAttribute("data-bs-theme", "dark");
   
  } else {
    body[0].setAttribute("data-bs-theme", "light");
   
  }
});



function loader(){
    const card = document.querySelectorAll('.placeholder');
    card.forEach(checkCard=>{
        checkCard.classList.remove('.placeholder')
    })
}



function loader(){
    const spinner = document.querySelectorAll('.spinnerSection');
    setTimeout(() => {
        spinner.style.opacity='0';
        
    }, 2000);
}