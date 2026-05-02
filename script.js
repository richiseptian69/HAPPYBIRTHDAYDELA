const openBtn = document.getElementById('open-btn');
const landing = document.getElementById('landing');
const content = document.getElementById('main-content');
const music = document.getElementById('hbd-music');

openBtn.addEventListener('click', () => {
    // 1. Sembunyikan Landing
    landing.classList.add('hidden');
    
    // 2. Putar Musik
    music.play();

    // 3. Tampilkan Konten Utama
    setTimeout(() => {
        content.classList.remove('hidden');
        createFlowers(); // Mulai efek bunga
    }, 500);
});

function createFlowers() {
    const container = document.getElementById('flower-container');
    for (let i = 0; i < 30; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        
        // Randomize posisi dan ukuran
        const size = Math.random() * 15 + 10 + 'px';
        flower.style.width = size;
        flower.style.height = size;
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = Math.random() * 3 + 2 + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';
        flower.style.background = Math.random() > 0.5 ? '#FFD1DC' : '#ffffff';

        container.appendChild(flower);
    }
}
