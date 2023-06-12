function showSelectedValues() {
    const checkboxes = document.getElementsByName('checkbox');
    const selectedValues = [];
  

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });
  
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Selected Values: ' + selectedValues.join(', ');
}



function shuffleValues() {
    const checkboxes = Array.from(document.getElementsByName('checkbox'));
    const values = checkboxes.map((checkbox) => checkbox.value);
  
    for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [values[i], values[j]] = [values[j], values[i]];
    }
  
    checkboxes.forEach((checkbox, index) => {
      checkbox.value = values[index];
    });
}



function changeValues() {
    const checkboxes = document.getElementsByName('checkbox');
  
    checkboxes.forEach((checkbox) => {
      checkbox.value = 'Value changed';
    });
  }