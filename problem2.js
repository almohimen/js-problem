// const singara = 7;
// const samucha = 10;
// const jilapi = 15;
function pandaCost(singaraQuentity, samuchaQuentity ,jilapiQuentity)
{
    const perSingara = 7;
    const perSamucha = 10;
    const perJilapi = 15;
    let totalPrice = 0;
    totalPrice = singaraQuentity* perSingara + samuchaQuentity * perSamucha + jilapiQuentity*perJilapi;
    return totalPrice;
}
const price = pandaCost(1,3,2);
console.log(price);