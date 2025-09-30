document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const signupSection = document.getElementById('signup');
    const rollButton = document.getElementById('roll-button');
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const diceResult = document.getElementById('dice-result');

    const diceImages = [
        'https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg',
        'https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg',
        'https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg',
        'https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg',
        'https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg',
        'https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg'
    ];

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = document.getElementById('email');
            const email = emailInput.value;

            if (email) {
                // Replace form with a thank you message
                signupSection.innerHTML = '<h3>Thank You!</h3><p>You have been added to our mailing list. We will notify you when we launch!</p>';
            }
        });
    }

    if (rollButton) {
        rollButton.addEventListener('click', function() {
            const roll1 = Math.floor(Math.random() * 6);
            const roll2 = Math.floor(Math.random() * 6);
            const total = roll1 + roll2 + 2;

            dice1.src = diceImages[roll1];
            dice2.src = diceImages[roll2];

            diceResult.textContent = `You rolled a ${total}!`;
        });
    }
});