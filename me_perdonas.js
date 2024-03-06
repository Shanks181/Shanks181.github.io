let nob = document.getElementById("No")

nob.addEventListener("mousemove", function() {
    let alto = random(1,10)
    let ancho = random(1,10)
    console.log(alto, ancho)
    nob.style.gridRow = alto;
    nob.style.gridColumn = ancho;
    })


function random(min,max) {
    let numero = Math.floor(Math.random() * (max - min + 0.1) + min)
    return numero
}

let play = document.getElementById("desp")

play.addEventListener("click", function(){
    const audioElement = document.getElementById("PERDON");
     const audio = audioElement.querySelector("audio");
     audio.play();
     document.getElementById("desp").style.display = "none";
     document.getElementById("1").removeAttribute("hidden");
     document.getElementById("img").removeAttribute("hidden");
     document.getElementById("Si").removeAttribute("hidden");
     document.getElementById("No").removeAttribute("hidden");
})

let sib = document.getElementById("Si")




sib.addEventListener("click", function() {
    const autoPlayAudioElement = document.getElementById("PERDON");
  const autoPlayAudio = autoPlayAudioElement.querySelector("audio");
  autoPlayAudio.pause();
     // Código para reproducir la canción automáticamente
     const audioElement = document.getElementById("audio");
     const audio = audioElement.querySelector("audio");
     audio.play();
    document.getElementById("p").removeAttribute("hidden")
    console.log("click")
    document.getElementById("1").style.color = "transparent";
    document.getElementById("Si").style.display = "none";
    document.getElementById("No").style.display = "none";
    document.getElementById("img").style.display = "none";
    document.getElementById("cont").removeAttribute("hidden")
    document.getElementById("feli").removeAttribute("hidden")
    document.body.classList.remove("container");

})



