 // Generate random stars
function createStars() {
        const stars = document.getElementById('stars');
        const count = 200;            
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;                star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.opacity = Math.random();
        stars.appendChild(star);
    }
}

// Initialize stars
        createStars();
        