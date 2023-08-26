# Display Key Presses

This is a "Key Listener Tool" that captures user keystrokes, processes them and displays them dynamically on a styled webpage in real-time.
It's a simple and lightweight project.
The project is developed with two distinct components:

## Front End:
The front-end uses a combination of HTML and CSS to provide a visually appealing user interface. Inspired by the popular coding theme, Dracula, the web page employs a visually comforting dark mode. It is designed to dynamically display the users' keystroke inputs in real-time within an H1 tag. 

## Back End:
The core functionality of the project includes a real-time key listener tool developed using JavaScript. This tool listens for all printable ASCII character inputs, including spaces, alphabets (a-z & A-Z), numbers (0-9), and standard symbols. 

Notable back-end functionalities include:
- Logs printable ASCII characters.
- Erases the last applied character on hitting the 'Backspace' key.
- Restricts acknowledgement of non-printable keys such as 'Control', 'Shift', 'F1-F12', etc.
