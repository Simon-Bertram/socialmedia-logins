import express from 'express';
import cookieSession from 'cookie-session';
import cors from 'cors';
import passport from 'passport';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  name: "session",
  keys: ["secret"],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(cors({
  origin: 'http://localhost:3000',
  methods: "GET,PUT,PATCH,POST,DELETE",
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});