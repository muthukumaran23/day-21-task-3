
const quote = document.getElementById("quotes");
const btn = document.getElementById("button");
function getData() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => {
     
      quote.innerHTML =`${data.quote}`
      
    })
    .catch((error) => {
      console.log(error);
    });
}
btn.addEventListener("click", getData);