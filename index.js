document.addEventListener('keypress', function(event){
    console.log(event);
    var key = event.key
        switch (key) {
            case 'w':
                var audio = new Audio('./sounds/crash.mp3'); 
                audio.play();
                break;
            case 'a':
                var audio = new Audio('./sounds/kick-bass.mp3'); 
                audio.play();
                break;
            case 's':
                var audio = new Audio('./sounds/snare.mp3'); 
                audio.play();
                break;
            case 'd':
                var audio = new Audio('./sounds/tom-1.mp3'); 
                audio.play();
                break;
            case 'j':
                var audio = new Audio('./sounds/tom-2.mp3'); 
                audio.play();
                break;
            case 'k':
                var audio = new Audio('./sounds/tom-3.mp3'); 
                audio.play();
                break;
            case 'l':
                var audio = new Audio('./sounds/tom-4.mp3'); 
                audio.play();
                break;
            default:
                alert('invalid input');
                break;
        }

        buttonAnimation(key);

});


for(let i= 0; i<= document.querySelectorAll('.drum').length;i++){

    document.querySelectorAll('.drum')[i].addEventListener('click', function handleClick(){
        var buttonInnerHTML = this.innerHTML
        switch (buttonInnerHTML) {
            case 'w':
                var audio = new Audio('./sounds/crash.mp3'); 
                audio.play();
                break;
            case 'a':
                var audio = new Audio('./sounds/kick-bass.mp3'); 
                audio.play();
                break;
            case 's':
                var audio = new Audio('./sounds/snare.mp3'); 
                audio.play();
                break;
            case 'd':
                var audio = new Audio('./sounds/tom-1.mp3'); 
                audio.play();
                break;
            case 'j':
                var audio = new Audio('./sounds/tom-2.mp3'); 
                audio.play();
                break;
            case 'k':
                var audio = new Audio('./sounds/tom-3.mp3'); 
                audio.play();
                break;
            case 'l':
                var audio = new Audio('./sounds/tom-4.mp3'); 
                audio.play();
                break;
            default:
                alert('invalid input');
                break;
        }

        buttonAnimation(buttonInnerHTML);

});
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}


// var audio = new Audio('./sounds/kick.mp3'); 
// audio.play();
    
// function handleClick(){
//     alert("i go clicked !");
// }




add = (num1, num2)=>{
    return num1 + num2;
}

multiply = (num1, num2)=>{
    return num1 * num2;
}

subtract = (num1, num2)=>{
    return num1 - num2;
}

division = (num1, num2)=>{
    return num1 / num2;
}

calculator =(num1, num2, operator)=>{ 
    return  operator(num1, num2);
}

calculator(2,3,division);
