// Délai avant de masquer la page flottante (en millisecondes)
const splashDuration = 3000; 

window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        // Applique l'animation de fondu avant de masquer complètement
        splashScreen.classList.add('fade-out-effect'); 

        // Masque la page flottante et affiche le contenu principal après l'animation de fondu
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block'; 
        }, 500); // 500ms correspond à la durée de l'animation 'fadeout' dans le CSS

    }, splashDuration);
});
