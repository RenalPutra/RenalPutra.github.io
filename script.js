class Game {
  constructor() {
    this.playerName = "Player";
    this.botName = "RenalBot";
    this.playerOption;
    this.botOption;
    this.winner;
  }

  set setPLayerOption(option) {
    this.playerOption = option;
  }

  set setBotOption(option) {
    this.botOption = option;
  }

  botBrain() {
    const item = ["✊", "🖐️", "✌️"];
    return item[Math.floor(Math.random() * item.length)];
  }

  winCalculation() {
    if (this.botOption == "✊" && this.playerOption == "🖐️") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✊" && this.playerOption == "✌️") {
      return (this.winner = this.botName);
    } else if (this.botOption == "🖐️" && this.playerOption == "✌️") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "🖐️" && this.playerOption == "✊") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✌️" && this.playerOption == "✊") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✌️" && this.playerOption == "🖐️") {
      return (this.winner = this.botName);
    } else {
      return (this.winner = "SERI");
    }
  }

  winnerMatch() {
    if (this.winner != "SERI") {
      return `${this.winner} Menang`;
    } else {
      return `${this.winner} 😂`;
    }
  }
}

function opsi(params) {
  const game = new Game();
  game.setPLayerOption = params;
  game.setBotOption = game.botBrain();

  game.winCalculation();

  const participant = document.getElementById("versus");
  const result = document.getElementById("result");

  participant.innerText = "...";
  result.innerText = "...";

  setTimeout(() => {
    participant.innerText = `${game.playerOption} VS ${game.botOption}`;
    result.innerText = game.winnerMatch();
  }, 1500);
}
