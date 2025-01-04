// Formulaire
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  document.getElementById("formMessage").textContent = `Merci ${name}, votre email ${email} a été reçu !`;
});

// Convertisseur
function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const rate = parseFloat(document.getElementById("currency").value);
  const result = (amount * rate).toFixed(2);
  document.getElementById("conversionResult").textContent = `Résultat : ${result}`;
}

// Calculatrice
function calculate() {
  const expression = document.getElementById("calcInput").value;
  try {
    const result = eval(expression);
    document.getElementById("calcResult").textContent = `Résultat : ${result}`;
  } catch {
    document.getElementById("calcResult").textContent = "Expression invalide";
  }
}