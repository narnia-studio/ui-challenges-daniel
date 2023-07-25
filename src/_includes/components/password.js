try {
    console.log('heeey')
    const passwordInput = document.getElementById('password');
    const revealPasswordButton = document.getElementById('reveal-password');

    revealPasswordButton.addEventListener(
        "click", 
        function handleRevealPassword(e) {
            const isShowing = passwordInput.getAttribute('type') === 'text'; 
            if (isShowing) {
                passwordInput.setAttribute('type', 'password');
                revealPasswordButton.setAttribute('aria-pressed', 'false');
                revealPasswordButton.querySelector('[data-text-visible]').textContent = 'Reveal';
            } else {
                passwordInput.setAttribute('type', 'text');
                revealPasswordButton.setAttribute('aria-pressed', 'true')
                revealPasswordButton.querySelector('[data-text-visible]').textContent = 'Hide';
            }
        }
    )
} catch {
}