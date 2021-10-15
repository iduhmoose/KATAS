# Valid Parentheses
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples:
* "()"              =>  true
* ")(()))"          =>  false
* "("               =>  false
* "(())((()())())"  =>  true

## Test Cases
* A single parentheses returns false
* A pair of opening and closing parentheses returns true
* A pair of closing and opening parentheses returns false


## General Notes
* If there is an open parentheses, there should always be a matching closing parentheses
* There should not be a closing parentheses until there is an open one