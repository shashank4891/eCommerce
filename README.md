
# E-Commerce API




## Introduction

This project is an E-Commerce API built using Node.js, Express.js and MySql Database. It provides various endpoints for managing Categories, ProductsByCategories, ProductList, RegisterNewUser, LoginUser, AddToCart, ViewCart, UpdateCart, DeleteCartItem, Orders, and more. The API allows users to browse products, add them to their carts, place orders, and view their order history.
## Features

- User Authentication: Users can register and login. Authentication is handled using JSON Web Tokens (JWT).
- Category Management: Any users can browse product categories.
- Product Management: Any users can browse a particular product by its categories.
- User Registration/Login: New user can register and existing user can login.
- Token-Based Authorization: Certain endpoints require authentication using JWT tokens to access.
- Cart Management: Users can add products to their carts, view cart contents, update item quantities, and remove items from the cart.
- Order Placement: Authenticated users can place orders for products in their carts. Orders are stored in the database with order details.
- Order History: Authenticated users can view their order history to track past purchases.
- Order By OrderID: Authenticated users can view their particular order history by OrderID.


## Installation

- Clone the repository:

```bash
 git clone <repository_url>
```
- Set up environment variables:
Create a .env file in the root directory and add the following environment variables:

```bash
PORT=8080

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root123
DB_DATABASE=e-commerce

JWT_SECRET=your_jwt_secret
ACCESS_TOKEN_SECRET=your_access_token_secret
```
Replace your_jwt_secret and your_access_token_secret with your own secret keys for JWT token generation.

- Start the server:

```bash
 npm start
```
    
## Usage

**API Endpoints**

- Category

```bash
GET /api/category :Get all categories.
```
- Product By Category Id

```bash
GET /api/category/categoryId :Get all product by categoryId.
```

- Product List

```bash
GET /api/products/categoryId :Get all product by productId.
```
- User

```bash
POST /api/register :Register a new user. required json :
    "email": "hello@example.com",
    "password": "hello",
    "first_name": "hello",
    "last_name": "hello"

```

```bash
POST /api/login :Login as an existing user. required json : 
    "email": "hello@example.com",
    "password": "hello"

```
- Cart

```bash
POST /api/add-to-cart :Add a product to the cart. required json:  "user_id": "3",
    "product_id": "2",
    "qty": "1"
```
```bash
GET /api/view-cart :View the contents of the cart. 
```
```bash
PUT /api/update-cart/:product_id :Update quantity of a product in the cart. required json: 
    "cart_id": "2",
    "qty": "500"
```
```bash
DELETE /api/remove-from-cart/:product_id :Remove a product from the cart. required json: 
    "cart_id": "2"
```
- Orders

```bash
POST /api/orders :Place a new order. required json: 
    "address": "123 Main Street, City, Country"
```
```bash
GET /api/orders/history :View order history.
```
```bash
GET /api/orders/:orderId :Get details of a specific order.
```



## Authentication

To access protected endpoints, include an Authorization header with the value Bearer <token> where <token> is the JWT token obtained after successful login.
## Contribution

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.
