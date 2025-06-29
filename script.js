console.log("Script loaded!");

function showSection(section) {
  hideAllSections();
  document.getElementById(section + '-section').style.display = 'block';
}

function hideSection(section) {
  document.getElementById(section + '-section').style.display = 'none';
}

function hideAllSections() {
  document.getElementById('chat-section').style.display = 'none';
  document.getElementById('symptoms-section').style.display = 'none';
  document.getElementById('appointment-section').style.display = 'none';
  document.getElementById('resources-section').style.display = 'none';
}

function handleChatKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (message === '') return;

  const chatMessages = document.getElementById('chat-messages');
  
  // User message
  const userDiv = document.createElement('div');
  userDiv.classList.add('message', 'user');
  userDiv.innerHTML = `<div class="message-content">${message}</div>`;
  chatMessages.appendChild(userDiv);

  // Bot reply (simple static for now)
  const botDiv = document.createElement('div');
  botDiv.classList.add('message', 'bot');
  botDiv.innerHTML = `<div class="message-content">Thank you for your message. I will assist you shortly.</div>`;
  chatMessages.appendChild(botDiv);

  input.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function toggleSymptom(element) {
  element.classList.toggle('selected');
}

function analyzeSymptoms() {
  const selected = document.querySelectorAll('.symptom-tag.selected');
  const results = document.getElementById('symptom-results');
  if (selected.length === 0) {
    results.innerHTML = "No symptoms selected.";
  } else {
    results.innerHTML = "Based on your symptoms (" +
      Array.from(selected).map(el => el.innerText).join(", ") +
      ") please consult a doctor for proper diagnosis.";
  }
}
