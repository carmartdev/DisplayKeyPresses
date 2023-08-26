var keysArray = [];

document.addEventListener("keydown", function (event) {
  var key = event.key;

  if (key.match(/^[\x20-\x7E]$/)) {
    keysArray.push(key);
  } else if (key.toLowerCase() === "backspace") {
    keysArray.pop();
  }

  if (key === "Enter") {
    var newH1 = document.createElement("h1");
    var textNode = document.createTextNode(keysArray.join(""));
    newH1.appendChild(textNode);
    document.querySelector("#moreTexts").appendChild(newH1);
    keysArray = []; // clear the array
  } else {
    // Join array items into a single string
    var keysString = keysArray.join("");

    // Replace instances of "if" and "else" with the highlighted version
    var formattedString = keysString.replace(
      /(if|else)/gi,
      '<span class="red">$&</span>'
    );

    // Display the resulting string in the h1 tag
    document.querySelector("#keyText").innerHTML = formattedString;
  }
});
