#!/usr/bin/env node
import { rps } from "../lib/rpsls.js"

//print message 
//provide option for help
//rules
function help() {
    console.log(
        `Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)
        
          -h, --help      display this help message and exit
          -r, --rules     display the rules and exit
        
        Examples:
          node-rps        Return JSON with single player RPS result.
                          e.g. {"player":"rock"}
          node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                          e.g {"player":"rock","opponent":"scissors","result":"win"}`
    )
}
//rock-paper-scissor 
//game rules
function help() {
    console.log(
        `Rules for Rock Paper Scissors:
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`
    )
}
const [,, ...args] = process.argv

let player = null


for(let i = 0; i < args.length; i++) {
    switch(args[i]) {
        case "-h":
        case "--help":
            print_usage()
            process.exit(0) 
        case "-r":
        case "--rules":
            help()
            process.exit(0)
    }
}

if(args.length > 0) {
    player = args[0]
}

let result = rps(player)
if(result == null) {
    print_usage()
    help()
} else {
    console.log(JSON.stringify(result))
}