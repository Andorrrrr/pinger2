const express = require("express");
const fetch = require ('node-fetch')
const app = express();


app.get("/", (req, res) => {
  res.send('H E C K Y E A H')
});

function pong() { 
fetch("https://lyrical-roasted-exhaust.glitch.me");
  fetch("https://gem-ahead-breadfruit.glitch.me");
  fetch("https://bristle-friendly-archeology.glitch.me");
  fetch("https://talented-cooperative-event.glitch.me");
  fetch("https://bottlenose-citrine-schooner.glitch.me");
  fetch("https://merciful-chlorinated-driver.glitch.me");
  fetch("https://torpid-crawling-exception.glitch.me");
  fetch("https://seed-silver-shield.glitch.me");
  fetch("https://orange-frequent-morning.glitch.me");
  fetch("https://coal-charming-iron.glitch.me");

  
console.log('hAha site ping go BrRRR')
} 

setInterval(pong, 60000);


// listen for requests | Don't change this!
const listener = app.listen(process.env.PORT, () => {
  console.log("Listening on PORT " + listener.address().port);
});
