function guessGame() {
  let random = Math.floor(Math.random() * 11);

  let guess;

  while (guess != random) {
    guess = prompt("Guess a number between 1-10");
    console.log(guess, random);

    if (random > guess) {
      console.log("You guessed to low");
    } else if (random < guess) {
      console.log("Guess was to high");
    }
  }
  alert("YOU WON!");
}
