 document.getElementById("return-btn").addEventListener("click",function(){
    const CurrentValue=getValuefromInput("return-input");
    const previousReturnValue = showValuefromOutput("return-output");
    const previousTotalValue= showValuefromOutput("total-output");
    calculateSumAndShowTotal(CurrentValue,previousReturnValue,"return-output");
    calculateSumAndShowTotal(previousTotalValue, CurrentValue, "total-output");
})


