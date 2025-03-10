document.getElementById('start').addEventListener('click', function() {
    let webhookURL = document.getElementById('webhook').value;
    let message = document.getElementById('message').value;
    let threads = document.getElementById('threads').value;
    let delay = document.getElementById('delay').value;

    if (!webhookURL || !message) {
        alert("Please enter a webhook URL and a message!");
        return;
    }

    for (let i = 0; i < threads; i++) {
        setInterval(() => {
            fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: message })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('output').innerHTML += "Message sent!<br>";
            })
            .catch(error => console.error("Error:", error));
        }, delay * 1000);
    }
});
