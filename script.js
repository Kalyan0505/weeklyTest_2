function getDOB() {
  const dobInput = document.getElementById("inputDob").value;
  if (!dobInput) {
    alert("Please enter Date of Birth");
    return;
  }

  const dob = new Date(dobInput);
  const d2 = new Date();

  let age = d2.getFullYear() - dob.getFullYear();
  const monthDifference = d2.getMonth() - dob.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && d2.getDate() < dob.getDate())
  ) {
    age--;
  }

  document.getElementById(
    "currentAge"
  ).textContent = `Your age is ${age} years.`;
}
