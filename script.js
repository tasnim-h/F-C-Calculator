document.getElementById("calc-btn").addEventListener("click", calcAverage);

function calcAverage() {
  // Input
  let num1 = +document.getElementById("num1").value;
  // Process
  let average = num1 / 1;

  // Output
  document.getElementById("ave-out").innerHTML = average;
}
