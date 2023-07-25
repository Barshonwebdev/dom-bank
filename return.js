document.getElementById("return-btn").addEventListener("click",function(){
    const returnField= document.getElementById("return-input");
    const returnValueString=returnField.value;
    const returnValue=parseInt(returnValueString);
    if (isNaN(returnValue)) {
      alert("Type a number");
      returnField.value=""
      return;
    }
    const returnShow=document.getElementById("return-output");
    const previousReturnValueString= returnShow.innerText;
    const previousReturnValue=parseInt(previousReturnValueString);
    const newReturnValue= returnValue+previousReturnValue;
    returnShow.innerText=newReturnValue;
    returnField.value='';

    const totalBooksStringElement=document.getElementById("total-output");
    const totalBooksString=totalBooksStringElement.innerText;
    const totalBooks=parseInt(totalBooksString);

    const newTotal=totalBooks+returnValue;
    totalBooksStringElement.innerText=newTotal;

})
