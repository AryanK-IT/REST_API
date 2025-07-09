const express = require(express);
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!'); // This is a simple GET endpoint that responds with "Hello World!"
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`); // This logs the server URL to the console
});

// This code sets up a basic Express server that listens on port 3000 and responds to GET requests at the root URL with "Hello World!". 