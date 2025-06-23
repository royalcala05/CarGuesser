// IMPORTANT reference: https://developer.mozilla.org/en-US/docs/Web/API/Response 
// utf is fetch spec mandate 



const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
// files in public folder 
app.use(express.static('public'));

// Route for home 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for play screen
app.get('/play', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'playScreen.html'));
});

// Route for sign in
app.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signIn.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


// Random car list
const carList = [
  "Porsche 911",
  "BMW E90 328i",
  "Jeep Wrangler",
  "Bugatti Chiron",
  "Mazda Miata",
  "Nissan GT-R",
  "Toyota Supra mk5"
];

// this creates the ROUTE in express for get requests 
app.get('/api/random-car-image', async (req, res) => {
  // taking a random car from the list 
  const car    = carList[Math.floor(Math.random() * carList.length)];
  // grabs random car 


  // whats going on my browser sends an get api requst, then server picks a random model 
  const apiUrl = `http://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${encodeURIComponent(car)}`;
  // build a string for the api call, 
  // GET /api.asmx/GetImageUrl?searchTerm=string HTTP/1.1, this is from the documentation 
  // we actually encode the random car 


  try {
    // await makes sure the whole promise chain finishes and puts the string in xml 
    // fethces the url then puts it into a response obeject, which is unreadable(raw bytes), 
    // the text() function reads the stream cunk by cuhk and returns a promise that resolves the decoded string 
    const xml   = await fetch(apiUrl).then(r => r.text());
    // xml is now just <string xmlns="http://carimagery.com/">
    // http://img.carimagery.com/Bugatti-Chiron.jpg </string>




    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
    // match "returns an array containing all of the matches, including capturing groups, or null if no match is found.
    const match = xml.match(/>(https?:\/\/[^<]+)<\/string>/s);

    // match is like an array with the first value being equal to 
    // 1. ttp://img.carimagery.com/Bugatti-Chiron.jpg</string>"
    // 2. http://img.carimagery.com/Bugatti-Chiron.jpg 

    
    if (match && match[1]) // makes sure the regex found a url 
       {
        // if it is there then we convert it to https and send it as a json 
      const httpsUrl = match[1].replace('http://', 'https://'); 

      return res.json({ car, imageUrl: httpsUrl });
        // car:       "Bugatti Chiron",
        // imageUrl:  "https://img.carimagery.com/Bugatti-Chiron.jpg"


    }
    res.status(404).json({ error: 'No image found' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

app.listen(PORT, () => {
  console.log(`✅  Server running at http://localhost:${PORT}`);
});
