function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
    
  }

  const allClearButton = document.querySelector('[data-all-clear]')

  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
