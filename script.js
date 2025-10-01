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

    let point = 0;
    let isFirstRoll = true;

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = document.getElementById('email');
            const email = emailInput.value;

            if (email) {
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

            if (isFirstRoll) {
                if (total === 7 || total === 11) {
                    diceResult.textContent = `You rolled a ${total}. You win!`;
                    resetGame();
                } else if (total === 2 || total === 3 || total === 12) {
                    diceResult.textContent = `You rolled a ${total}. You lose.`;
                    resetGame();
                } else {
                    point = total;
                    diceResult.textContent = `You rolled a ${total}. That's the Point! Roll again.`;
                    isFirstRoll = false;
                }
            } else {
                if (total === point) {
                    diceResult.textContent = `You rolled a ${total}. You win!`;
                    resetGame();
                } else if (total === 7) {
                    diceResult.textContent = `You rolled a 7. You lose.`;
                    resetGame();
                } else {
                    diceResult.textContent = `You rolled a ${total}. Roll again.`;
                }
            }
        });
    }

    function resetGame() {
        point = 0;
        isFirstRoll = true;
    }

    // Countdown Timer Logic
    const countdownTimer = document.getElementById('countdown-timer');
    if (countdownTimer) {
        // Set the date we're counting down to: 1 week from Sep 30, 2026, midnight PST/PDT
        const countDownDate = new Date("2026-10-07T00:00:00-07:00").getTime();

        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;

            if (distance < 0) {
                clearInterval(x);
                countdownTimer.innerHTML = "The wait is over! Welcome to RedTedCasino!";
            }
        }, 1000);
    }
});