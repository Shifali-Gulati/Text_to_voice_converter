let speech=new SpeechSynthesisUtterance();
const a=document.querySelector("button");
a.addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})