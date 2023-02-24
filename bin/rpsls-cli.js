#!/usr/bin/env node

import { rpsls } from "../lib/rpsls.js"

//for rock paper scissor
//lizard and spock verios
//prive help center


function help() {
    console.log(
        `Usage: node-rpsls [SHOT]
        Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
        
          -h, --help        display this help message and exit
          -r, --rules       display the rules and exit
        
        Examples:
          node-rpsls        Return JSON with single player RPSLS result.
                            e.g. {"player":"rock"}
          node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                            e.g {"player":"rock","opponent":"Spock","result":"lose"}`
    )
}

//rules for this game verison

function rules() {
    console.log(
        `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock SMOOSHES Lizard
        - Lizard POISONS Spock
        - Spock SMASHES Scissors
        - Scissors DECAPITATES Lizard
        - Lizard EATS Paper
        - Paper DISPROVES Spock
        - Spock VAPORIZES Rock
        - Rock CRUSHES Scissors`
    )
}


const [,, ...args] = process.argv

let mainPlayer = null
//error handling
//s
for(let i = 0; i < args.length; i++) {
    switch(args[i]) {
        case "-h":
        case "--help":
            help()
            process.exit(0) 
        case "-r":
        case "--rules":
            rules()
            process.exit(0)
    }
}

if(args.length > 0) {
    mainPlayer = args[0]
}

let result = rpsls(mainPlayer)
if(result == null) {
    help()
    rules()
} else {
    console.log(JSON.stringify(result))
}