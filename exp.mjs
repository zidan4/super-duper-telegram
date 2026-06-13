import express from 'express';
import { exec } from 'child_process';

const app = express();
const port = 3000;

app.get('/git', (req, res) => {
    exec('git status', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing git command: ${error.message}`);
            return res.status(500).send('Internal Server Error');
        }
        if (stderr) {
            console.error(`Git command error: ${stderr}`);
            return res.status(500).send('Internal Server Error');
        }
        res.send(`<pre>${stdout}</pre>`);
    });
});

app.get('/git/commit', (req, res) => {
    const message = req.query.message || 'No commit message provided';
    exec(`git commit -m "${message}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing git command: ${error.message}`);
            return res.status(500).send('Internal Server Error');
        }
        if (stderr) {
            console.error(`Git command error: ${stderr}`);
            return res.status(500).send('Internal Server Error');
        }
        res.send(`<pre>${stdout}</pre>`);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});