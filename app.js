let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guessCount = 0;
    let gameOver = false;
    const maxGuesses = 3; 

    function checkGuess() {
      const guess = parseInt(document.getElementById("guessInput").value);
      const message = document.getElementById("message");

      if (gameOver) {
        message.textContent = "Game over! Click 'Restart' to play again.";
        return;
      }

      if (isNaN(guess) || guess < 1 || guess > 10) {
        message.textContent = "❗ Please enter a valid number between 1 and 10!";
        return;
      }

      guessCount++;

      if (guess < randomNumber) {
        message.textContent = `↙️Too low! Try again. (Guess #${guessCount})`;
      } else if (guess > randomNumber) {
        message.textContent = `↗️ Too high! Try again. (Guess #${guessCount})`;
      } else {
        const profileType = document.getElementById("profileType").value;
                    Swal.fire({
                title: "අනී ඔයා දිනලා ! ",
                text: "මහින්ද මාහත්තියාටත් සතුටු හිතිලා නේ !",
                imageUrl: "Picturs/images.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
              });
        return;
      }

      if (guessCount >= maxGuesses) {
        message.textContent = `Game over! You've used all ${maxGuesses} guesses. The correct number was ${randomNumber}.`;
        gameOver = true;
      }
    }

    function restartGame() {
      randomNumber = Math.floor(Math.random() * 10) + 1;
      guessCount = 0;
      gameOver = false;
      document.getElementById("guessInput").value = "";
      const profileType = document.getElementById("profileType").value;
      document.getElementById("message").textContent = `${profileType} mode active. New game started! Guess a number between 1 and 10.`;
    }