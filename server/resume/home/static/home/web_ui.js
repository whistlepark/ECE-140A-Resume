document.addEventListener('DOMContentLoaded',function(){
var mode = document.getElementById("switch-mode");
console.log("Mode",mode);
console.log("theme",localStorage.getItem("theme"));
setTheme("theme-dark");

mode.addEventListener("click",function(event){
          var theBttn = event.target;
          if (undefined === theBttn) theBttn = event.target.parentNode;
          if(localStorage.getItem("theme") == "theme-dark"){
                    theBttn.innerHTML = "&#9729";
                    console.log("IS SUN");
                    setTheme("theme-light");
          }
          else{
                    console.log("IS NOT SUN");
                    setTheme("theme-dark");
                    theBttn.innerHTML = "&#9728";

          }
          var reload = document.querySelector("mode");
})

function setTheme(themeName){
          localStorage.setItem("theme", themeName);
          document.documentElement.className = themeName;
}
function toggleTheme(){
if(localStorage.getItem("theme")==="theme-dark"){
         setTheme("theme-dark");
}
else{
          setTheme("theme-light");
}
}
});