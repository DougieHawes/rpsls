import { choiceArray } from "./textArrays";

export const randomNumber = (n) => Math.floor(Math.random() * n);

export function determineWinner(UC, CC) {
  if (UC === CC) {
    return [`Ah! You picked ${choiceArray[UC]} too, let's go again`, "tie"];
  }

  const winningConditions = {
    0: [2, 3], // Rock beats Scissors & Lizard
    1: [0, 4], // Paper beats Rock & Spock
    2: [1, 3], // Scissors beats Paper & Lizard
    3: [1, 4], // Lizard beats Paper & Spock
    4: [0, 2], // Spock beats Rock & Scissors
  };

  if (winningConditions[UC].includes(CC)) {
    return ["Dammit! How could you beat me?!", "win"];
  } else {
    return ["I WIN!! Don't feel too bad, you're just a muggle", "lose"];
  }
}

export const fireGun = (shooter, CC, BC) => {
  if (CC === BC) {
    if (shooter === "user") {
      return ["BANG!! YOU LOSE!!", "BANG"];
    } else {
      return ["BANG!! I LOSE!!", "BANG"];
    }
  } else {
    if (shooter === "user") {
      return ["CLICK!! YOU LIVE TO SEE ANOTHER DAY!!", "CLICK"];
    } else {
      return ["CLICK!! I LIVE TO SEE ANOTHER DAY!!", "CLICK"];
    }
  }
};
