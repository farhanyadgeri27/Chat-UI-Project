function sendMessage() {
    let input = document.getElementById("input");
    let text = input.value;

    if (text.trim() === "") return;

    let messages = document.getElementById("messages");

    // Hide welcome
    let welcome = document.getElementById("welcome");
    if (welcome) welcome.style.display = "none";

    // User message
    let userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerText = text;
    messages.appendChild(userMsg);

    // Sidebar history
    let history = document.getElementById("history");
    if (history) {
        let item = document.createElement("div");
        item.innerText = text;
        history.appendChild(item);
    }

    input.value = "";
    messages.scrollTop = messages.scrollHeight;

    // Typing
    let typing = document.createElement("div");
    typing.className = "message ai";
    typing.innerText = "Typing...";
    messages.appendChild(typing);

    messages.scrollTop = messages.scrollHeight;

    setTimeout(function () {

        messages.removeChild(typing);

        let reply;
        let userText = text.toLowerCase();

        if (userText.includes("hello") || userText.includes("hi")) {
            reply = "Hello! 👋 How can I help you?";
        }
        else if (userText.includes("how are you")) {
            reply = "I'm doing great 😊";
        }
        else if (userText.includes("name")) {
            reply = "I'm your AI assistant 🤖";
        }
        else if (userText.includes("bye")) {
            reply = "Goodbye! 👋";
        }
        else {
            let responses = [
                "That's interesting!",
                "Tell me more 😊",
                "Nice question!",
                "I understand 👍"
            ];
            reply = responses[Math.floor(Math.random() * responses.length)];
        }

        let aiMsg = document.createElement("div");
        aiMsg.className = "message ai";
        aiMsg.innerText = reply;

        messages.appendChild(aiMsg);
        messages.scrollTop = messages.scrollHeight;

    }, 1500);
}


// Enter key
document.getElementById("input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
    }
});


// Sidebar toggle
let menuBtn = document.getElementById("menuBtn");
let sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
});


// Dark mode
let darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});