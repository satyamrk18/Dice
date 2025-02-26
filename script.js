function roll() {
    const result = document.getElementById("total");
    const dice = document.getElementById("dice-img");
    const min = 1;
    const max = 6;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random);
    if (random === 1) {
      dice.src = "dice-1.png";
      result.innerText = `Total =  ${random}`;
    } else if (random === 2) {
      dice.src = "dice-2.png";
      result.innerText = `Total =  ${random}`;
    } else if (random === 3) {
      dice.src = `dice-3.png`;
      result.innerText = `Total =  ${random}`;
    } else if (random === 4) {
      dice.src = "dice-4.png";
      result.innerText = `Total =  ${random}`;
    } else if (random === 5) {
      dice.src = `dice-5.png`;
      result.innerText = `Total =  ${random}`;
    } else if (random === 6) {
      dice.src = `dice-6.png`;
      result.innerText = `Total =  ${random}`;
    }
    //to roll the dice image
    dice.classList.remove("rotating");
    void dice.offsetWidth; //to stop the roatation
    dice.classList.add("rotating");
  }