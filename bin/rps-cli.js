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
function rules() {
   
    console.log(
        `Rules for Rock Paper Scissors:
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`
    )
}
const [,, ...args] = process.argv

let mainPlayer = null


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

let result = rps(mainPlayer)
//null 
if(result == null) {
    
   
    help()
    
    rules()


} else {
   
    console.log(JSON.stringify(result))
}