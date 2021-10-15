# Human readable duration format

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

## Tests
* If input is 0, return "now"
* Input < 60, return in seconds
* Input < 3600, return in minutes and seconds
    * Uses "and" in between
* Input < 86400, return in hours, minutes, seconds
    * Uses a comma and "and" 
* Input < 31,536,000, return in days
* Is ordered from most significant to least significant unit of time