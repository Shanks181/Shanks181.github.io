let nob = document.getElementById("No")

nob.addEventListener("mousemove", function() {
    let alto = random(1,10)
    let ancho = random(1,10)
    console.log(alto, ancho)
    nob.style.gridRow = alto;
    nob.style.gridColumn = ancho;
    const audioElement = document.getElementById("PERDON");
    const audio = audioElement.querySelector("PERDON");
    audio.play();
    })


function random(min,max) {
    let numero = Math.floor(Math.random() * (max - min + 1) + min)
    return numero
}


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
   
})

window.onload = function() {
    // Tu código existente
    // Código para reproducir la canción automáticamente
    const audioElement = document.getElementById("PERDON");
    if (audioElement) { // Comprueba si el elemento existe antes de acceder a él
      const audio = audioElement.querySelector("audio");
      audio.play();
    }
  };

