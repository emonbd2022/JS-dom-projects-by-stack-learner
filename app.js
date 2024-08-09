
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('change-btn');
    button.addEventListener('click', () => {
        // Generate a random color
        const randomColor = generateRandomColor();
        // Change the background color
        document.body.style.backgroundColor = randomColor;
    });
});

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}