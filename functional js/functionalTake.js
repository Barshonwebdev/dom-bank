document.getElementById("take-btn").addEventListener("click",function(){
   const currentValue= getValuefromInput("need-input");
   const previousTakenValue=showValuefromOutput("taken-output");
   const previousTotalValue=showValuefromOutput("total-output");
   if(currentValue>previousTotalValue){
    alert("Insufficient amount of books present at the library");
    exit;
   }
   calculateSumAndShowTotal(previousTakenValue,currentValue,"taken-output");
   calculateSubAndShowTotal(previousTotalValue,currentValue,"total-output");
})

