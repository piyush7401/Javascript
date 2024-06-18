const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"  

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
and 4th line variable is not a good practice 
5th line we didn't give any value to variable then it gives undefined
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// last console give an output in table format.