const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', function (event) {
  console.log('Conexão estabelecida com o servidor WebSocket');
});

socket.addEventListener('message', function (event) {
  const messageList = document.getElementById('message-list');
  const newMessage = document.createElement('li');
  newMessage.textContent = event.data;
  messageList.appendChild(newMessage);
});

document.getElementById('send-button').addEventListener('click', function () {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;

  if (message) {
    socket.send(message);
    messageInput.value = '';
  }
});
