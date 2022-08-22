## 23 Final Project : MERN Stack Single-Page Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project is to build an application encouraging the users to stay active, enjoy the fresh air and sunshine found on the top of the mountain. Skiing is an excellent way to burn a ton of calories while getting in some great runs and feeling healthier. The application will be created as a MERN stack single-page application in which the users will be able to browse through the different ski packages and add the package or remove the package before checkout. Stripe payment platform will be used for the users to pay for the package.

The URL of the GitHub repository is https://github.com/stellalph/MERN-Ski-Resort.git and the repository name is MERN-Ski-Resort.

The URL of the deployed application is https://still-harbor-63486.herokuapp.com/

Project 3 Contributor : Stella Ling

## Table of Contents

- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Usage](#usage)
- [References](#references)
- [License](#license)

## Technologies Used

- The MERN stack has a three-layer architecture based on Model-View-Controller pattern and each interconnected layer performs a specific function in the application and this application is a MERN stack application which is a group of four technologies:-

  - React JS for the front end, that is, the client (View) in which the user inputs data and the data display,
  - GraphQL with a Node.js and Express.js server for the method called to store and retrieve data,
  - MongoDB and Mongoose ODM for the database (Model) to store raw data and contains no logic.

- The folder and file structure is set according to MVC pattern as below screenshot:-

  ![alt text](./client/public/images/mvcfs.jpg)

- As a start and at the command prompt, type in _npm install_ to ensure all that the dependencies are installed.

- In addition, the following npm packages were installed to this application:-

  - Server (back end)

    - apollo-server-express (npm i apollo-server-express)
    - bcrypt (npm installl bcrypt)
    - dotenv (npm install dotenv)
    - express (npm install express)
    - graphql (npm install graphql)
    - jsonwebtoken (npm install jsonwebtoken)
    - mongoose (npm install mongoose)
    - stripe (npm install stripe --save)

  - Client (front end)

    - reactstrap (npm install reactstrap react react-dom)
    - bootstrap (npm install --save bootstap)
    - react Icons (npm install react-icons --save)
    - react (npm i react)
    - react toastify (npm install --save react-toastify)
    - jwt-decode (npm install jwt-decode)
    - validator (npm i validator)
    - @emailjs/browser (npm install @emailjs/browser)
    - web vitals (npm install web-vitals)
    - react-hook-form (npm install react-hook-form)
    - react-router-dom (npm i react-router-dom)
    - react-scripts (npm i react-scripts)
    - moment (npm i moments)
    - graphql-tag(npm i graphql-tag)
    - graphql (npm install graphql)
    - emailjs (npm install emailjs)
    - date-fns (date-fns)
    - stripe (npm install stripe --save)
    - apollo-link-context (npm i apollo-link-context)
    - apollo Client (npm i @apollo/client)
    - react apollo-hooks (npm install @apollo/react-hooks)
    - apollo-boost (npm i apollo-boost)

- Before deploying to Heroku, the application is run in develop mode and tested using GraphQL by entering at command prompt:-

  - npm run seed
  - npm run develop ( cd to the correct directory)

    ![alt text](./client/public/images/dev01.jpg)

- An example of the testing using GraphQL playground at http://localhost:3001/graphql

  ![alt text](./client/public/images/GraphQLex.jpg)

- This application also uses sensitive API key information on the server - JWT, MONGODB_URI and Stripe Secret Key has loaded onto .ENV file has been loaded for the protection. Emailjs 's template ID, Service ID and User ID has also relocated to .ENV file on the client's side.

## Deployment

- This application has been deployed to Heroku with MongoDB database using MongoDB Atlas and below is an example of MongoDB database using MongoDB Atlas (products and purchase history):-

  - Products/Package
    ![alt text](./client/public/images/mongodbatlas.jpg)

  - Purchase on 21/08
    ![alt text](./client/public/images/mongodbatlas2.jpg)

- Click here for the deployed application on [Heroku](https://still-harbor-63486.herokuapp.com/)

## Usage

Below are the screenshots of the walkthrough steps in which the user will able to browse through the different packages.

- When the user load onto the website, the user would be able to see the landing page, the navbar with the name of the resort, the login, register, about, the cart for checkout, welcome message from the resort and a number of ski packages selection.

  ![alt text](./client/public/images/ap01.jpg)

- When the user choose a category, the user will only see the ski packages under that category (Group in the screenshot below):-

  ![alt text](./client/public/images/ap01a.jpg)

- When the user click on "Family Package 7 days", the user will taken to the page which shows more information about the product/package and the user click on "Add to Cart", the pop up message will prompt the user to log in before proceeding.

  ![alt text](./client/public/images/ap02.jpg)

- When the user click on the "Register", the user will be taken to the Register page prompting the user to enter their first name, last name, email, and password. Once submitted, the user will taken back to the home page (MERN Ski Resort)

  ![alt text](./client/public/images/ap04.jpg)

- Once at the home page (landing page), the user will be able to do the checkout by paying for the package using Stripe Payment Platform as per below screenshot. The successful payment will be display "Success ! Thank you for your purchase!". A screenshot is not possible for this message.

  ![alt text](./client/public/images/Stripe01.jpg)

- If the user wishes to make a cancellation due to unforeseen circumstances or want to enquiry further about the package, a contact form is available for them to fill and also email validation is set up for the users to enter a valid email address and the message can be sent to the MERN Ski Resort Team.

  ![alt text](./client/public/images/ap05.jpg)

- The email sent from MERN Ski Resort website:-

  ![alt text](./client/public/images/EMJ.jpg)

- Email validate on the contact form:-

  ![alt text](./client/public/images/EmailValidate.jpg)

## References

- Request Response - The Full Stack Blog - Set up MongoDB Atlas dated May 10, 2022
- Request Response - The Full Stack Blog - Deploy with Heroku and MongoDB Atlas dated July, 2022
- Request Response - The Full Stack Blog - Using the GraphQL Playground in a MERN application dated May 19, 2022
- [ReactJS Reactstrap Carousel Component - Geeksforgeeks.org dated 22 Jul, 2021](https://www.geeksforgeeks.org/reactjs-reactstrap-carousel-component/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Reactstrap Library and Documentation](https://reactstrap.github.io/?path=/docs/components-carousel--carousel)
- [React Bootstrap Documenation](https://react-bootstrap.github.io/)
- [EmailJS Documentation](https://www.emailjs.com/docs/sdk/send/)
- [Stripe Documentation](https://www.emailjs.com/docs/sdk/send/)
- [JWT Documentation](https://jwt.io/introduction/)
- How to use react-icons to install Font Awesome in a React app by Miracle Ugorji dated September 20, 2021
- How to integrate Stripe with a React Application by Mohammed Faisal dated September, 2021
- [Apollo Documentation](https://www.apollographql.com/docs/)
- The Unit Ahead Material Unit 21 - MERN, React Router, GraphQL and JSON Web Token


## License

This project is licensed under the terms of the MIT license
