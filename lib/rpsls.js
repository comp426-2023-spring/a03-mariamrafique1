const game = {
    //game logic 

    "rock": [
        "lizard",
        "scissors"
    ],
    "paper": [
        "rock",
        "spock"
    ],
    "scissors": [
        "paper",
        "lizard"
    ],
    "lizard": [
        "spock",
        "paper"
    ],
    "spock": [
        "scissors",
        "rock"
    ]
}

export function rps(mainPlayer) {
    const options = ["rock", "paper", "scissors"]
    if(mainPlayer != null && !options.includes(mainPlayer)) {
        console.error(`${mainPlayer} is out of range.`)
        return null
    }
    return play_rps(mainPlayer, options)
}

export function rpsls(mainPlayer) {
    const options = ["rock", "paper", "scissors", "lizard", "spock"]
    if(mainPlayer != null && !options.includes(mainPlayer)) {
        console.error(`${mainPlayer} is out of range.`)
        return null
    }
    return play_rps(mainPlayer, options)
}

function play_rps(mainPlayer, options) {
    var output = {}
    if(mainPlayer == null) {
        output.mainPlayer = random_option(options)
    } else {
        output.mainPlayer = mainPlayer
        output.opponent = random_option(options)
        if(output.mainPlayer == output.opponent) {
            output.result = "tie"
        } else {
            output.result = rpsls_logic(output.mainPlayer, output.opponent) ? "win" : "lose"
        }
    }
    return output
}

function rpsls_logic(a, b) {
    return game[a].includes(b)
}

function random_option(options) {
    return options[Math.floor(Math.random() * options.length)]
}
