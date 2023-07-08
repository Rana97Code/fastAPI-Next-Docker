-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2023 at 06:31 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fastapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `customer_phone` varchar(20) NOT NULL,
  `customer_address` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `customer_name`, `customer_email`, `customer_phone`, `customer_address`, `created_at`) VALUES
(1, 'Elon Mask', 'elon@email.com', '77827339', 'Los Angelious', NULL),
(3, 'space x', 'space@twitter.com', '77827339', 'Los Angelious', NULL),
(4, 'Xens ad', 'xens@email.com', '857554736543', 'Japan', NULL),
(5, 'Bill Gates', 'billgates@email.com', '8576364563', 'America', NULL),
(11, 'GP', 'gp@email.com', '0170000000', 'Bosundhara', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `mail_contents`
--

CREATE TABLE `mail_contents` (
  `id` int(11) NOT NULL,
  `mail_type` varchar(100) NOT NULL,
  `mail_content` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mail_contents`
--

INSERT INTO `mail_contents` (`id`, `mail_type`, `mail_content`, `created_at`) VALUES
(16, 'sms', 'This sms content can go', '2023-06-13 05:38:22'),
(17, 'email', 'This is the email content', '2023-06-13 05:39:06');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `unit_id` int(11) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_sku` varchar(255) DEFAULT NULL,
  `product_qty` int(11) DEFAULT NULL,
  `product_details` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `unit_id`, `product_name`, `product_sku`, `product_qty`, `product_details`) VALUES
(1, 4, 'hosting', '778273ft39', 100, 'it\'s for webservice'),
(2, 2, 'Domain', '5fggtwq34', 10, 'For WebSite'),
(3, 9, 'AP Router', 'g423r5wew3', 10, 'Smart Router');

-- --------------------------------------------------------

--
-- Table structure for table `provided_service`
--

CREATE TABLE `provided_service` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `p_qty` int(11) NOT NULL,
  `purchase_date` datetime DEFAULT NULL,
  `expiry_date` varchar(255) DEFAULT NULL,
  `renew_date` varchar(255) DEFAULT NULL,
  `service_time` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `provided_service`
--

INSERT INTO `provided_service` (`id`, `product_id`, `customer_id`, `p_qty`, `purchase_date`, `expiry_date`, `renew_date`, `service_time`, `created_at`, `updated_at`) VALUES
(30, 3, 3, 6, '2023-07-05 00:00:00', '2025-07-05 00:00:00', '2025-05-05', '02', '2023-07-05 10:59:45', NULL),
(31, 3, 1, 10, '2023-07-05 00:00:00', '2028-07-05 00:00:00', '2027-10-05', '05', '2023-07-05 11:01:07', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `service_time`
--

CREATE TABLE `service_time` (
  `id` int(11) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `month` int(11) DEFAULT NULL,
  `service_details` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `service_time`
--

INSERT INTO `service_time` (`id`, `year`, `month`, `service_details`) VALUES
(1, 10, 4, '10 Year based'),
(2, 5, 3, '5 Year based'),
(7, 8, 6, 'Long time service');

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` int(11) NOT NULL,
  `unit_name` varchar(100) NOT NULL,
  `unit_details` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `unit_name`, `unit_details`, `created_at`) VALUES
(1, 'Yard', 'For Sale Yard', '2023-05-13 08:07:34'),
(2, 'GB', 'Hosting Sales', '2023-05-13 06:16:31'),
(4, 'MB', 'Hosting Sales', '2023-05-13 06:37:01'),
(9, 'PCS', 'Product Pieces', '2023-05-27 11:53:55');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_phone` varchar(11) DEFAULT NULL,
  `user_type` varchar(100) DEFAULT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `confirm_password` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `user_phone`, `user_type`, `user_email`, `user_password`, `confirm_password`, `created_at`) VALUES
(2, 'arnab', '01681081476', NULL, 'arnab@bmitsolutionsltd.com', '$2b$12$m4A5GeQ..PNrNNNEl1./1uho8UvMRcHxcK3uyj4aoYXwH7zvn7V9C', '$2b$12$m4A5GeQ..PNrNNNEl1./1uho8UvMRcHxcK3uyj4aoYXwH7zvn7V9C', NULL),
(6, 'peuli', '53436526432', NULL, 'peuli@gmail.com', '$2b$12$1vaBuxMf4QCsu85QmJe7VejrwYV4aNWEyfcENC7hoD8C.Mjl3Y9N6', '$2b$12$1vaBuxMf4QCsu85QmJe7VejrwYV4aNWEyfcENC7hoD8C.Mjl3Y9N6', NULL),
(10, 'rana@', '6254514334', NULL, 'rana@email.com', '$2b$12$o/vB6TwCN4UNBT2lWaY0i.3MrqS8q.u7BgZuJazY5z1IP2KFUOaEi', '$2b$12$o/vB6TwCN4UNBT2lWaY0i.3MrqS8q.u7BgZuJazY5z1IP2KFUOaEi', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mail_contents`
--
ALTER TABLE `mail_contents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ix_products_product_sku` (`product_sku`),
  ADD KEY `ix_products_unit_id` (`unit_id`),
  ADD KEY `ix_products_id` (`id`),
  ADD KEY `ix_products_product_qty` (`product_qty`),
  ADD KEY `ix_products_product_details` (`product_details`),
  ADD KEY `ix_products_product_name` (`product_name`);

--
-- Indexes for table `provided_service`
--
ALTER TABLE `provided_service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_time`
--
ALTER TABLE `service_time`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ix_Service_time_service_details` (`service_details`),
  ADD UNIQUE KEY `ix_Service_time_year` (`year`),
  ADD KEY `ix_Service_time_id` (`id`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `mail_contents`
--
ALTER TABLE `mail_contents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `provided_service`
--
ALTER TABLE `provided_service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `service_time`
--
ALTER TABLE `service_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
