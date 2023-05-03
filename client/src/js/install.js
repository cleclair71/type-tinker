const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
// Prevent Chrome 67 and earlier from automatically showing the prompt
event.preventDefault();
// Stash the event so it can be triggered later.
window.deferredPrompt = event;

// Update UI notify the user they can add to home screen
butInstall.style.display = 'block';
});

// Click event handler for the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Hide our user interface that shows our Install button
    butInstall.style.display = 'none';

    // Show the prompt
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();

    // Wait for the user to respond to the prompt
    const userChoice = await promptEvent.userChoice;

    // Clear the saved prompt since it can't be used again
    window.deferredPrompt = null;

    // display the user's response
    console.log(`User ${userChoice.outcome}`);
});

// Handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully!', event);
  });
