var noOfDrumButtons = document. querySelectorAll(".drum").length;
for(var i=0 ; i< noOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonsInnerHtml = this.innerHTML;
        makeSound(buttonsInnerHtml);
        buttonAnimanitation(buttonsInnerHtml);

    })


}

var drumEmogi = document.getElementById("drumEmogi");
drumEmogi.addEventListener("click",function(){
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
})


document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimanitation(event.key);
})


function makeSound(key){

    switch (key) {
        case "w":
             var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
           break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
           break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
                
        default:console.log(buttonsInnerHtml);
            break;
    }
}


function buttonAnimanitation(keyPressed){
    var activeKey = document.querySelector("."+keyPressed);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100)
}



