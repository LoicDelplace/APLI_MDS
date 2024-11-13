document.addEventListener('DOMContentLoaded', function () {
    const openMenuButton = document.querySelector('#burger-menu');
    const closeMenuButton = document.querySelector('#close-menu');
    const mobileMenu = document.querySelector('div[role="dialog"]');

    // ouvrir le menu mobile
    openMenuButton.addEventListener('click', function () {
        mobileMenu.classList.remove('hidden');
    });

    // fermer le menu mobile
    closeMenuButton.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
    });
});
