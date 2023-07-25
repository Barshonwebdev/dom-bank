document.getElementById("take-btn").addEventListener("click",function(){
    
    const takenBookOutputElement= document.getElementById("taken-output");
    const takenBookOutputElementString=takenBookOutputElement.innerText;
    const takenBookOutput=parseInt(takenBookOutputElementString);

    const takenBookInputField=document.getElementById("need-input");
    const takenBookInputString=takenBookInputField.value;
    const takenBookInput=parseInt(takenBookInputString);
    if(isNaN(takenBookInput)){
        alert("Type a number");
        takenBookInputField.value=""
        return;
    }
    
    const totalTakenBooks=takenBookOutput+takenBookInput;

    const totalBooksStringElement = document.getElementById("total-output");
    const totalBooksStringElementString = totalBooksStringElement.innerText;
    const totalBooks = parseInt(totalBooksStringElementString);
    takenBookInputField.value = "";
    if (takenBookInput > totalBooks) {
      alert("Insufficient amount");
      return;
    }
    takenBookOutputElement.innerText=totalTakenBooks;
    


    const newTakenTotal=totalBooks-takenBookInput;
    totalBooksStringElement.innerText=newTakenTotal;

    

})