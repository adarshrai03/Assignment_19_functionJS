function calculate_tax(income){
    let interest_rate;
    let amount_paid;

    if(income<=100000){
        interest_rate = 0.06;
        console.log("Your principal amount is : " , income);
        console.log("Your interest rate is 6%");
        amount_paid = (income)*(interest_rate);
        return amount_paid;
    }
    if(100000<income && income<=500000){
        interest_rate = 0.08;
        console.log("Your principal amount is : " , income);
        console.log("Your interest rate is 8%");
        amount_paid = (income)*(interest_rate);
        return amount_paid;
    }
    if(500000<income && income<=1000000){
        interest_rate = 0.1;
        console.log("Your principal amount is : " , income);
        console.log("Your interest rate is 10%");
        amount_paid = (income)*(interest_rate);
        return amount_paid;
    }
    if(income>1000000){
        interest_rate = 0.12;
        console.log("Your principal amount is : " , income);
        console.log("Your interest rate is 12%");
        amount_paid = (income)*(interest_rate);
        return amount_paid;
    }
}

let principal = 20.0000;
let result = calculate_tax(principal);
console.log("Tax amount is : " , result);