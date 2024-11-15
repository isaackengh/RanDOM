//define constant arrays of wordtypes
const adjectives = ["silly", "stupid","blue","gangly"];
const nouns = ["Joseph","Isaac","dog","bird"];
const verbs = ["jumped","ate","opened","drove","crashed out"];
const adverbs = ["happily","miserabley","angrily"];

//get references
const genButton = document.getElementById("genButton");
const sentenceSpace = document.getElementById("sentenceSpace");

//event listeners
genButton.addEventListener("click", onGenButtonClick);

//functions
function onGenButtonClick(){
    console.log("Generate button clicked");
    //choose words
    let chosenAdjective = adjectives[getRandomInt(adjectives.length)];
    let chosenNoun = nouns[getRandomInt(nouns.length)];
    let chosenVerb = verbs[getRandomInt(verbs.length)];
    let chosenAdverb = adverbs[getRandomInt(adverbs.length)];
    //create sentence
    let sentence = `The ${chosenAdjective} ${chosenNoun} ${chosenVerb} ${chosenAdverb}.`;
    console.log("Sentence generated:", sentence);
    //update html
    sentenceSpace.innerHTML = sentence;
    console.log("innerHTML set to sentence");


    
    
}

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
