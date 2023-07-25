try {
    console.log('heeey')
    const passwordInput = document.getElementById('password');
    const revealPasswordButton = document.getElementById('reveal-password');

    revealPasswordButton.addEventListener(
        "click", 
        function handleRevealPassword(e) {
            const isShowing = revealPasswordButton.getAttribute('aria-pressed') === 'true'; 
            if (isShowing) {
                passwordInput.setAttribute('type', 'password');
                revealPasswordButton.setAttribute('aria-pressed', 'false');
                revealPasswordButton.textContent = 'Reveal';
            } else {
                passwordInput.setAttribute('type', 'text');
                revealPasswordButton.setAttribute('aria-pressed', 'true')
                revealPasswordButton.textContent = 'Hide';
            }
        }
    )
} catch {
}