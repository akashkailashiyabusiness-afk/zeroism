document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Reading Mode";
    toggleBtn.classList.add("toggle-btn");
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("reading-mode");
    });
});