const express = require('express');
const { spawn } = require('child_process');
const app = express();

app.get('/', (req, res) => res.send('✅ Bot is Alive!'));

app.listen(3000, () => {
  console.log("✅ Keepalive server running on port 3000");
  
  // Start actual bot code
  spawn('node', ['main.js'], {
    stdio: 'inherit'
  });
});
