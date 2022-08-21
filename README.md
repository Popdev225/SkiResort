## 23 Final Project : MERN Stack Single-Page Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project is to build an application encouraging the users to stay active, enjoy the fresh air and sunshine found on the top of the mountain. Skiing is an excellent way to burn a ton of calories while getting in some great runs and feeling healthier. The application will be created as a MERN stack single-page application in which the users will be able to browse through the different ski packages and add the package or remove the package before checkout. Stripe payment platform will be used for the users to pay for the package.

The URL of the GitHub repository is https://github.com/stellalph/MERN-Ski-Resort.git and the repository name is MERN-Ski-Resort.

The URL of the deployed application is https://still-harbor-63486.herokuapp.com/

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

- As a start and at the command prompt, type in _npm install_ to ensure all that the dependencies are installed.

- In addition, the following npm packages were installed to this application:-

  - Server (Back-End)

    - apollo-server-express (npm i apollo-server-express)
    - bcrypt (npm installl bcrypt)
    - dotenv (npm install dotenv)
    - express (npm install express)
    - graphql (npm install graphql)
    - jsonwebtoken (npm install jsonwebtoken)
    - mongoose (npm install mongoose)
    - stripe (npm install stripe --save)

  - Client (Front-End)

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

- This application also uses sensitive API key information on the server - JWT, MONGODB_URL and Stripe Secret Key has loaded onto .ENV file has been loaded for the protection. Emailjs 's template ID, Service ID and User ID has also relocated to .ENV file on the client's side.

## Deployment

- This application has been deployed to Heroku with MongoDB database using MongoDB Atlas and below is an example of MongoDB database using MongoDB Atlas (products, users and purchase history):-

  ![alt text](./client/public/images/mongodbatlas.jpg)
  ![alt text](./client/public/images/mongodbatlas2.jpg)

## Usage

## References

- Request Response - The Full Stack Blog - Set up MongoDB Atlas dated May 10, 2022
- Request Response - The Full Stack Blog - Deploy with Heroku and MongoDB Atlas dated July, 2022
- Request Response - The Full Stack Blog - Using the GraphQL Playground in a MERN application dated May 19, 2022

## License

This project is licensed under the terms of the MIT license
