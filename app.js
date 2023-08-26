const keysArray = [];
document.addEventListener("keydown", function (event) {
    const key = event.key;

  if (key.match(/^[\x20-\x7E]$/)) {
    // Check if the key pressed is a printable ASCII character
    keysArray.push(key);
  } else if (key.toLowerCase() === "backspace") {
    keysArray.pop(); // remove last item from array if Backspace is pressed
  }

  // join array items into a single string
  const keysString = keysArray.join("");

  // display the resulting string in the h1 tag
  document.querySelector("#keyText").textContent = keysString;
});
