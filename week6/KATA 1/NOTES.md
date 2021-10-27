# Directions Reduction

Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

## Test Cases
* If array contains 0 strings, return nothing
* If array contains one string, return the string
* If array contains opposing directions (N+S, or E+W), return nothing
* If opposing directions happen one after another, remove them from the array

## Tech Debt
* Handle opposing directions that are not directly after one another
* Cleaner way to handle opposing directions