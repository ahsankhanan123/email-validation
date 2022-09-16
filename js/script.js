const input = document.querySelector("input"),
emailIcon = document.querySelector(".email-icon")

input.addEventListener("keyup", () =>{
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(input.value === ""){
    emailIcon.classList.replace("uil-check-circle", "uil-envelope");
    return emailIcon.style.color = "#b4b4b4";
  }
  if(input.value.match(pattern)){
    emailIcon.classList.replace("uil-envelope", "uil-check");
    return emailIcon.style.color = "#03940f"
  }
  emailIcon.classList.replace("uil-check", "uil-envelope");
  emailIcon.style.color = "#ff214a"
})