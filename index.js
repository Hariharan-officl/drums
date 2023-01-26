function music(str)
{
    var sound=new Audio(str);
    sound.play();
}
function soundings(inp)
{
    switch(inp)
    {
        case "w":
            music("sounds/crash.mp3");
            break;
        case "a":
            music("sounds/tom-1.mp3");
            break;
        case "s":
            music("sounds/tom-2.mp3");
            break;
        case "d":
            music("sounds/tom-4.mp3");
            break;
        case "j":
            music("sounds/tom-3.mp3");
            break;
        case "k":
            music("sounds/kick-bass.mp3");
            break;
        case "l":
            music("sounds/snare.mp3");
            break;
    }       
}
function animation(skey)
{
    var currentkey=document.querySelector("."+skey);
    currentkey.classList.add("pressed");
    setTimeout(function(){
        currentkey.classList.remove("pressed")
    },100);
}
for(var i=0;i<7;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function ()
    {
       var s=this.innerHTML;
       soundings(s);
       animation(s);
    }
    );
}

document.addEventListener("keydown",function(event){
   soundings(event.key);
   animation(event.key);
})
