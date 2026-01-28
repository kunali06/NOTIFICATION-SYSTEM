const container = document.getElementById("toast-container");

function showToast(type, message) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  toast.innerHTML = `
    <span>${message}</span>
    <button>&times;</button>
  `;

  container.appendChild(toast);

  // Remove on close click
  toast.querySelector("button").addEventListener("click", () => {
    toast.remove();
  });

  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
