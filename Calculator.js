let currentInput = '';
    function appendNumber(num) 
    {
      currentInput += num;
      updateDisplay();
    }


    function appendOperator(operator) 
    {
      if (currentInput === '' || /[\+\-\*\/]$/.test(currentInput)) return;
      currentInput += operator;
      updateDisplay();
    }


    function appendDecimal() 
    {
      let parts = currentInput.split(/[\+\-\*\/]/);
      if (!parts[parts.length - 1].includes('.')) {
        currentInput += '.';
        updateDisplay();
      }
    }


    function clearScreen() 
    {
      currentInput = '';
      updateDisplay();
    }


    function deleteNumber() 
    {
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    }


    function calculate() 
    {
      try 
      {
        let expression = currentInput.replace(/,/g, '');
        let result = eval(expression);
        currentInput = formatIndianNumber(result.toString());
        updateDisplay();
      } 
      catch (error) 
      {
        currentInput = 'Error';
        updateDisplay();
      }
    }


    function calculateSquareRoot() 
    {
      if (currentInput === '') return;
      let num = parseFloat(currentInput.replace(/,/g, ''));
      if (num < 0) 
      {
        currentInput = 'Error';
      } 
      else 
      {
        currentInput = formatIndianNumber(Math.sqrt(num).toString());
      }
      updateDisplay();
    }


    function calculatePercentage() 
    {
      if (currentInput === '') return;
      let num = parseFloat(currentInput.replace(/,/g, ''));
      currentInput = formatIndianNumber((num / 100).toString());
      updateDisplay();
    }

    function updateDisplay() 
    {
      document.getElementById('display').value = currentInput;
    }


    function formatIndianNumber(num) 
    {
      if (num === '' || isNaN(num)) return num;
      let parts = num.split('.');
      let integerPart = parts[0];
      let decimalPart = parts.length > 1 ? '.' + parts[1] : '';
      let lastThree = integerPart.slice(-3);
      let otherNumbers = integerPart.slice(0, -3);
      if (otherNumbers !== '')
        lastThree = ',' + lastThree;
      let formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      return formatted + decimalPart;
    }
