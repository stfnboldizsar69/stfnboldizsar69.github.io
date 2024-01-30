function rateUs() {
    var rating = prompt("Rate us from 1 to 5 stars:");

    if (rating === null) {
        return;
    }

    rating = parseInt(rating);

    if (isNaN(rating) || rating < 1 || rating > 5) {
        alert("Please enter a valid rating between 1 and 5.");
        return;
    }
    if (!(isNaN(rating) || rating < 1 || rating > 5) && rating < 5) {
        alert("Come on, be serious!");
        return;
    }

    alert("Thank you for rating us " + rating + " stars!");
}

function getAdvice() {
    var userInput = document.getElementById("userInput").value;

    if (userInput.trim() === "") {
        alert("Please enter some text before getting advice.");
        return;
    }

    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            alert("Advice: " + data.slip.advice);
            document.getElementById("userInput").value = ""; 
        })
        .catch(error => console.error("Error fetching advice:", error));
}

document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        getAdvice();
        event.preventDefault();
    }
});

function supportUs() {
    var newTab = window.open('', '_blank');
    newTab.document.write(`
        <html>
            <head>
                <title>Support Us</title>
                <style>
                    body { font-family: 'Roboto', sans-serif; padding: 20px; }
                    label { display: block; margin-bottom: 10px; }
                    input { width: 100%; padding: 8px; margin-bottom: 15px; box-sizing: border-box; }
                    button { padding: 10px; background-color: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; }
                    button:hover { background-color: #2980b9; }
                </style>
            </head>
            <body>
                <h2>Enter Credit Card Information</h2>
                <form id="creditCardForm">
                    <label for="cardNumber">Card Number:</label>
                    <input type="text" id="cardNumber" required>

                    <label for="cvc">CVC:</label>
                    <input type="text" id="cvc" required>

                    <label for="expireDate">Expiration Date:</label>
                    <input type="text" id="expireDate" placeholder="MM/YYYY" required>

                    <label for="cardName">Cardholder Name:</label>
                    <input type="text" id="cardName" required>

                    <button type="button" onclick="processPayment()">Submit</button>
                </form>

                <script>
                    function processPayment() {
                        var cardNumber = document.getElementById("cardNumber").value;
                        var cvc = document.getElementById("cvc").value;
                        var expireDate = document.getElementById("expireDate").value;
                        var cardName = document.getElementById("cardName").value;

                        // In a real-world scenario, you would securely send this data to the server for processing.

                        alert("Thank you for your support!");
                        window.close(); // Close the support us window/tab
                    }
                </script>
            </body>
        </html>
    `);
}

function subscribeNewsletter() {
    var emailInput = document.getElementById("email").value;

    if (!validateEmail(emailInput)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for subscribing to our newsletter!");

    document.getElementById("email").value = "";
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateSidePanelColors() {
    const leftPanel = document.getElementById("leftStrip");
    const rightPanel = document.getElementById("rightStrip");

    leftPanel.style.backgroundColor = getRandomColor();
    rightPanel.style.backgroundColor = getRandomColor();
}

updateSidePanelColors();

setInterval(updateSidePanelColors, 1000);

function openAdTab() {
    const newTab = window.open('', '_blank');

    function updateAdTab() {
        newTab.document.body.style.backgroundColor = getRandomColor();
        newTab.document.body.innerHTML = `<div style="color: red; text-shadow: 2px 2px 5px yellow; font-weight: bold; font-size: 2em; text-align: center; margin-top: 50vh; transform: translateY(-50%);">Your ad could be here!</div>`;
    }

    const intervalId = setInterval(updateAdTab, 1000);    
}