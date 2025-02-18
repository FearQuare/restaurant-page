export default function menuPage() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clears previous content

    // Create menu items dynamically
    for (let i = 1; i <= 9; i++) {
        const menuItem = document.createElement("div");
        menuItem.className = "menu"; // Correctly assigns the class
        menuItem.textContent = `Menu Item ${i}`; // Example text to make them visible
        content.appendChild(menuItem);
    }
}