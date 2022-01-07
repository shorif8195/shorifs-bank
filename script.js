// login event handler
const logInBtn = document.getElementById("log-Btn");
logInBtn.addEventListener("click",function(){
    const fullForm = document.getElementById("login-area");
    fullForm.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block";
})

//deposit event handler

const depoBtn = document.getElementById("depo-btn");
depoBtn.addEventListener("click",function(){
    // const depositAmount = document.getElementById("depoAmount").value;
    const depositAmountNumber=convertAmountNum("depoAmount");
    // const depositAmountNumber = parseFloat(depositAmount);

    document.getElementById("depoAmount").value = "";
    upgradeSpanText("current-balance",depositAmountNumber);
    upgradeSpanText("current-depo",depositAmountNumber);
});
// withdraw ement handlar
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click",function(){
    // const currentWithdraw=document.getElementById("current-withdraw").innerText;
    
    
    // const withdrawAmount = document.getElementById("withdrawAmount").value;
    // const withdrawAmountNum = parseFloat(withdrawAmount);
    const withdrawAmountNum=convertAmountNum("withdrawAmount");
    upgradeSpanText("current-withdraw",withdrawAmountNum);
    upgradeSpanText("current-balance",-1*withdrawAmountNum)
    document.getElementById("withdrawAmount").value="";
    
})
function convertAmountNum(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;

}

function upgradeSpanText(id,currentAmount){
    const currentText = document.getElementById(id).innerText;
const currentNum = parseFloat(currentText);
const total = currentNum + currentAmount;
document.getElementById(id).innerText=total;
}