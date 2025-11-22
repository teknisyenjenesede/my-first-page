const splashDuration = 3000; // 3 secondes pour le splash screen

window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const loginContainer = document.getElementById('login-container');

    setTimeout(() => {
        // Fait disparaître le splash screen
        splashScreen.classList.add('fade-out-effect');

        setTimeout(() => {
            splashScreen.style.display = 'none';
            // Affiche le formulaire de connexion
            loginContainer.style.display = 'flex'; 
        }, 500); // 500ms = durée de l'animation CSS fadeout

    }, splashDuration);
});

// Fonction appelée lors de la soumission du formulaire de connexion
function handleLogin(event) {
    event.preventDefault(); // Empêche le rechargement de la page par défaut

    // --- ICI : Ajoutez votre logique d'authentification réelle (Appel API, vérification...) ---
    console.log("Tentative de connexion...");
    
    // Simuler une connexion réussie
    const loginContainer = document.getElementById('login-container');
    const mainContent = document.getElementById('main-content');

    // Masque le formulaire de connexion
    loginContainer.style.display = 'none';
    
    // Affiche le contenu principal
    mainContent.style.display = 'block';

    // Idéalement, vous redirigeriez l'utilisateur vers une nouvelle page après une vraie connexion réussie.
}
