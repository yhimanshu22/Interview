import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

let users = [
    { id: 1, name: 'Himanshu Yadav', email: 'himanshu@example.com' },
    { id: 2, name: 'John Doe', email: 'john@example.com' },
    { id: 3, name: 'Himanshu Yadav', email: 'himanshu@example.com' },
    { id: 4, name: 'Himanshu Yadav', email: 'himanshu@example.com' },
    { id: 5, name: 'Himanshu Yadav', email: 'himanshu@example.com' },
    { id: 6, name: 'Himanshu Yadav', email: 'himanshu@example.com' },
    { id: 7, name: 'Himanshu Yadav', email: 'himanshu@example.com' },
];

// Route to get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Route to get a user by ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Route to create a new user
app.post('/api/users', (req, res) => {

    const { name, email } = req.body;

    const newUser = { id: users.length + 1, name, email };

    users.push(newUser);
    res.status(201).json(newUser);
});

// Route to update a user
app.put('/api/users/:id', (req, res) => {
    const { name, email } = req.body;
    const userIndex = users.findIndex((user) => user.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        users[userIndex] = { id: users[userIndex].id, name, email };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Route to delete a user
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex((user) => user.id === parseInt(req.params.id));
    
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).end(); // No content response for successful deletion
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
