const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const navbar = document.querySelector("nav");
const education = document.getElementById("education");
const education1 = document.getElementById("education-1");
const education2 = document.getElementById("education-2");
const education3 = document.getElementById("education-3");

toggle.addEventListener("click", function () {
    this.classList.toggle("fa-brush");
    if (this.classList.toggle("fa-solid-fa-brush")) {
        body.style.background = "#491919";
        navbar.style.background = "#491919";
        navbar.style.transition = "2s";
        education.style.background = "#321010";
        education1.style.background = "#321010";
        education2.style.background = "#321010";
        education3.style.background = "#321010";
        body.style.transition = "2s";
    }

    else{
        body.style.background = "#0c1022";
        navbar.style.background = "#0c1022";
        navbar.style.transition = "2s";
        education.style.background = "#0c1022";
        education1.style.background = "#0c1022";
        education2.style.background = "#0c1022";
        education3.style.background = "#0c1022";
        body.style.transition = "2s";
    }
});

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzkEUxvs8eHyrAVMO6-2G_Ezy_VQjcrWJAn3Zp5YGfXWbLPEOPHEVTfGdpBdlgmGWyCFw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Message sent successfully'
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
