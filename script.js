function compute()
{
    // the amount
    const principal = document.getElementById("principal").value;
    // the rate value from the slider
    const rate = document.getElementById("rate").value;
    // the selected no of years
    const years = document.getElementById("years").value;
    // calculating interest
    const interest = principal * years * rate / 100;
    /* calculating years in future based on current year 
       and selected no of years
    */
    const yearsIntoFuture = new Date().getFullYear() + +years;
    const result = document.getElementById("result");
    // updating the result if the amount entered is greater that 0
    if (principal > 0) {
        result.innerHTML = `
        If you deposit <mark>${principal}</mark>,<br>
        at an interest rate of <mark>${rate}%</mark>.<br>
        You will receive an amount of <mark>${interest}</mark>, <br/>
        in the year <mark>${yearsIntoFuture}</mark>
        `;
    } else {
        // showing an alert when the amount is 0 or negative
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }


}
/* getting and updating the rate value when 
   the slider changes */
function updateRateValue(value) {
    const rateValue = document.getElementById("rate-value");
    rateValue.innerText = value + " %";
}