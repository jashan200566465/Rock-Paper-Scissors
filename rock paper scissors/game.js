let userScore = 0;
let compScore = 0;
let score_board = document.querySelector("#msg");
const scoresOfUser = document.querySelector("#user-score");
const scoresOfComp = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

const CompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];

}
const playGame = (getUserChoice, getCompChoice) => {

    if (getUserChoice === getCompChoice) {

        return `it's a tie as user and  comp chose same '${getUserChoice} '`;
    } else if (
        (getUserChoice === "rock" && getCompChoice === "scissors") ||
        (getUserChoice === "paper" && getCompChoice === "rock") ||
        (getUserChoice === "scissors" && getCompChoice === "paper")
    ) {
        userScore++;
        return `user winns, as ${getUserChoice} beats ${getCompChoice}`;

    } else {
        compScore++;
        return `computer winns, as ${getCompChoice} beats ${getUserChoice}`;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        const getUserChoice = choice.getAttribute("id");

        const getCompChoice = CompChoice();

        const message = playGame(getUserChoice, getCompChoice);
        score_board.innerHTML = message;
        scoresOfComp.innerHTML = compScore;
        scoresOfUser.innerHTML = userScore;


    });
});
