const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
    const url = `http://localhost:${PORT}/main.html`;
    switch (process.platform) {
        case 'darwin':
            exec(`open ${url}`);
            break;
        case 'win32':
            exec(`start ${url}`);
            break;
        default:
            exec(`xdg-open ${url}`);
    }
});
