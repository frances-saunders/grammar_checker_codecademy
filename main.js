//This script fulfills the project reqs for "Grammar Checker" in Codecademy

let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

//console.log(storyWords);
console.log("The original message is as follows: ");
console.log(story);
let count = 0;

storyWords.forEach((word) => {
  count++;
});

console.log("The number of words in the story is: " + count +".");

//removes unnecessaryWord everywhere
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});

//fixes misspelledWord everywhere
storyWords = storyWords.map((word) => {
  return word === misspelledWord ? "beautiful" : word;
});

//locates position of badWord
let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});

console.log("The index of the bad word in this story is : " + badWordIndex + ".");

//replaces badWord
storyWords[78] = "really";

//checks every word to be less than 10 characters
let lengthCheck = storyWords.every((word) => {
  return word.length < 10;
});

//finds location of word over 10 characters long
let longWord = storyWords.findIndex((word) => {
  return word.length > 10;
});

console.log("The index of the word longer than 10 characters is: " + longWord + ".");

//finds what word is over 10 characters long
let longWordPrint = storyWords.filter((word) => {
  return word.length > 10;
});

console.log("The word to be replaced is: " + longWordPrint +".");

//replaces long word with shorter word
storyWords[111] = "stunning";

//final story
console.log("After all the modifications have been made, the final story is: ");
console.log(storyWords.join(" "));
