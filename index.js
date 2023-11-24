let button = document.querySelector('[data-count]')
let interest = document.getElementById('interest').value
let display = document.getElementById('output')


  button.addEventListener('click',function(){
let interest = document.getElementById('interest').value
    
  calculateInterest(interest)
  })

function calculateInterest(rate) {
    
    const interestRate = 0.15;
  
    
    const interestAmount = rate * interestRate;
  
    
    return display.innerText =`Interest is R ${interestAmount}`;
  }