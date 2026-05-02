const openBtn = document.getElementById('open-btn');
const landing = document.getElementById('landing');
const content = document.getElementById('main-content');
const music = document.getElementById('hbd-music');

openBtn.addEventListener('click', () => {
    landing.classList.add('hidden');
    music.play();
    setTimeout(() => {
        content.classList.remove('hidden');
        startSlideshow(); // Mulai Slide
        createFlowers();  // Mulai Bunga
    }, 1000);
});

// Logika Slide
function startSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let index = 0;
    
    setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }, 3000); // Gambar berganti setiap 3 detik
}

function createFlowers() {
    const container = document.getElementById('flower-container');
    for (let i = 0; i < 40; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        const size = Math.random() * 15 + 10 + 'px';
        flower.style.width = size; flower.style.height = size;
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = Math.random() * 3 + 4 + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';
        flower.style.background = Math.random() > 0.5 ? '#FFD1DC' : '#ffffff';
        container.appendChild(flower);
    }
}
