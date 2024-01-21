let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light');
}
else{
    setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log("Button clicked");
        console.log("Option clicked:", mode);
        setTheme(mode);
    })
}

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