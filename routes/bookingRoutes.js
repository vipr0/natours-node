const express = require('express');
const { protect, restrictTo } = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router({ mergeParams: true });

router.use(protect);

router.get('/checkout-session/:tourID', bookingController.getCheckoutSession);

router.use(restrictTo('admin'));

router
  .route('/')
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route('/:id')
  .get(bookingController.getBookingById)
  .patch(bookingController.updateBooking)
  .delete(bookingController.removeBooking);

module.exports = router;
