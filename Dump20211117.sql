-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: finaldbiii
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `growth`
--

DROP TABLE IF EXISTS `growth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `growth` (
  `date` date NOT NULL,
  `growth_percentage` float NOT NULL DEFAULT '0',
  `user_id` varchar(45) NOT NULL,
  PRIMARY KEY (`date`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `growth`
--

LOCK TABLES `growth` WRITE;
/*!40000 ALTER TABLE `growth` DISABLE KEYS */;
INSERT INTO `growth` VALUES ('2021-10-25',-25,'q'),('2021-10-26',-60,'q'),('2021-10-27',12.5,'q'),('2021-10-28',33.3333,'q'),('2021-10-29',-17.6471,'q'),('2021-10-30',-26.8657,'q'),('2021-10-31',-0.5,'q'),('2021-11-01',-100,'q'),('2021-11-02',69.2308,'q'),('2021-11-03',-45.7399,'q'),('2021-11-04',-23.8889,'q'),('2021-11-05',47.0588,'q'),('2021-11-16',-220,'q'),('2021-11-17',29.078,'q');
/*!40000 ALTER TABLE `growth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice` (
  `user` varchar(45) DEFAULT NULL,
  `invoice_id` int NOT NULL,
  `client` varchar(500) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `payment_mode` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES ('q',0,'hima','2021-10-18',8920,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,0,NULL,NULL,NULL,NULL,NULL,NULL),('q',0,'adi','2021-10-23',150,NULL,NULL,NULL),('q',0,'adi','2021-10-23',150,NULL,NULL,NULL),('q',0,'adi','2021-10-23',150,NULL,NULL,NULL),('q',0,'adi','2021-11-05',2460,NULL,NULL,NULL);
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `user` varchar(45) NOT NULL,
  `product_id` int NOT NULL,
  `product_name` varchar(45) DEFAULT NULL,
  `product_price` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `total_sale` int DEFAULT NULL,
  `profit_per_item` int DEFAULT NULL,
  PRIMARY KEY (`user`,`product_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user_login` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('q',1,'Pulses',300,40,60,100),('q',2,'Rice',1000,70,30,200),('q',3,'Sugar',250,50,50,50),('q',4,'Wheat',500,75,25,200),('q',5,'Millets',200,70,30,100),('q',6,'Ramen',200,-5,NULL,NULL),('q',7,'Lays',10,75,NULL,1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profit`
--

DROP TABLE IF EXISTS `profit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profit` (
  `date` date NOT NULL,
  `prof` int DEFAULT NULL,
  `user_id` varchar(45) NOT NULL,
  PRIMARY KEY (`date`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profit`
--

LOCK TABLES `profit` WRITE;
/*!40000 ALTER TABLE `profit` DISABLE KEYS */;
INSERT INTO `profit` VALUES ('2021-10-24',7000,'q'),('2021-10-25',5600,'q'),('2021-10-26',3500,'q'),('2021-10-27',4000,'q'),('2021-10-28',6000,'q'),('2021-10-29',5100,'q'),('2021-10-30',4020,'q'),('2021-10-31',4000,'q'),('2021-11-01',2000,'q'),('2021-11-02',6500,'q'),('2021-11-03',4460,'q'),('2021-11-04',3600,'q'),('2021-11-05',6800,'q'),('2021-11-07',5430,'q'),('2021-11-10',2060,'q'),('2021-11-15',8000,'q'),('2021-11-16',2500,'q'),('2021-11-17',3525,'q');
/*!40000 ALTER TABLE `profit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale2`
--

DROP TABLE IF EXISTS `sale2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sale2` (
  `date` date NOT NULL,
  `user` varchar(45) NOT NULL,
  `sale_id` varchar(45) DEFAULT NULL,
  `product_id` int NOT NULL,
  `product_name` varchar(45) DEFAULT NULL,
  `sale_count` int DEFAULT NULL,
  `profit` int DEFAULT NULL,
  `cost` int DEFAULT NULL,
  PRIMARY KEY (`date`,`user`,`product_id`),
  KEY `user` (`user`),
  CONSTRAINT `sale2_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user_login` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale2`
--

LOCK TABLES `sale2` WRITE;
/*!40000 ALTER TABLE `sale2` DISABLE KEYS */;
INSERT INTO `sale2` VALUES ('2021-11-05','q',NULL,1,'Pulses',10,1000,3000),('2021-11-05','q',NULL,2,'Rice',1,200,200),('2021-11-05','q',NULL,3,'Sugar',15,750,3750),('2021-11-07','q',NULL,1,'Pulses',5,500,1500),('2021-11-07','q',NULL,2,'Rice',6,1200,1200),('2021-11-07','q',NULL,3,'Sugar',15,750,3750),('2021-11-10','q',NULL,3,'Sugar',10,500,2500),('2021-11-12','q',NULL,1,'Pulses',15,1500,3000),('2021-11-12','q',NULL,2,'Rice',10,2000,10000),('2021-11-12','q',NULL,4,'Wheat',10,2000,5000),('2021-11-12','q',NULL,5,'Millets',25,2500,5000),('2021-11-16','q',NULL,1,'Pulses',25,2500,1500),('2021-11-16','q',NULL,6,'Ramen',10,NULL,2000),('2021-11-17','q',NULL,1,'Pulses',5,500,1500),('2021-11-17','q',NULL,2,'Rice',5,1000,5000),('2021-11-17','q',NULL,3,'Sugar',10,500,1250),('2021-11-17','q',NULL,4,'Wheat',5,1000,2500),('2021-11-17','q',NULL,5,'Millets',5,500,1000),('2021-11-17','q',NULL,6,'Ramen',5,NULL,1000),('2021-11-17','q',NULL,7,'Lays',25,25,100);
/*!40000 ALTER TABLE `sale2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempinvoice`
--

DROP TABLE IF EXISTS `tempinvoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempinvoice` (
  `user` varchar(45) NOT NULL,
  `date` date NOT NULL,
  `product_id` int NOT NULL,
  `product_name` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `client` varchar(45) NOT NULL,
  PRIMARY KEY (`date`,`user`,`product_id`,`client`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempinvoice`
--

LOCK TABLES `tempinvoice` WRITE;
/*!40000 ALTER TABLE `tempinvoice` DISABLE KEYS */;
INSERT INTO `tempinvoice` VALUES ('q','2021-10-18',1,'cars',2000,5,10000,'adi'),('q','2021-10-18',1,'cars',2000,4,8000,'hima'),('q','2021-10-18',2,'bedsheet',200,5,1000,'adi'),('q','2021-10-18',2,'bedsheet',200,4,800,'hima'),('q','2021-10-18',3,'pepsi',30,5,150,'adi'),('q','2021-10-18',3,'pepsi',30,4,120,'hima'),('q','2021-10-23',3,'pepsi',30,5,150,'adi'),('q','2021-11-05',1,'cars',2000,1,2000,'adi'),('q','2021-11-05',2,'bedsheet',200,2,400,'adi'),('q','2021-11-05',3,'pepsi',30,2,60,'adi');
/*!40000 ALTER TABLE `tempinvoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_login`
--

DROP TABLE IF EXISTS `user_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_login` (
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `namez` varchar(60) DEFAULT NULL,
  `shopnamez` varchar(60) DEFAULT NULL,
  `shopaddress` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_login`
--

LOCK TABLES `user_login` WRITE;
/*!40000 ALTER TABLE `user_login` DISABLE KEYS */;
INSERT INTO `user_login` VALUES ('__.bharghav.__','12345678','Aditya','BIZ','Hyderabad'),('#8Y0PCYUJ9','12345678','Aditya','BIZ','Hyderabad'),('adi','12345678','Aditya','Xpress Stores','Hyderabad'),('angryclawz','bharghav',NULL,NULL,NULL),('bharghav','bharghava','Bharghav','PUB','Delhi'),('hima','12345678','Himanshu ','BIZ','Delhi'),('q','q',NULL,NULL,NULL),('qq','qq',NULL,NULL,NULL),('qqq','qqq',NULL,NULL,NULL),('qqqq','12345678','Bharghav Narasimha','BIZ','Hyderabad'),('v','12345678','Aditya','BIZ','Hyderabad');
/*!40000 ALTER TABLE `user_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `week_day_data`
--

DROP TABLE IF EXISTS `week_day_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `week_day_data` (
  `user` varchar(45) DEFAULT NULL,
  `DATES` date NOT NULL,
  `MONDAY` int DEFAULT NULL,
  `TUESDAY` int DEFAULT NULL,
  `WEDNESDAY` int DEFAULT NULL,
  `THURSDAY` int DEFAULT NULL,
  `FRIDAY` int DEFAULT NULL,
  `SATURDAY` int DEFAULT NULL,
  `SUNDAY` int DEFAULT NULL,
  PRIMARY KEY (`DATES`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `week_day_data`
--

LOCK TABLES `week_day_data` WRITE;
/*!40000 ALTER TABLE `week_day_data` DISABLE KEYS */;
INSERT INTO `week_day_data` VALUES ('q','2021-09-04',NULL,NULL,NULL,NULL,NULL,6,NULL),('q','2021-09-05',NULL,NULL,NULL,NULL,NULL,NULL,4),('q','2021-09-06',10,NULL,NULL,NULL,NULL,NULL,NULL),('q','2021-09-07',NULL,9,NULL,NULL,NULL,NULL,NULL),('q','2021-09-08',NULL,NULL,8,NULL,NULL,NULL,NULL),('q','2021-09-09',NULL,NULL,NULL,6,NULL,NULL,NULL),('q','2021-09-10',NULL,NULL,NULL,NULL,10,NULL,NULL),('q','2021-09-11',NULL,NULL,NULL,NULL,NULL,8,NULL),('q','2021-09-23',NULL,NULL,NULL,34,NULL,NULL,NULL),('q','2021-09-24',NULL,NULL,NULL,NULL,2,NULL,NULL),('q','2021-09-27',4,NULL,NULL,NULL,NULL,NULL,NULL),('q','2021-10-17',NULL,NULL,NULL,NULL,NULL,NULL,86),('q','2021-10-18',NULL,NULL,NULL,NULL,NULL,NULL,19),('q','2021-10-25',5,NULL,NULL,NULL,NULL,NULL,NULL),('q','2021-11-03',NULL,NULL,6,NULL,NULL,NULL,NULL),('q','2021-11-04',NULL,NULL,NULL,21,NULL,NULL,NULL),('q','2021-11-05',NULL,NULL,NULL,NULL,42,NULL,NULL),('q','2021-11-07',NULL,NULL,NULL,NULL,NULL,NULL,18),('q','2021-11-10',NULL,NULL,12,NULL,NULL,NULL,NULL),('q','2021-11-12',NULL,NULL,NULL,NULL,15,NULL,NULL),('q','2021-11-16',NULL,35,NULL,NULL,NULL,NULL,NULL),('q','2021-11-17',NULL,NULL,60,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `week_day_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-17 17:49:58
