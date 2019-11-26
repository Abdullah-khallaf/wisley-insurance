// work on navbar responsive
const navslide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".response");
    const navLinks = document.querySelectorAll(".response li");

    

    burger.addEventListener('click', () => {
      
        //toggle nav
        
        nav.classList.toggle("nav-active");
        
        //animate links
        
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navlinksfade .5s ease forwards ${index / 7 + 0.3}s ` ;
            }
        });
    });
}
navslide();
//scroll down button
function scrollWin() {
    window.scrollBy(0, 800);
  }
  function scrollWin2() {
     window.scrollBy(0, 550);
   }
// work on the slider
addEventListener('onload',function () {
var i=0;
var p1=document.getElementById("feedbacks");
var p2=document.getElementById("feedbacks");
var p3=document.getElementById("feedbacks");
var p4=document.getElementById("feedbacks");
var feeds=[p1, p2, p3, p4,];

     setInterval(function(){
          document.getElementById("feedbacks").textContent=feeds[i];
          if(i<4){
               i++;
          }
          else{
               i=0;
          }
          },1000);
          
     function nex(){
          
          document.getElementById("feedbacks").textContent=feeds[i];
          if(i<4){
               i++;
          }
          else{
               i=0;
          }
     };
     function pre(){
          document.getElementById("feedbacks").textContent=feeds[i];
          if(i>0){
               i--;
          }
          else{
               i=4;
          };
     }
    });
