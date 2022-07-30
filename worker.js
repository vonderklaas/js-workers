// worker is simply another Thread to our JavaScript
// worker doesn't have access to the DOM
// Main Thread and Worker Thread can communicate using messages

onmessage = function (e) {
  // Message
  console.log(e);

  let computationValue = 0;
  for (let i = 0; i < 10000000000; i++) {
    computationValue += 1;
  }
  postMessage(computationValue);
};
