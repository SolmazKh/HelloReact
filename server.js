const express = require('express');


let app = new express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Express server is up on port 3000!')
});