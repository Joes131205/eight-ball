const questionEl = document.getElementById("question")
const resultEl = document.getElementById("result")
//8 ball quotes [yes its from AI]
const magic8BallPhrases = [
    "It is certain.",
    "Outlook good.",
    "You may rely on it.",
    "Ask again later.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "Signs point to yes.",
    "Yes.",
    "Yes - definitely.",
    "You can count on it.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, in due time.",
    "Definitely not.",
    "The chances are good.",
    "The outlook is hazy, try again.",
    "Reply hazy, try again.",
    "The answer is unclear, try again.",
    "It is possible, but unlikely.",
    "Ask again later."
]

submitQuestion = () => {
    const random = Math.floor(Math.random() * 24)
    const quote = magic8BallPhrases[random]
    if (questionEl.value == "") {
        resultEl.textContent = "Question box can't be empty"
        resultEl.style.backgroundColor = "#630005"
        setTimeout(function() {
            resultEl.style.backgroundColor = "#252525"
        }, 200)
    } else {
        resultEl.textContent = `"${quote}"`
        resultEl.style.backgroundColor = "#089900"
        setTimeout(function() {
            resultEl.style.backgroundColor = "#252525"
        }, 200)
    }
}