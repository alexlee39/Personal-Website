let theme = localStorage.getItem('theme');
let submitBtn = document.getElementById('submit-btn');
let form = document.querySelector('#contact-form');
// Sets defaults theme or Preserves previously saved themes 
if(theme == null){
    setTheme('light');
}
else{
    setTheme(theme);
}

//Manages the themes when clicking the theme dots
let themeDots = document.getElementsByClassName("theme-dot");
for (var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log("Button clicked");
        console.log("Option clicked:", mode);
        setTheme(mode);
    })
}

// Actually changes the themes when functions is called
function setTheme(mode){
    if(mode == "light"){
        document.getElementById("theme-css").href = "style.css";
    }
    if(mode == "blue"){
        document.getElementById("theme-css").href = "bluetheme.css";
    }
    if (mode == "green"){
        document.getElementById("theme-css").href = "greentheme.css";
    }
    if (mode == "purple") {
        document.getElementById("theme-css").href = "purpletheme.css";
    }
    localStorage.setItem('theme', mode);
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log("Btn clicked");
    let name = document.getElementById('name').value;
    let subject = document.querySelector('#subject').value;
    let email = document.getElementById('email').value;
    let message = document.querySelector('#message').value;
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);
    sendEmail(form);
});

function sendEmail(form){
    emailjs.sendForm('service_u4u6xey', 'template_b9pc2lo' , form)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
}