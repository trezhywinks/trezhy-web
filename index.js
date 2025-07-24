const colors = require('colors');
const path = require('path');
//const fs = require('fs');
const express = require('express');
const trezhywinks = express();
const port = '8000';
trezhywinks.get('/server', (req, res) => {
res.sendFile(path.join (__dirname, './index.html'))
})
trezhywinks.listen(port, () => {
console.log("[+]".bold.white, "Server running in localhost:8000".bold.red)
})
