document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission to server
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  alert(`Form submitted! Welcome, ${firstName} ${lastName}!`);
});
