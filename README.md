# Hotel App

The Hotel App is a web application that allows users to view a list of hotels with detailed information. Users can register, log in, and perform various actions based on their authentication status.


<img width="960" alt="hotel2" src="https://github.com/lavesh01/hotel_app/assets/79662096/61804493-5ea6-4903-b0e5-599665d8a792">
<img width="959" alt="hotel3" src="https://github.com/lavesh01/hotel_app/assets/79662096/57c1cd14-4bfd-45d5-bcef-f6e75b16c4bf">
<img width="960" alt="hotel4" src="https://github.com/lavesh01/hotel_app/assets/79662096/7984c493-812b-43b9-b78b-b3ad1e85f856">


## Features

- View a list of hotels with essential details.
- Authentication:
  - Register a new user account.
  - Log in with a registered account.
  - Log out securely.
- Authorization:
  - Users can only edit or delete hotel entries if authenticated.
  - Unauthenticated users can only view the hotel information.
- Hotel Table:
  - View a table containing hotel details:
    - Hotel Code
    - Hotel Name
    - Country Name
    - Country Code
    - City Name
    - City Code
  - Post and delete actions available for authenticated users.
  - Read-only mode for unauthenticated users.

## Technologies Used

- Frontend:
  - React
  - Redux
  - Ant Design (antd)
  - Axios

- Backend:
  - Express.js
  - MySQL
  - JSON Web Tokens (JWT) for authentication
  - Bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MySQL database configured.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/hotel-app.git
    ```

2. **Install Dependencies:**

    Navigate to the client directory and install frontend dependencies:

    ```bash
    cd hotel-app/client
    npm install
    ```

    Move to the server directory and install backend dependencies:

    ```bash
    cd ../server
    npm install
    ```

### Database Setup

3. **Database Configuration:**

    - Create a MySQL database and configure the connection details in `server/config/db.js`.

### Starting the App

4. **Start the Applications:**

    Start the frontend (client) by running:

    ```bash
    cd hotel-app/client
    npm run dev
    ```

    Start the backend (server) by running:

    ```bash
    cd ../server
    npm run dev
    ```

    
    Open your browser and visit [http://localhost:5173/](http://localhost:5173/) to access the Hotel App.
