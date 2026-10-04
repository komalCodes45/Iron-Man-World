// =============================
// LOADER
// =============================

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},3000);

});

// =============================
// EXPLORE BUTTON
// =============================

document.getElementById("exploreBtn").onclick=function(){

document.getElementById("timeline").scrollIntoView({

behavior:"smooth"

});

};

// =============================
// JARVIS VOICE
// =============================

document.getElementById("voiceBtn").onclick=function(){

let speech=new SpeechSynthesisUtterance();

speech.text="Welcome Sir. Jarvis is online. All systems are ready.";

speech.lang="en-US";

speech.rate=1;

speech.pitch=1;

speech.volume=1;

speechSynthesis.speak(speech);

};

// =============================
// AUTO VOICE
// =============================

setTimeout(()=>{

let speech=new SpeechSynthesisUtterance();

speech.text="Welcome to Iron Man Universe.";

speech.lang="en-US";
voice.rate = 0.9;

voice.pitch = 0.8;


speechSynthesis.speak(speech);

},4000);

// =============================
// MOUSE LIGHT
// =============================

const light=document.getElementById("mouseLight");

document.addEventListener("mousemove",(e)=>{

light.style.left=e.clientX-100+"px";

light.style.top=e.clientY-100+"px";

});

// =============================
// CARD HOVER EFFECT
// =============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.05) rotateY(10deg)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});

// =============================
// FLOATING HELMET CONTAINER
// =============================

const helmet=document.getElementById("helmet3D");

let angle=0;

function floating(){

angle+=0.03;

helmet.style.transform=

`translateY(${Math.sin(angle)*15}px)`;

requestAnimationFrame(floating);

}

floating();

// =============================
// GALLERY ANIMATION
// =============================

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.1)";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});

// =============================
// CONSOLE MESSAGE
// =============================

console.log("Iron Man Universe Loaded Successfully");

const img = document.getElementById("ironman");
const voice = document.getElementById("ironVoice");

img.addEventListener("click", () => {
    voice.currentTime = 0;
    voice.play();
});
const ironman = document.getElementById("ironman1");

ironman.addEventListener("click", function () {

    let voice = new SpeechSynthesisUtterance();

    voice.text = "i love you 3000";

    voice.lang = "en-US";

    voice.rate = 0.9;

    voice.pitch = 0.8;

    speechSynthesis.speak(voice);

});
