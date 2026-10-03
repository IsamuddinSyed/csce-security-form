const form = document.getElementById("login-form");
const message = document.getElementById("message");

function showMessage(text, type) {
  message.textContent = text;
  message.className = type;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    return showMessage("Email and password are required.", "error");
  }

  if (!email.includes("@")) {
    return showMessage("Email must contain @.", "error");
  }

  if (password.length < 8) {
    return showMessage("Password must be at least 8 characters.", "error");
  }

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    showMessage(data.message, response.ok ? "success" : "error");
  } catch {
    showMessage("Could not reach the server.", "error");
  }
});
