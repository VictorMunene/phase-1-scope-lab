// Write your solution in this file!
var customerName = 'bob'
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
customerName();

function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer;
}
setBestCustomer();

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}
overwriteBestCustomer();

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer  = 'Mark';
    leastFavoriteCustomer = 'Peter'
    return leastFavoriteCustomer;
}
changeLeastFavoriteCustomer();