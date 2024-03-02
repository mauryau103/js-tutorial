const accountId = 2;
let accountEmail = "umesh@gmail.com"
var accountPassword = "123@123"
accountCity = "jaipur" 

// accountId = 2 not allowed
accountEmail = "um@gmail.com"
accountPassword = "21344454"
accountCity = "Mumbai" // not a good practice
let accountState; // by default undefined

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity.accountState])