import express from 'express';
import passport from 'passport';

const CLIENT_URL = process.env.NODE_ENV === 'production' ? 'https://www.example.com' : 'http://localhost:3000/';

const router = express.Router();

// Google OAuth login route
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Google OAuth callback route
router.get('/google/callback', passport.authenticate('google'), {
  successRedirect: CLIENT_URL,
  failureRedirect: "/login/failed"
});