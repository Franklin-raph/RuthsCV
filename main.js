const socket = new WebSocket("ws://localhost:4000");
socket.onopen = function (event) {
  console.log("WebSocket connection established.");
};

socket.onmessage = function (event) {
  console.log("Received message from server:", event.data);
};

socket.onclose = function (event) {
  console.log("WebSocket connection closed.");
};

socket.onerror = function (error) {
  console.error("WebSocket error:", error);
};
