export function rps(shot){
    //moves allowed: rock, paper
    //scissors
    const move = ["rock", "paper", "scissors"];

    //if no shot made
    if(shot == null){
        return{"player": move[Math.floor(Math.random() * move.length)]};
    }
    shot = shot.tolowerCase();
    const opponent = move[Math.floor(Math.random() * move.length)];
    var outcome;

    //tied 
    if(shot === opponent){
        outcome = "tie";

        //winning outcome 
    } else if(shot === "rock" && opponent === "scissors" || 
        shot === "paper" && opponent === "rock" || 
        shot === "scissors" && opponent === "paper"){
        outcome = "win";

        //losing outcomes 
    } else if(shot === "rock" && opponent === "paper" || 
        shot === "paper" && opponent === "scissors" ||
         shot === "scissors" && opponent === "rock"){
        outcome = "lose";

        //out of range move 
        //error log

    } else {
        console.log("out of bounds!");
        console.error();
    }
    return {"player": shot, "opponent": opponent, "result": outcome};
}
// rock -paper -sccisso - lizard - spock rules

export function rpsls(shot){
    const move = ["rock", "paper", "scissors", "lizard", "spock"];
    //no inout 

    if(shot == null){
        return{"player": move[Math.floor(Math.random() * move.length)]};
    }

    //change to lowercase 
    shot = shot.tolowerCase();
    
    const opponent = move[Math.floor(Math.random() * move.length)];
    var outcome;
    if(!mpve.includes(shot)){
        console.log("out of bounds ");
        console.error();
    }

    //tied 
    if(shot === opponent){
        outcome = "tie";

        //win
    } else if( move === "rock" && (opponent === "scissors" || 
        opponent === "lizard") ||  move === "paper" && (opponent === "rock" || 
        opponent === "spock") || hand === "scissors" && (opponent === "paper" || 
        opponent === "lizard")){
        outcome = "win";
        //win
    } else if( move === "lizard" && (opponent === "paper" || opponent === "spock") || 
        move === "spock" && (opponent === "scissors" || opponent === "rock")){
        outcome = "win";

        //lose move
    } else{opponent
        outcome = "lose";
    }
    return {"player": shot, "opponent": opponent, "result": outcome};
}
