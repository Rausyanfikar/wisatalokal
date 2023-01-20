import './configs/env.js';
import express from 'express';
import userRoute from './users/users.routes.js';
import authRoute from './auth/auth.routes.js';
import restaurantRoute from './restaurants/restaurants.routes.js';
import bookingRoute from './bookings/bookings.routes.js';
import commentRoute from './comments/comments.routes.js';
import facilitieRoute from './facilities/facilities.routes.js';
import favouritRoute from './favourites/favourites.routes.js';
import resto_imageRoute from './resto_images/resto_images.routes.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoute);
app.use('/', authRoute);
app.use('/', restaurantRoute);
app.use('/', bookingRoute);
app.use('/', commentRoute);
app.use('/', facilitieRoute);
app.use('/', resto_imageRoute);
app.use('/', favouritRoute);

app.get('/hallo', (req, res) => {
  res.send('hello world');
});

console.log('------------------------------------------------');
console.log(process.env.DATABASE_HOST);

console.log(process.env.DATABASE_USERNAME);
console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.DATABASE_HOST);
console.log(process.env.DATABASE_NAME);
console.log(process.env.API_PORT);
console.log('------------------------------------------------');

// start server
app.listen(process.env.API_PORT, () => {
  console.log(`Express API is listening on port ${process.env.API_PORT}`);
});
