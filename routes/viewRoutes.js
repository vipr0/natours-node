const express = require('express');
const {
  isLoggedIn,
  protect,
  verifyEmail
} = require('../controllers/authController');
const viewsController = require('../controllers/viewsController');
const { createBookingCheckout } = require('../controllers/bookingController');

const router = express.Router();

router.get('/', createBookingCheckout, isLoggedIn, viewsController.getOverview);
router.get('/tours/:slug', isLoggedIn, viewsController.getTour);
router.get(
  '/login',
  isLoggedIn,
  viewsController.getAuthorizationForm('login', 'Log in to your account')
);
router.get(
  '/signup',
  isLoggedIn,
  viewsController.getAuthorizationForm('signup', 'Create a new account')
);
router.get(
  '/verify',
  isLoggedIn,
  verifyEmail,
  viewsController.getAuthorizationForm('login', 'Log in to your account')
);
router.get('/me', protect, viewsController.getAccount);
router.get('/my-tours', protect, viewsController.getMyTours);

router.post('/submit-user-data', protect, viewsController.updateUserData);

module.exports = router;
