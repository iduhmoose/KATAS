Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

Pseudocode:
create result array
Split the string into an array of words.
If word length > 5, reverse and then add to result array
else add to result array
join and return

Test Cases:
empty string
word w/ < 5 characters
word w/ > 5 characters
a few words that are all < 5 characters
a few words with a mix of lengths

