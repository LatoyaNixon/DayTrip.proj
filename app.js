function destination (someArray){
let random;
random = someArray[Math.floor(Math.random() * someArray.length)];
console.log(random);
let decision;
decision = prompt("If you like destination type yes");
console.log("Good choice");
return random;
}
while (decision =='yes' || decision =='no'){
    console.log("Sorry pick another choice.");
    decision = prompt("If you like the destination, type yes");
    return decision;
    
}

let destinationDecision = (["Japan","Greece", "Hawaii", "Spain", "Mexico"]);
console.log(destinationDecision);


function resturant(foodArray){
    let random
    random = foodArray[Math.floor(Math.random() * foodArray.length)];
    console.log(random);
    let decision;
    decision = prompt("If you like the choice type yes.");
    console.log("Great Choice");
    return random;
}

    while(decision=="no"){
        console.log("don't like the choice try again")
        random = foodArray[Math.floor(Math.random() * foodArray.length)];
        console.log(random);
        decision = prompt("if you like the choice type yes");
        if(decision=="yes"){
            console.log("Excellent Choice");
            return random;
        }
       
    }
    while(decision == "yes" || decision == "no"){
        console.log("Sorry pick another choice.");
        decision = prompt("If you like the food choice, type yes");
        return decision;

    }
    let resturantDecision =(["Ramen", "Sushi", "Pasta", "Cafe", "Burger", "Taco"]);
    console.log(resturantDecision);


    function transportation(travelArray){
        let random
        random = travelArray[Math.floor(Math.random() * travelArray.length)];
        console.log(random);
        let decision = prompt ("if you like the choice type yes");
        if(decision == "yes"){
            console.log ("Enjoy the Experience");
            return random
        }
        while(decision =="no"){
            console.log("Not my first choice");
            random = travelArray[Math.floor(Math.random() * travelArray.length)];
            console.log(random);
            decision = prompt("if you like the choice type yes");
        if(decision=="yes"){
            console.log("Excellent Choice");
            return random;

        }
        while(decision == "yes" || decision == "no"){
            console.log("Sorry pick another choice.");
            decision = prompt("If you like the food choice, type yes");
            return decision;
        }
        let transportationDecision =(["Uber", "Plane", "Train", "Local Transportation", "Electric Bike"]);
        console.log(transportationDecision);

        function entertainment(funArray){
            let random;
            random= funArray[Math.floor(Math.random() * funArray.length)];
            console.log(random);
            let decision;
            decision = prompt("If you like the choice type yes");
            console.log ("Good Choice");
            return random;
            }
            
        }
        while (decision == "yes || decision == no"){
            console.log("Sorry pick another choice");
            decision = prompt("If you like the choice type yes");
            return decision

        }
        let entertainmentdecision =[("Movie", "Concert", "food tour", "boat ride")];
        console.log (entertainmentdecision);

        function reselect(optionArray){
            let random;
            random= optionArray[Math.floor(Math.random() * differentArray.length)];
            console.log(random);
            let decision;
            decision= prompt("If you don't like the choices type no");
            console.log("Select another choice");
        }
        while(decision== 'no');
        random = optionArray[Math.floor(Math.random() * optionArray.length)];
        console.log(random);
        decision = prompt("If you like the choice type yes if not type no");
        return decision;
    }
    while(decision == "yes" || decision == "no"){
        console.log("Sorry pick another choice.");
        decision = prompt("If you like the food choice, type yes");
        return decision;
    }
    function reselect (choiceArray){
        let userInput = prompt("Which selection would you like to change?")
        random = someArray[Math.floor(Math.random() * choiceArray.length)];
        console.log(random);
        let decision;
        decision = prompt("If you like destination type yes");
        console.log("Good choice");
        return random;
    }
    while (decision =='yes' || decision =='no'){
        console.log("I'm satisfied with my choices");
        decision = prompt("If you like your plans, type yes");
        return decision;
    }
    console.log(destination)
    console.log(resturant)
    console.log(transportation)
    console.log(entertainment)


               
              