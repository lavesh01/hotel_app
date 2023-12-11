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


   You can also use my database here : 
[Uploading hotels_app.sql…]()-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2023 at 01:35 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotels_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `hotel_city` varchar(50) NOT NULL,
  `city_code` int(11) NOT NULL,
  `created_at` int(11) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `hotel_city`, `city_code`, `created_at`) VALUES
(1, 'New York', 1, 144412),
(2, 'London', 2, 144412),
(5, 'Tokyo', 3, 144412),
(6, 'Sydney', 4, 144412),
(7, 'Paris', 5, 144412),
(8, 'Mumbai', 6, 144440);

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `hotel_country` varchar(50) NOT NULL,
  `country_code` int(11) NOT NULL,
  `created_at` int(11) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `hotel_country`, `country_code`, `created_at`) VALUES
(1, 'USA', 1, 144118),
(2, 'UK', 2, 144118),
(3, 'Japan', 3, 144208),
(4, 'Australia', 4, 144208),
(5, 'India', 5, 144234),
(6, 'France', 6, 144234);

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `hotel_code` varchar(11) NOT NULL,
  `hotel_name` varchar(50) NOT NULL,
  `city_code` int(11) NOT NULL,
  `country_code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`id`, `hotel_code`, `hotel_name`, `city_code`, `country_code`) VALUES
(12, 'EL1', 'Grand Plaza Hotel	', 1, 3),
(13, 'EL2', 'Royal Garden Hotel	', 3, 4),
(14, 'EL3', 'Sakura Inn	', 2, 2),
(15, 'EL4', 'Harbourview Hotel	', 6, 5),
(16, 'EL5', 'Eiffel Tower Suites	', 5, 3),
(23, 'EL6', 'Star Palace', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` int(11) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'lavesh', '$2b$10$cXkeI4VAbEEgWjFBmNASrOifzw1r00GD.TjKW62yDNJ.oTFHtdp0.', 2147483647),
(2, 'test', '$2b$10$N9QBC0AbElFWtp873BjmKeGBzaHQK17dkWdkz/NOF21sPnuKkjSXW', 2147483647),
(3, 'lave', '$2b$10$K6c5NqZ5mog79u/XnsWKZeJxMMR63gEP7NQ5TjLB594oq4e8Kl/yq', 2147483647),
(4, 'testing', '$2b$10$GnZC9z46uQetMkm2HYicBeLov46T2ZDED4qCwqwMvHIsxIrB5dBX.', 2147483647);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `city_code` (`city_code`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `country_code` (`country_code`);

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `hotel_code` (`hotel_code`),
  ADD KEY `country_code` (`country_code`),
  ADD KEY `city_code` (`city_code`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hotels`
--
ALTER TABLE `hotels`
  ADD CONSTRAINT `hotels_ibfk_1` FOREIGN KEY (`city_code`) REFERENCES `cities` (`city_code`),
  ADD CONSTRAINT `hotels_ibfk_2` FOREIGN KEY (`country_code`) REFERENCES `countries` (`country_code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


