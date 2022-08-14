const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Family' },
    { name: 'Individual' },
    { name: 'Group' },
    { name: 'Specials' },
    // { name: 'Food' }
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
        'This package includes accomodation in the shared big apartment within the resort up to 10 persons with all the facilities including unlimited equipment hire that you would require for a comfortable stay throughout the period.  Date available (17 Aug - 24 Aug). Check-in time: 1:00 pm, Check-out time: 12:00 noon',
      image: 'imggp7.jpg',
      price: 4500.00,
      quantity: 5
    },
    {
      name: 'Group Package 4 days',
      category: categories[2]._id,
      description:
        'This package includes accomodation in the shared big apartment within the resort up to 10 persons with all the facilities including unlimited equipment hire that you would require for a comfortable stay throughout the period. Date available (17 Aug - 24 Aug). Check-in time: 1:00pm, Check-out time: 12:00 noon',
      image: 'imggp4.jpg',
      price: 2600.00,
      quantity: 5
    },
    {
      name: 'Special Package 7 days',
      category: categories[3]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 2500.00,
      quantity: 5
    },
    {
      name: 'Special Package 4 days',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 900.00,
      quantity: 5
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
    password: 'password62707',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]  
  });

  console.log('users seeded');

  process.exit();
});
