Maman's Inventory Management App
A simple inventory management system to track and manage products, designed specifically for small businesses (my mom's) needing an easy-to-use application to organize their stock.

Description
This app allows users to manage an inventory database by adding, updating, and tracking items. Each item entry includes details such as name, quantity, price, category, and description, making it straightforward to maintain a comprehensive view of stock levels.

Features
Add new items to the inventory with details such as name, quantity, price, category, and description.
Update existing items to keep stock information accurate.
View and track items to quickly see current stock levels and details.
Remove items if no longer in stock or needed.
Tech Stack
Backend: Node.js, Express
Database: MongoDB (hosted on MongoDB Atlas)
Version Control: Git and GitHub
Installation
To run this project locally, follow these steps:

Clone the repository:

git clone (https://github.com/kamufozi/Inventory-Management-App-mama-.git)

Navigate to the project directory:

cd Inventory-Management-App
Install dependencies:

npm install
Set up environment variables:

Create a .env file in the root directory.
Add your MongoDB connection string:
plaintext

MONGO_URI=mongodb+srv://kamufozi679:LZEAEMnM4bcRtXLp@cluster1.h6ras.mongodb.net/ndakakuroga?retryWrites=true&w=majority&appName=Cluster1
Start the server:

bash

node server.js

Access the app:

The server will run on http://localhost:3000.
Usage
Once the server is running, you can:

Use the endpoint at / to verify that the server is active.
Manage inventory items by adding, updating, and deleting them through the backend routes (to be implemented).
Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome and advices on how to improve the app !
