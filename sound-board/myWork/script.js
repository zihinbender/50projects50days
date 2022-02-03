const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(function(sound){
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    document.getElementById('buttons').appendChild(btn);

    btn.addEventListener('click', function() {
        stopSongs();

        document.getElementById(sound).play();
    });
});

function stopSongs() {
    sounds.forEach(function(sound){
        const song = document.getElementById(sound);
        
        song.pause();
        song.currentTime = 0;
    });       
    
};