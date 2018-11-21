/*
    https://www.eventbrite.it/e/biglietti-elephant-carpaccio-massimo-iacolare-52312853152
    *************************************************************************************
    * Elephant Carpaccio * Incontro XPUG del 20/11/2018
    *************************************************************************************
    Fare a fettine un elefante è possibile? 
    Durante la serata metteremo alla prova la nostra capacità di affettare le user-story in modo da abilitare un approccio 
    iterativo-incrementale allo sviluppo di una (minuscola) applicazione. 
    La sfida sarà quella di riuscire a mettere in campo una soluzione in piccoli (piccolissimi) passi graduali in 40 minuti.
    Incuriositi? Venite che ci divertiamo!
    Con Massimo Iacolare
*/

const args = process.argv.slice(2);
const itemPrice = +args[0];
const stateCode = args[1].toUpperCase();
const quantity = +args[2];
const taxRates = {
    UT: 0.0685,
    NV: 0.08,
    TX: 0.0625,
    AL: 0.04,
    CA: 0.0825
}

const validateStateCode = (stateCode) => Object.keys(taxRates).includes(stateCode)

const taxRate = (stateCode) => {
    return taxRates[stateCode];
}

const discount = (totalPrice) => {
    return discountRate(totalPrice) * totalPrice;
}

const discountRate = (totalPrice) => {
    if(totalPrice >= 50000) return 0.15;
    if(totalPrice >= 10000) return 0.1;
    if(totalPrice >= 7000) return 0.07;
    if(totalPrice >= 5000) return 0.05;
    if(totalPrice >= 1000) return 0.03;
    return 0;
}

const calculate = (itemPrice, stateCode, quantity) => {
    const totalPrice = itemPrice * quantity;
    const totalNetPrice = totalPrice - discount(totalPrice);
    const tax = totalNetPrice * taxRate(stateCode);
    const totalOrder = totalNetPrice + tax;
    return totalOrder;
}
console.log(validateStateCode(stateCode));
console.log(calculate(itemPrice, stateCode, quantity) + "$");
