const butInstall = document.getElementById('buttonInstall');

// Handler for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    // Show the install button
    butInstall.classList.toggle('hidden', false);
});

// Handler for the install button
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        // The deferred prompt isn't available.
        return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    window.deferredPrompt = null;
    // Hide the install button.
    butInstall.classList.toggle('hidden', true);
});

// Handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
