let enterButton = document.getElementById("enterButton");
let againButton = document.getElementById("againButton");
let output = document.getElementById("outputText");
let letters = document.getElementById("flip_letters");

let randomNumber = Math.floor(Math.random() * 51);

let clap = new Audio("sounds/clapsound.wav")
let wrongsound = new Audio("sounds/wrongsound.wav")

function checkNumber() {

    let input = document.getElementById("userInput").value;
    
    if(input == randomNumber){
      output.innerHTML="You Guessed Right" + "," + "it was" + " " + randomNumber;
      output.style.color="green";
      clap.play();
      let spans = document.querySelectorAll("span")
      for (let i of spans) {
          i.style.color="green";
      }  

    }
    else if(input > randomNumber && input < 100){
        output.innerHTML="You guessed too high";
        wrongsound.play();
    }
    else if(input < randomNumber && input > 1){
        output.innerHTML="You guessed too low";
        wrongsound.play();
    }
    else if(input < 1){
        output.innerHTML="Higher, it has to be between 1 and 100";
        wrongsound.play();
    }
    else if(isNaN(input)){
        output.innerHTML="That's not a number!";
        wrongsound.play();
    }
    else {
        output.innerHTML="Lower, it has to be between 1 and 50";
        wrongsound.play();
    }
}

enterButton.addEventListener("click", checkNumber);
againButton.addEventListener("click", function(){
    location.reload();
});
