//define constant arrays of wordtypes
const adjectives = ["silly", "stupid","blue","gangly"];
const noun = ["Joseph","Isaac","dog","bird"];
const verb = ["jumped","ate","opened","drove","crashed out"];
const adverb = ["happily","miserabley","angrily"];

//get references
const genButton = document.getElementById("genButton");

genButton.addEventListener("click", onGenButtonClick);

function onGenButtonClick(){
    console.log("Generate button clicked")
}
