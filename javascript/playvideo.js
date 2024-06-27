document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    
    // Defina o tempo específico (em segundos)
    var startTime = 10; // Por exemplo, iniciar no 10º segundo

    // Garanta que o vídeo comece do tempo especificado
    video.addEventListener('loadedmetadata', function() {
        video.currentTime = startTime;
    });

    // Opcional: iniciar o vídeo automaticamente
    video.play();
});
