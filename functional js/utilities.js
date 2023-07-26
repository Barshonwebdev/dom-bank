function getValuefromInput(elementId){
    const getValuefromInput=document.getElementById(elementId);
    const InputString=getValuefromInput.value;
    const InputValue=parseInt(InputString);
    if (isNaN(InputValue)) {
      alert("Type a number");
      getValuefromInput.value =" "
      exit;
    }
    getValuefromInput.value="";
    return InputValue;
}

function showValuefromOutput(elementId){
    const showValuefromOutput=document.getElementById(elementId);
    const outputString=showValuefromOutput.innerText;
    const outputValue=parseInt(outputString);
    return outputValue;
}

function calculateSumAndShowTotal(previousValue, currentValue,elementId){
  const newTotal=previousValue+currentValue;
  const showElement=document.getElementById(elementId);
  showElement.innerText=newTotal;
}
function calculateSubAndShowTotal(previousValue, currentValue,elementId){
  const newTotal=previousValue-currentValue;
  const showElement=document.getElementById(elementId);
  showElement.innerText=newTotal;
}