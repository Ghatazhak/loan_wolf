
function getValues(){
    let loanAmount = document.getElementById("loanAmount").value;
    let term = document.getElementById("term").value;
    let interestRate = document.getElementById("interestRate").value;

    let paymentAmount = loanAmount * (interestRate/1200)/(1-Math.pow( 1 + interestRate / 1200,-term));


    document.getElementById("totalPrincipal").innerHTML = loanAmount;
    document.getElementById("monthlyPayments").innerHTML = Math.round(paymentAmount);

    calculate(loanAmount, term, interestRate);
}



function calculate (loanAmount, term, interestRate){
    
    

   
    let RemainingBalance = loanAmount  ;
    let PreviousInterestPayment = 0;
    let PreviousPrincipalPayment = 0;


    for (let index = 1; index <= term; index++) {
        
        
        
    }



}



function displayResults(){

}