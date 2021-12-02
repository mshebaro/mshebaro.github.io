$( document ).ready(function() {
  var check1=setInterval(check,"10");
function check(){
$("#verticalbar").height($("#Content").height());
var temp = navigator.userAgent;
var regularexpression = /android|iphone|kindle|ipad/i;
let mobile = regularexpression.test(temp);
  if(window.innerHeight > window.innerWidth){
    if(mobile==true){
    alert("Please rotate your phone to landscape orientation!");
  }
}
}
});
document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1){
     event.preventDefault();
 }
},false);
var touched = 0;
document.addEventListener('touchend', function (event) {
  var daterightnow = (new Date()).getTime();
  if (daterightnow - touched <= 290){
    event.preventDefault();
  }
  touched = daterightnow;
},false);
function scroll(){
  var element=document.getElementById("Content");
  var maxScrollLeft = element.scrollWidth - element.clientWidth;
  var x=0;
  var scroll1=setInterval(scroll2,15);
  function scroll2(){
      if($("#Content").scrollLeft()==0){
        x=0;
      }
      if(x==0){
    $("#Content").scrollLeft($("#Content").scrollLeft()+1);
  }
      if($("#Content").scrollLeft()>=maxScrollLeft){
        x=1;
      }
      if(x==1){
      $("#Content").scrollLeft($("#Content").scrollLeft()-1);
    }
  }
  $("#Content").click(function(){
    clearInterval(scroll1);
  });
}

  function ConSize(){
    var c=document.getElementById("Content");
    c.style.height="100%";
    var x=parseInt(c.clientHeight,10);
    x=x-0.1;
    c.style.height=x+"px";

  }
function action(){
  resetBlinking();
  var body=document.getElementById("body");
  if(Back.style.visibility=="hidden"){
Back.style.visibility="visible";
Hamburger.style.visibility="hidden";
document.getElementById("textlogo").style.visibility="hidden";
document.getElementById("text").style.visibility="visible";
text.innerText=("Sections");
var tile1=document.getElementById("Tile1");
var tile2=document.getElementById("Tile2");
var tile3=document.getElementById("Tile3");
var tile4=document.getElementById("Tile4");
var tile5=document.getElementById("Tile5");
var tile6=document.getElementById("Tile6");
var tile7=document.getElementById("Tile7");
document.getElementById("Menu").removeChild(tile1);
document.getElementById("Menu").appendChild(tile1);
document.getElementById("Menu").removeChild(tile2);
document.getElementById("Menu").appendChild(tile2);
document.getElementById("Menu").removeChild(tile3);
document.getElementById("Menu").appendChild(tile3);
document.getElementById("Menu").removeChild(tile4);
document.getElementById("Menu").appendChild(tile4);
document.getElementById("Menu").removeChild(tile5);
document.getElementById("Menu").appendChild(tile5);
document.getElementById("Menu").removeChild(tile6);
document.getElementById("Menu").appendChild(tile6);
document.getElementById("Menu").removeChild(tile7);
document.getElementById("Menu").appendChild(tile7);
document.getElementById("Content").style.filter="blur(7px)";
openvertical();
}
else{
  Hamburger.style.visibility="visible";
  Back.style.visibility="hidden";
    document.getElementById("text").style.visibility="hidden";
    document.getElementById("textlogo").style.visibility="visible";
    var logo=document.getElementById("textlogo");
    document.getElementById("body").removeChild(logo);
    document.getElementById("body").appendChild(logo);
    document.getElementById("Content").style.filter="blur(0px)";
closevertical();
}
}
function closevertical(){
  var v=document.getElementById("Menu");
  var i=parseInt(v.style.left,"10");
  var move1=setInterval(move,"10");
  function move(){
    if(i>-21){
    i=i-1;
  v.style.left=i+"%";
  document.getElementById("verticalbar").style.left=i+"%";
}else{
  clearInterval(move1);
}
}
}
function openvertical(){
    var v=document.getElementById("Menu");
    var i=parseInt(v.style.left,"10");
    var move1=setInterval(move,"10");
function move(){
    if(i<0){
      i=i+1;
    v.style.left=i+"%";
    document.getElementById("verticalbar").style.left=i+"%";
  }else{
    clearInterval(move1);
  }
}
}
function TilesHover1(){
text.innerText="Biography";
document.getElementById("textlogo").style.visibility="hidden";
document.getElementById("text").style.visibility="visible";
}
function TilesHover2(){
text.innerText="Education";
document.getElementById("textlogo").style.visibility="hidden";
document.getElementById("text").style.visibility="visible";
}
function TilesHover3(){
text.innerText="Extracurricular Activities";
document.getElementById("textlogo").style.visibility="hidden";
document.getElementById("text").style.visibility="visible";
}
function TilesHover4(){
text.innerText="Teaching";
document.getElementById("textlogo").style.visibility="hidden";
document.getElementById("text").style.visibility="visible";
}
function TilesHover5(){
text.innerText="Publications & Projects";
document.getElementById("textlogo").style.visibility="hidden";
document.getElementById("text").style.visibility="visible";
}
function TilesHover6(){
text.innerText="Research Interests";
document.getElementById("textlogo").style.visibility="hidden";
document.getElementById("text").style.visibility="visible";
}
function TilesHover7(){
text.innerText="About";
document.getElementById("textlogo").style.visibility="hidden";
document.getElementById("text").style.visibility="visible";
}
function HoverDefault(){
  if(verticalbar.style.left>="0%"){
  text.innerText="Sections";
  document.getElementById("textlogo").style.visibility="hidden";
  document.getElementById("text").style.visibility="visible";
}else{
  document.getElementById("text").style.visibility="hidden";
  document.getElementById("textlogo").style.visibility="visible";
}
}
var x=0;
function Logo(){
  if(x==1){
    return 1;
  }
  var i=0;
  var l=document.getElementById("Logo");
  var animate1=setInterval(animate,1);
  x=1;
  l.src= "Data/logo.gif";
  function animate(){
    i=i+0.03;
    l.style.left=i+"%";
    if(i>100){
      clearInterval(animate1);
     Logo1();
    }
    }
  }
  function Logo1(){
    var i=100;
    var l=document.getElementById("Logo");
    var animate2=setInterval(animate3,1);
    x=1;
    l.src= "Data/logo_flip.gif";
    function animate3(){
      i=i-0.03;
      l.style.left=i+"%";
      if(i<0){
        clearInterval(animate2);
        x=0;
        Logo();
      }
      }
  }
function About(){
  var wait1=setInterval(wait,1);
  var i=0;
  function wait(){
    if(i==100){
      clearInterval(wait1);
  alert("- Design & Scripting by: Muhieddine Shebaro\nexcept for the icons (source: Google Images) and fonts (source: www.DaFonts.com).\n- Created purely with Javascript, CSS, HTML5, PHP, and JQuery. (no external libraries or frameworks involved)\n- Version 1.2 (resolved design related bugs and webpage is now optimized for mobile phones).\n- Fun Fact: The roaming animal at the top is a Bobcat!\n\n \"The pain you feel today will be strength you feel tomorrow.\"\n    — Stephan Richards"); }
  else{
  i++;
}
  }
}
function tile1link(){
if($("#dialog").css('visibility') === 'visible'){
  return;
}
action();
var introductionimage=document.getElementById("IntroductionImage");
var introduction=document.getElementById("Introduction");
introduction.scrollIntoView();
resetBlinking();
introductionimage.style.animation="blink 2.5s infinite";
}
function tile2link(){
  if($("#dialog").css('visibility') === 'visible'){
    return;
  }
  action();
  var educationimage=document.getElementById("EducationImage");
  document.getElementById("Education").scrollIntoView();
  resetBlinking();
  educationimage.style.animation="blink 2.5s infinite";
}
function tile3link(){
  if($("#dialog").css('visibility') === 'visible'){
    return;
  }
  action();
  document.getElementById("Hobbies").scrollIntoView();
  var hobbiesimage=document.getElementById("HobbiesImage");
  resetBlinking();
  hobbiesimage.style.animation="blink 2.5s infinite";
}
function tile4link(){
  if($("#dialog").css('visibility') === 'visible'){
    return;
  }
  action();
  document.getElementById("Working").scrollIntoView();
  var workingimage=document.getElementById("WorkingImage");
  resetBlinking();
  workingimage.style.animation="blink 2.5s infinite";
}
function tile5link(){
  if($("#dialog").css('visibility') === 'visible'){
    return;
  }
  action();
  document.getElementById("Publications").scrollIntoView();
  var publicationsimage=document.getElementById("PublicationsImage");
  resetBlinking();
  publicationsimage.style.animation="blink 2.5s infinite";
}
function tile6link(){
  if($("#dialog").css('visibility') === 'visible'){
    return;
  }
  action();
  document.getElementById("Research Interests").scrollIntoView();
  var researchimage=document.getElementById("ResearchImage");
  resetBlinking();
  researchimage.style.animation="blink 2.5s infinite";
}
$( document ).ready(function(){
  var dialog=document.getElementById('dialog');
  var introduction=document.getElementById('Introduction');
  var education=document.getElementById('Education');
  var languages=document.getElementById('Languages');
  var research=document.getElementById('Research Interests');
  var hobbies=document.getElementById('Hobbies');
  var publications=document.getElementById('Publications');
  var work =document.getElementById('Working');
  var contact=document.getElementById('Contact Information');
  var main=document.getElementById("Content");
      introduction.onclick = function() {
        resetBlinking();
        dialog.style.animation="fadeinn 0.5s"
        dialog.style.animationDelay="0.5s";
        dialog.style.animationFillMode="forwards";
        introduction.style.animation="scaleout 0.5s";
        education.style.animation="scaleout 0.5s";
        languages.style.animation="scaleout 0.5s";
        research.style.animation="scaleout 0.5s";
        hobbies.style.animation="scaleout 0.5s";
        publications.style.animation="scaleout 0.5s";
        work.style.animation="scaleout 0.5s";
        contact.style.animation="scaleout 0.5s";
        main.removeChild(introduction);
        main.appendChild(introduction);
        main.removeChild(education);
        main.appendChild(education);
        main.removeChild(research);
        main.appendChild(research);
        main.removeChild(publications);
        main.appendChild(publications);
        main.removeChild(work);
        main.appendChild(work);
        main.removeChild(languages);
        main.appendChild(languages);
        main.removeChild(hobbies);
        main.appendChild(hobbies);
        main.removeChild(contact);
        main.appendChild(contact);
        try{
        main.removeChild(dialog);
      }catch(error){}
        main.appendChild(dialog);
        main.style.overflowX="hidden";
        dialog.style.left=main.scrollLeft+"px";
        dialog.style.backgroundColor=introduction.style.backgroundColor;
        loadContent(1);
          };
          education.onclick = function() {
            resetBlinking();
            dialog.style.animation="fadeinn 0.5s"
            dialog.style.animationDelay="0.5s";
            dialog.style.animationFillMode="forwards";
            introduction.style.animation="scaleout 0.5s";
            education.style.animation="scaleout 0.5s";
            languages.style.animation="scaleout 0.5s";
            research.style.animation="scaleout 0.5s";
            hobbies.style.animation="scaleout 0.5s";
            publications.style.animation="scaleout 0.5s";
            work.style.animation="scaleout 0.5s";
            contact.style.animation="scaleout 0.5s";
            main.removeChild(introduction);
            main.appendChild(introduction);
            main.removeChild(education);
            main.appendChild(education);
            main.removeChild(research);
            main.appendChild(research);
            main.removeChild(publications);
            main.appendChild(publications);
            main.removeChild(work);
            main.appendChild(work);
            main.removeChild(languages);
            main.appendChild(languages);
            main.removeChild(hobbies);
            main.appendChild(hobbies);
            main.removeChild(contact);
            main.appendChild(contact);
            try{
            main.removeChild(dialog);
          }catch(error){}
            main.appendChild(dialog);
            main.style.overflowX="hidden";
            dialog.style.left=main.scrollLeft+"px";
            dialog.style.backgroundColor=education.style.backgroundColor;
            loadContent(2);
              };
          languages.onclick = function() {
            resetBlinking();
                dialog.style.animation="fadeinn 0.5s"
                dialog.style.animationDelay="0.5s";
                dialog.style.animationFillMode="forwards";
                introduction.style.animation="scaleout 0.5s";
                education.style.animation="scaleout 0.5s";
                languages.style.animation="scaleout 0.5s";
                research.style.animation="scaleout 0.5s";
                hobbies.style.animation="scaleout 0.5s";
                publications.style.animation="scaleout 0.5s";
                work.style.animation="scaleout 0.5s";
                contact.style.animation="scaleout 0.5s";
                main.removeChild(introduction);
                main.appendChild(introduction);
                main.removeChild(education);
                main.appendChild(education);
                main.removeChild(research);
                main.appendChild(research);
                main.removeChild(publications);
                main.appendChild(publications);
                main.removeChild(work);
                main.appendChild(work);
                main.removeChild(languages);
                main.appendChild(languages);
                main.removeChild(hobbies);
                main.appendChild(hobbies);
                main.removeChild(contact);
                main.appendChild(contact);
                try{
                main.removeChild(dialog);
              }catch(error){}
                main.appendChild(dialog);
                main.style.overflowX="hidden";
                dialog.style.left=main.scrollLeft+"px";
                dialog.style.backgroundColor=languages.style.backgroundColor;
                loadContent(3);
                  };
                  research.onclick = function() {
                    resetBlinking();
                    dialog.style.animation="fadeinn 0.5s"
                    dialog.style.animationDelay="0.5s";
                    dialog.style.animationFillMode="forwards";
                    introduction.style.animation="scaleout 0.5s";
                    education.style.animation="scaleout 0.5s";
                    languages.style.animation="scaleout 0.5s";
                    research.style.animation="scaleout 0.5s";
                    hobbies.style.animation="scaleout 0.5s";
                    publications.style.animation="scaleout 0.5s";
                    work.style.animation="scaleout 0.5s";
                    contact.style.animation="scaleout 0.5s";
                    main.removeChild(introduction);
                    main.appendChild(introduction);
                    main.removeChild(education);
                    main.appendChild(education);
                    main.removeChild(research);
                    main.appendChild(research);
                    main.removeChild(publications);
                    main.appendChild(publications);
                    main.removeChild(work);
                    main.appendChild(work);
                    main.removeChild(languages);
                    main.appendChild(languages);
                    main.removeChild(hobbies);
                    main.appendChild(hobbies);
                    main.removeChild(contact);
                    main.appendChild(contact);
                    try{
                    main.removeChild(dialog);
                  }catch(error){}
                    main.appendChild(dialog);
                    main.style.overflowX="hidden";
                    dialog.style.left=main.scrollLeft+"px";
                    dialog.style.backgroundColor=research.style.backgroundColor;
                    loadContent(4);
                      };
                      hobbies.onclick = function() {
                        resetBlinking();
                        dialog.style.animation="fadeinn 0.5s"
                        dialog.style.animationDelay="0.5s";
                        dialog.style.animationFillMode="forwards";
                        introduction.style.animation="scaleout 0.5s";
                        education.style.animation="scaleout 0.5s";
                        languages.style.animation="scaleout 0.5s";
                        research.style.animation="scaleout 0.5s";
                        hobbies.style.animation="scaleout 0.5s";
                        publications.style.animation="scaleout 0.5s";
                        work.style.animation="scaleout 0.5s";
                        contact.style.animation="scaleout 0.5s";
                        main.removeChild(introduction);
                        main.appendChild(introduction);
                        main.removeChild(education);
                        main.appendChild(education);
                        main.removeChild(research);
                        main.appendChild(research);
                        main.removeChild(publications);
                        main.appendChild(publications);
                        main.removeChild(work);
                        main.appendChild(work);
                        main.removeChild(languages);
                        main.appendChild(languages);
                        main.removeChild(hobbies);
                        main.appendChild(hobbies);
                        main.removeChild(contact);
                        main.appendChild(contact);
                        try{
                        main.removeChild(dialog);
                      }catch(error){}
                        main.appendChild(dialog);
                        main.style.overflowX="hidden";
                        dialog.style.left=main.scrollLeft+"px";
                        dialog.style.backgroundColor=hobbies.style.backgroundColor;
                        loadContent(5);
                          };
                          publications.onclick = function() {
                            resetBlinking();
                            dialog.style.animation="fadeinn 0.5s"
                            dialog.style.animationDelay="0.5s";
                            dialog.style.animationFillMode="forwards";
                            introduction.style.animation="scaleout 0.5s";
                            education.style.animation="scaleout 0.5s";
                            languages.style.animation="scaleout 0.5s";
                            research.style.animation="scaleout 0.5s";
                            hobbies.style.animation="scaleout 0.5s";
                            publications.style.animation="scaleout 0.5s";
                            work.style.animation="scaleout 0.5s";
                            contact.style.animation="scaleout 0.5s";
                            main.removeChild(introduction);
                            main.appendChild(introduction);
                            main.removeChild(education);
                            main.appendChild(education);
                            main.removeChild(research);
                            main.appendChild(research);
                            main.removeChild(publications);
                            main.appendChild(publications);
                            main.removeChild(work);
                            main.appendChild(work);
                            main.removeChild(languages);
                            main.appendChild(languages);
                            main.removeChild(hobbies);
                            main.appendChild(hobbies);
                            main.removeChild(contact);
                            main.appendChild(contact);
                            try{
                            main.removeChild(dialog);
                          }catch(error){}
                            main.appendChild(dialog);
                            main.style.overflowX="hidden";
                            dialog.style.left=main.scrollLeft+"px";
                            dialog.style.backgroundColor=publications.style.backgroundColor;
                            loadContent(6);
                              };
                              work.onclick = function() {
                                resetBlinking();
                                dialog.style.animation="fadeinn 0.5s"
                                dialog.style.animationDelay="0.5s";
                                dialog.style.animationFillMode="forwards";
                                introduction.style.animation="scaleout 0.5s";
                                education.style.animation="scaleout 0.5s";
                                languages.style.animation="scaleout 0.5s";
                                research.style.animation="scaleout 0.5s";
                                hobbies.style.animation="scaleout 0.5s";
                                publications.style.animation="scaleout 0.5s";
                                work.style.animation="scaleout 0.5s";
                                contact.style.animation="scaleout 0.5s";
                                main.removeChild(introduction);
                                main.appendChild(introduction);
                                main.removeChild(education);
                                main.appendChild(education);
                                main.removeChild(research);
                                main.appendChild(research);
                                main.removeChild(publications);
                                main.appendChild(publications);
                                main.removeChild(work);
                                main.appendChild(work);
                                main.removeChild(languages);
                                main.appendChild(languages);
                                main.removeChild(hobbies);
                                main.appendChild(hobbies);
                                main.removeChild(contact);
                                main.appendChild(contact);
                                try{
                                main.removeChild(dialog);
                              }catch(error){}
                                main.appendChild(dialog);
                                main.style.overflowX="hidden";
                                dialog.style.left=main.scrollLeft+"px";
                                dialog.style.backgroundColor=work.style.backgroundColor;
                                loadContent(7);
                                  };
                                contact.onclick = function() {
                                  resetBlinking();
                                    dialog.style.animation="fadeinn 0.5s"
                                    dialog.style.animationDelay="0.5s";
                                    dialog.style.animationFillMode="forwards";
                                    introduction.style.animation="scaleout 0.5s";
                                    education.style.animation="scaleout 0.5s";
                                    languages.style.animation="scaleout 0.5s";
                                    research.style.animation="scaleout 0.5s";
                                    hobbies.style.animation="scaleout 0.5s";
                                    publications.style.animation="scaleout 0.5s";
                                    work.style.animation="scaleout 0.5s";
                                    contact.style.animation="scaleout 0.5s";
                                    main.removeChild(introduction);
                                    main.appendChild(introduction);
                                    main.removeChild(education);
                                    main.appendChild(education);
                                    main.removeChild(research);
                                    main.appendChild(research);
                                    main.removeChild(publications);
                                    main.appendChild(publications);
                                    main.removeChild(work);
                                    main.appendChild(work);
                                    main.removeChild(languages);
                                    main.appendChild(languages);
                                    main.removeChild(hobbies);
                                    main.appendChild(hobbies);
                                    main.removeChild(contact);
                                    main.appendChild(contact);
                                    main.style.overflowX="hidden";
                                    dialog.style.left=main.scrollLeft+"px";
                                    dialog.style.backgroundColor=contact.style.backgroundColor;
                                    try{
                                    main.removeChild(dialog);
                                  }catch(error){}
                                    main.appendChild(dialog);
                                    loadContent(8);
                                      };

});

function closedialog(){
  var dialog=document.getElementById('dialog');
  var introduction=document.getElementById('Introduction');
  var education=document.getElementById('Education');
  var languages=document.getElementById('Languages');
  var research=document.getElementById('Research Interests');
  var hobbies=document.getElementById('Hobbies');
  var publications=document.getElementById('Publications');
  var work =document.getElementById('Working');
  var contact=document.getElementById('Contact Information');
  var main=document.getElementById("Content");
  introduction.style.animation="scalein 2s";
  introduction.style.animationFillMode="forwards";
  education.style.animation="scalein 2s";
  education.style.animationFillMode="forwards";
  languages.style.animation="scalein 2s";
  languages.style.animationFillMode="forwards";
  research.style.animation="scalein 2s";
  research.style.animationFillMode="forwards";
  hobbies.style.animation="scalein 2s";
  hobbies.style.animationFillMode="forwards";
  publications.style.animation="scalein 2s";
  publications.style.animationFillMode="forwards";
  work.style.animation="scalein 2s";
  work.style.animationFillMode="forwards";
  contact.style.animation="scalein 2s";
  contact.style.animationFillMode="forwards";
  dialog.style.visibility="hidden";
  main.removeChild(introduction);
  main.appendChild(introduction);
  main.removeChild(education);
  main.appendChild(education);
  main.removeChild(research);
  main.appendChild(research);
  main.removeChild(publications);
  main.appendChild(publications);
  main.removeChild(work);
  main.appendChild(work);
  main.removeChild(languages);
  main.appendChild(languages);
  main.removeChild(hobbies);
  main.appendChild(hobbies);
  main.removeChild(contact);
  main.appendChild(contact);
  main.removeChild(dialog);
  main.style.overflowX="visible";
}
function resetBlinking(){
  var introductionimage=document.getElementById("IntroductionImage");
  var educationimage=document.getElementById("EducationImage");
  var hobbiesimage=document.getElementById("HobbiesImage");
  var workingimage=document.getElementById("WorkingImage");
  var publicationsimage=document.getElementById("PublicationsImage");
  var researchimage=document.getElementById("ResearchImage");
  hobbiesimage.style.animation="";
  educationimage.style.animation="";
  introductionimage.style.animation="";
  workingimage.style.animation="";
  publicationsimage.style.animation="";
  researchimage.style.animation="";

}
function loadContent(number) {
  switch(number) {
  case 1:
  document.getElementById("whitecontent").innerHTML='<object style="height:100%;width:100%;border-radius:30px;" type="text/html" data="Data/Biography.html" ></object>';
  document.getElementById("titletext").innerText='BIOGRAPHY';
    break;
  case 2:
  document.getElementById("whitecontent").innerHTML='<object style="height:100%;width:100%;border-radius:30px;" type="text/html" data="Data/Education.html" ></object>';
  document.getElementById("titletext").innerText='EDUCATION';
    break;
  case 3:
  document.getElementById("whitecontent").innerHTML='<object style="height:100%;width:100%;border-radius:30px;" type="text/html" data="Data/Languages.html" ></object>';
  document.getElementById("titletext").innerText='LANGUAGES';
    break;
  case 4:
  document.getElementById("whitecontent").innerHTML='<object style="height:100%;width:100%;border-radius:30px;" type="text/html" data="Data/Research.html" ></object>';
  document.getElementById("titletext").innerText='Research Interests';
    break;
  case 5:
  document.getElementById("whitecontent").innerHTML='<object style="height:100%;width:100%;border-radius:30px;" type="text/html" data="Data/Extra.html" ></object>';
  document.getElementById("titletext").innerText='Extracurricular Activities/Hobbies';
    break;
  case 6:
  document.getElementById("whitecontent").innerHTML='<object style="height:100%;width:100%;border-radius:30px;" type="text/html" data="Data/Publications.html" ></object>';
  document.getElementById("titletext").innerText='PUBLICATIONS & RESEARCH PROJECTS';
    break;
  case 7:
  document.getElementById("whitecontent").innerHTML='<object style="height:100%;width:100%;border-radius:30px;" type="text/html" data="Data/Teaching.html" ></object>';
  document.getElementById("titletext").innerText='TEACHING';
    break;
  case 8:
  document.getElementById("whitecontent").innerHTML='<object style="height:100%;width:100%;border-radius:30px;" style="height:100%;width:100%;"type="text/html" data="Data/Contact.html" ></object>';
  document.getElementById("titletext").innerText='CONTACT INFORMATION';
    break;
  default:

}
}
