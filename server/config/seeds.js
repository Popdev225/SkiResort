const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Family' },
    { name: 'Individual' },
    { name: 'Group' },
    { name: 'Specials' },
   
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Family Package 7 days',
      description:
        'This package includes accomodation in the luxury rooms and meals for the maximum of 6 persons including children.  Family are entitled to six hours unlimited equipment hire per day during the duration of stay.',
      image: 'imgfp6.jpg',
      category: categories[0]._id,
      price: 2500.00,
      quantity: 20
    },
    {
      name: 'Family Package 4 days',
      description:
        'This package includes accomodation in the luxury rooms and meals for the maximum of 6 persons including children. Family is entitled to six hours unlimited equipment hire per day during the duration of stay.',
      image: 'imgfp4.jpg',
      category: categories[0]._id,
      price: 1500.00,
      quantity: 10
    },
    {
      name: 'Individual Package 7 days',
      category: categories[1]._id,
      description:
        'This package includes accomodation in the luxury rooms and meals for the maximum of 2 persons, unlimited equipment hire during the duration of stay.',
      image: 'imgid7.jpg',
      price: 1200.00,
      quantity: 10
    },
    {
      name: 'Individual Package 4 days',
      category: categories[1]._id,
      description:
        'This package includes accomodation in the luxury rooms and meals for the maximum of 2 persons, unlimited equipment hire during the duration of stay.',
      image: 'imgid4.jpg',
      price: 800.00,
      quantity: 10
    },
    {
      name: 'Group Package 7 days ',
      category: categories[2]._id,
      description:
        'This package includes accomodation in the shared big apartment within the resort up to 10 persons with all the facilities including unlimited equipment hire that you would require for a comfortable stay throughout the period.  Date available (17 August - 24 August). Check-in time: 1:00 pm, Check-out time: 12:00 noon.',
      image: 'imggp7.jpg',
      price: 4500.00,
      quantity: 5
    },
    {
      name: 'Group Package 4 days',
      category: categories[2]._id,
      description:
        'This package includes accomodation in the shared big apartment within the resort up to 10 persons with all the facilities including unlimited equipment hire that you would require for a comfortable stay throughout the period. Date available (17 August - 24 August). Check-in time: 1:00pm, Check-out time: 12:00 noon.',
      image: 'imggp4.jpg',
      price: 2600.00,
      quantity: 5
    },
    {
      name: 'Special Package 7 days',
      category: categories[3]._id,
      description:
        'This is end of the season sale in which the dates are from 25 August - 2 September and accomodation in the shared big apartment or luxury rooms including unlimited equipment hire and all day meals that you would require for a comfortable stay throughout the period.  Hurry and save !!!.',
      image: 'imgres02.jpg',
      price: 1000.00,
      quantity: 5
    },
    {
      name: 'Special Package 4 days',
      category: categories[3]._id,
      description:
        'This is the end of the season sale in which the dates are from 25 August - 2 September and accomodation in the shared big apartment or luxury rooms including unlimited equipment hire and all day meals that you would require for a comfortable stay throughout the period. Hurry and save !!!',
      image: 'imgres03.jpg',
      price: 900.00,
      quantity: 3
    },
  
  ]);
  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Stella',
    lastName: 'Ling',
    email: 'stella@testmail.com',
    password: 'password62707',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Michelle',
    lastName: 'Holt',
    email: 'mholt@testmail.com',
    password: 'password62707'
    // orders: [
    //   {
    //     products: [products[0]._id, products[0]._id, products[1]._id]
    //   }
    // ]  
  });

  console.log('users seeded');

  process.exit();
});
