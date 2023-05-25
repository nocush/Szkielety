const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/strona1', (req, res) => {
    res.sendFile(path.join(__dirname, './strony/strona1.html'));
});
app.get('/strona2', (req, res) => {
    res.sendFile(path.join(__dirname, './strony/strona2.html'));
}
);
app.get('/strona3', (req, res) => {
    res.sendFile(path.join(__dirname, './strony/strona3.html'));
}
);
app.get('/strona4', (req, res) => {
    res.sendFile(path.join(__dirname, './strony/strona4.html'));
}
);
app.get('/strona5', (req, res) => {
    res.sendFile(path.join(__dirname, './strony/strona5.html'));
}
);

app.listen(port, () => {
    console.log('Serwer działa na porcie ' + port);
}
);


