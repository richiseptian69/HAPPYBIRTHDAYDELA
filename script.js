document.getElementById('open-btn').addEventListener('click', function() {
    const landing = document.getElementById('landing');
    const content = document.getElementById('main-content');
    const music = document.getElementById('hbd-music');

    // Sembunyikan Landing
    landing.style.opacity = '0';
    
    setTimeout(() => {
        landing.classList.add('hidden');
        content.classList.remove('hidden');
        
        // Memulai musik (Browser butuh interaksi user untuk autoplay)
        music.play().catch(error => console.log("Musik tertahan sistem."));
        
        // Animasi muncul konten
        setTimeout(() => {
            content.style.opacity = '1';
        }, 100);
    }, 1000);
});