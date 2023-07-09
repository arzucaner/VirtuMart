# VirtuMart E-Commerce Platform

Welcome to VirtuMart, a professional and customizable graphic design templates e-commerce website. With VirtuMart, you can create your projects quickly and impressively using our comprehensive collection of high-quality design templates for customizable posters, brochures, logos, and more.

## Table of Contents
- [Project Brief](#project-brief)
- [Description](#description)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)
- [UML Diagram](#umldiagram)


## Project Brief
[VirtuMart Project Brief.pdf](https://github.com/arzucaner/VirtuMart/files/11995629/VirtuMart.Project.Brief.pdf)

## Description
VirtuMart is an e-commerce platform that allows users to browse and purchase professional graphic design templates. The website offers a diverse range of design options suitable for various industries. Users can easily customize the templates by editing texts, colors, and shapes, enabling them to create unique and impressive designs that reflect their brand's style and values.

## Getting Started
To get started with VirtuMart, follow these steps:

1. Clone the repository: `git clone https://github.com/arzucaner/VirtuMart.git`
2. Install the dependencies: `npm install`
3. Set up your environment variables by creating a `.env` file. Refer to the `.env.example` file for the required variables.
4. Start the server: `npm start`

## Technologies
VirtuMart is built using the following technologies:

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML
- CSS

## Installation
To install VirtuMart locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/virtumart.git`
2. Install the dependencies: `npm install`

## Usage
To use VirtuMart, follow these steps:

1. Start the server: `npm start`
2. Open your web browser and go to: `http://localhost:3000`
3. Browse the products, add them to your cart, and proceed to checkout.

## API Endpoints
VirtuMart provides the following API endpoints:

- `GET /api/users`: Get all users
- `POST /api/users`: Create a new user
- `GET /api/products`: Get all products
- `POST /api/products`: Create a new product
- `GET /api/carts`: Get all carts
- `POST /api/carts`: Create a new cart
- `GET /api/orders`: Get all orders
- `POST /api/orders`: Create a new order

## Tests
VirtuMart includes unit tests to ensure the reliability of the code. To run the tests, follow these steps:

1. Ensure you have the necessary dependencies installed: `npm install`
2. Run the tests: `npm test`

## Contributing
Contributions to VirtuMart are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push the changes to your branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License
This project is licensed under the MIT License.

## UML Diagram

![UML Diagram](https://github.com/arzucaner/VirtuMart/assets/108270415/a74f345c-6dfc-4bda-8ce7-4e3cc5d6d92f)


This UML diagram represents the core classes and their relationships in the VirtuMart application. 
The `User` class includes functions such as user registration, login, and logout. 
The `Cart` class represents cart operations like adding products, removing products, and checking out. 
The `Order` class encompasses functions like placing an order, cancelling an order, and making payment. 
This diagram provides an overview of the application's structure and the relationships between classes.
