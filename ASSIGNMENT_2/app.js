alert("HEY VISITOR!")

var palindromes = [
    "Abba", "Aibohphobia", "Bib", "Bob", "Civic", "Deified", "Detartrated", "Dewed", 
    "Eve", "Hannah", "Kayak", "Level", "Madam", "Malayalam", "Minim", "Mom", "Sis", 
    "Noon", "Nun", "Otto", "Peep", "Pop", "Racecar", "Radar", "Redder", "Refer", "Gig",
    "Repaper", "Rotator", "Rotavator", "Sagas", "Solos", "Stats", "Tattarrattat", "Dud",
    "Tenet", "Aha", "Ava", "Dad", "Did", "Eke", "Ewe", "Eye", "Gag", "Gig", "Mum", "Wow",
    "Pip", "Pup", "Reviver", "Sees", "Succus", "Deed", "Ama", "Ana", "Lil", "Tat", "Yay", "Pap", "Did", "Murdrum",
];

var userInput = prompt("Please enter a word:");

userInput = userInput.toLowerCase;

var palindromesLowerCase = palindromes.map(function(palindromes) {
    return palindromes.toLowerCase();
});

if (palindromesLowerCase.includes(userInput)) {
    document.write("This is a palindrome");
} else {
    document.write("This is not a palindrome");
}
