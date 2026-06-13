import express from 'express';

const app = express();
const port = 3000;

app.get('', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.post('/submit', (req, res) => {
    res.send('Form submitted');
});

app.put('/update', (req, res) => {
    res.send('Update successful');
});

app.patch('/patch', (req, res) => {
    res.send('Patch successful');
});

app.delete('/delete', (req, res) => {
    res.send('Delete successful');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});