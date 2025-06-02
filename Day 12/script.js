// Select Elements
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

// Calculate BMI
calculateBtn.addEventListener('click', () => {
  const height = parseFloat(heightInput.value) / 100;  // Convert cm to meters
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultDiv.innerText = "Please enter valid height and weight!";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category;

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obesity";

  resultDiv.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
});
