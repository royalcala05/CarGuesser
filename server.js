const express = require('express');
const app = express();
const PORT = 3000;

// get flies from the public folder 
app.use(express.static('public'));

// starts the server 
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
