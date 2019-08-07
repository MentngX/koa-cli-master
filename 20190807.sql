-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: his
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `appointment` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '挂号编号',
  `p_id` varchar(19) DEFAULT NULL COMMENT '病人身份证号',
  `d_id` int(10) DEFAULT NULL COMMENT '医生id',
  `p_name` varchar(10) DEFAULT NULL COMMENT '患者姓名',
  `d_name` varchar(10) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL COMMENT '时间',
  `line` int(10) DEFAULT NULL COMMENT '排队序号',
  `department` varchar(255) DEFAULT NULL COMMENT '科室',
  `expenses` decimal(10,2) DEFAULT NULL COMMENT '挂号诊疗费',
  PRIMARY KEY (`id`),
  KEY `挂号医生id_idx` (`d_id`) /*!80000 INVISIBLE */,
  KEY `挂号病人id_idx` (`p_id`),
  CONSTRAINT `挂号医生id` FOREIGN KEY (`d_id`) REFERENCES `doctor` (`id`),
  CONSTRAINT `挂号病人id` FOREIGN KEY (`p_id`) REFERENCES `patient` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='挂号单';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES (1,NULL,12,NULL,NULL,NULL,NULL,NULL,NULL),(2,NULL,NULL,'王网','黄中',NULL,NULL,'外科',NULL),(3,'440882199508132346',12,'王网','黄中',NULL,NULL,'外科',NULL),(4,'440882199508132346',12,'王网','黄中',NULL,2,'外科',NULL),(5,'440882199508132346',12,'王网','黄中',NULL,3,'外科',NULL),(6,'440882199508132346',12,'王网','黄中',NULL,4,'外科',NULL),(7,'440882199508132346',12,'王网','黄中',NULL,5,'外科',NULL),(8,'440882199508132346',12,'王网','黄中',NULL,6,'外科',10.00),(9,'440882199508132346',12,'王网','黄中',NULL,7,'外科',10.00),(10,'440882199508132346',12,'王网','黄中',NULL,8,'外科',10.00),(11,'440882199508132345',NULL,'张大田',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `casehistory`
--

DROP TABLE IF EXISTS `casehistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `casehistory` (
  `c_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '病历号',
  `u_id` int(10) DEFAULT NULL COMMENT '病人编号',
  `u_name` varchar(10) DEFAULT NULL COMMENT '病人姓名',
  `u_age` int(5) DEFAULT NULL COMMENT '病人年龄',
  `u_sex` varchar(2) DEFAULT NULL COMMENT '病人性别',
  `d_id` int(10) DEFAULT NULL COMMENT '医生id',
  `d_name` varchar(10) DEFAULT NULL COMMENT '医生姓名',
  `text` varchar(255) DEFAULT NULL COMMENT '病历内容',
  `time` time DEFAULT NULL COMMENT '就诊时间',
  `casehistorycol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='病历';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casehistory`
--

LOCK TABLES `casehistory` WRITE;
/*!40000 ALTER TABLE `casehistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `casehistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checkup`
--

DROP TABLE IF EXISTS `checkup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `checkup` (
  `id` int(11) NOT NULL COMMENT '通知编号',
  `name` varchar(45) DEFAULT NULL COMMENT '检查项目',
  `department` varchar(45) DEFAULT NULL COMMENT '检查科室',
  `price` decimal(10,2) DEFAULT NULL COMMENT '检查费用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='检查身体单';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkup`
--

LOCK TABLES `checkup` WRITE;
/*!40000 ALTER TABLE `checkup` DISABLE KEYS */;
/*!40000 ALTER TABLE `checkup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `doctor` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(10) DEFAULT NULL COMMENT '医生姓名',
  `sex` varchar(45) DEFAULT NULL COMMENT '医生性别',
  `date` date DEFAULT NULL COMMENT '入职日期',
  `education` varchar(45) DEFAULT NULL COMMENT '学历',
  `major` varchar(45) DEFAULT NULL COMMENT '专业',
  `position` varchar(45) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL COMMENT '科室',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COMMENT='医生';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (2,'孙苗苗','女',NULL,NULL,NULL,NULL,NULL),(3,'张大大','女',NULL,NULL,NULL,NULL,NULL),(4,'杨米','女',NULL,NULL,NULL,NULL,NULL),(5,'杨阳','男',NULL,NULL,NULL,NULL,NULL),(6,'王二博','男',NULL,NULL,NULL,NULL,NULL),(7,'王大雅','女',NULL,NULL,NULL,NULL,NULL),(8,'王天霸','男',NULL,NULL,NULL,NULL,NULL),(9,'王岩','男',NULL,NULL,NULL,NULL,NULL),(10,'肖沾','男',NULL,NULL,NULL,NULL,NULL),(11,'陈肖','男',NULL,NULL,NULL,NULL,NULL),(12,'黄中','男',NULL,NULL,NULL,'主治医师','外科'),(13,'黄豆','女',NULL,NULL,NULL,NULL,NULL),(17,'黄一',NULL,NULL,NULL,NULL,NULL,NULL),(18,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,'王大傻','man',NULL,NULL,'口腔科','主治医师','口腔科'),(21,'王大傻','男',NULL,NULL,'口腔科','主治医师','口腔科'),(22,'王二傻','男','2018-09-01','undergraduate','口腔科','主治医师','口腔科'),(23,'王二傻','男',NULL,'undergraduate','口腔科','主治医师','口腔科'),(24,'王二傻','男',NULL,'undergraduate','口腔科','主治医师','口腔科'),(25,'王三傻','男',NULL,'junior','口腔科','主治医师','口腔科'),(26,'王大傻','女',NULL,'undergraduate','123','123','132'),(27,'王二傻','女',NULL,'undergraduate','11','11','111'),(30,'王大鸭','女',NULL,'undergraduate','111','111','111'),(31,'王大鸭','女',NULL,'undergraduate','111','111','111'),(32,'旺达啊啊','女',NULL,'undergraduate','11','11','11'),(33,'王二帅','男',NULL,'postgraduate','22','22','22'),(34,'王二帅','男',NULL,'postgraduate','22','22','22'),(35,'12344','女',NULL,'undergraduate','11','11','11'),(36,'11111','女',NULL,'undergraduate','11','11','11'),(37,'11111','女',NULL,'undergraduate','11','11','11'),(38,'1111','女','2019-08-05','undergraduate','11','111','111');
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drug`
--

DROP TABLE IF EXISTS `drug`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `drug` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '药品编号',
  `name` varchar(45) DEFAULT NULL COMMENT '药品名称\n',
  `inventory` int(5) DEFAULT NULL COMMENT '库存',
  `singleprice` decimal(10,2) DEFAULT NULL COMMENT '单价',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='药品';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drug`
--

LOCK TABLES `drug` WRITE;
/*!40000 ALTER TABLE `drug` DISABLE KEYS */;
/*!40000 ALTER TABLE `drug` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospitalization`
--

DROP TABLE IF EXISTS `hospitalization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hospitalization` (
  `id` int(11) NOT NULL COMMENT '住院通知单号',
  `u_name` varchar(10) DEFAULT NULL COMMENT '病人姓名',
  `hospitalizationcol` varchar(45) DEFAULT NULL,
  `illness` varchar(45) DEFAULT NULL COMMENT '病情',
  `floor` varchar(45) DEFAULT NULL COMMENT '楼层',
  `door` varchar(45) DEFAULT NULL COMMENT '房间号',
  `bed` varchar(45) DEFAULT NULL COMMENT '床号',
  `price` decimal(10,2) DEFAULT NULL COMMENT '预交费用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='住院通知';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospitalization`
--

LOCK TABLES `hospitalization` WRITE;
/*!40000 ALTER TABLE `hospitalization` DISABLE KEYS */;
/*!40000 ALTER TABLE `hospitalization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `illness`
--

DROP TABLE IF EXISTS `illness`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `illness` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(45) DEFAULT NULL COMMENT '名字\n',
  `text` varchar(255) DEFAULT NULL COMMENT '详细介绍',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='病种';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `illness`
--

LOCK TABLES `illness` WRITE;
/*!40000 ALTER TABLE `illness` DISABLE KEYS */;
/*!40000 ALTER TABLE `illness` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `patient` (
  `id` varchar(18) NOT NULL COMMENT '主键,身份证号',
  `date` date DEFAULT NULL COMMENT '建档日期',
  `name` varchar(10) DEFAULT NULL COMMENT '病人姓名',
  `age` varchar(10) DEFAULT NULL COMMENT '患者年龄',
  `phone` varchar(11) DEFAULT NULL COMMENT '联系方式',
  `sex` varchar(255) DEFAULT NULL COMMENT '性别',
  `address` varchar(255) DEFAULT NULL COMMENT '家庭地址',
  `l_name` varchar(45) DEFAULT NULL COMMENT '联系人姓名',
  `l_phone` varchar(45) DEFAULT NULL COMMENT '联系人号码',
  `disease` varchar(45) DEFAULT NULL COMMENT '病症',
  `history` varchar(45) DEFAULT NULL COMMENT '病史',
  `department` varchar(45) DEFAULT NULL COMMENT '科室',
  `doctor` varchar(45) DEFAULT NULL COMMENT '主治医生名字',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='病人';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES ('440882199508132345',NULL,'张大田',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('440882199508132346',NULL,'王网',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'李翔');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pay`
--

DROP TABLE IF EXISTS `pay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pay` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '收费单号',
  `type` varchar(45) DEFAULT NULL COMMENT '收费项目类型\\n',
  `date` date DEFAULT NULL COMMENT '日期',
  `price` decimal(10,2) DEFAULT NULL COMMENT '金额',
  `form` varchar(45) DEFAULT NULL COMMENT '收费方式',
  `appointId` int(11) DEFAULT NULL COMMENT '挂号id',
  `p_id` varchar(18) DEFAULT NULL COMMENT '病人id',
  `number` int(11) DEFAULT NULL COMMENT '相应序号',
  PRIMARY KEY (`id`),
  KEY `病人id_idx` (`p_id`),
  CONSTRAINT `病人id` FOREIGN KEY (`p_id`) REFERENCES `patient` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='收费单';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pay`
--

LOCK TABLES `pay` WRITE;
/*!40000 ALTER TABLE `pay` DISABLE KEYS */;
/*!40000 ALTER TABLE `pay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescription`
--

DROP TABLE IF EXISTS `prescription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `prescription` (
  `p_id` int(11) NOT NULL COMMENT '处方号',
  `u_id` int(10) DEFAULT NULL COMMENT '主键',
  `u_name` varchar(10) DEFAULT NULL COMMENT '病人姓名',
  `u_sex` int(5) DEFAULT NULL COMMENT '病人年龄',
  `text` varchar(255) DEFAULT NULL COMMENT '处方内容',
  `time` time DEFAULT NULL COMMENT '处方时间',
  `d_name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='处方';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription`
--

LOCK TABLES `prescription` WRITE;
/*!40000 ALTER TABLE `prescription` DISABLE KEYS */;
/*!40000 ALTER TABLE `prescription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shift`
--

DROP TABLE IF EXISTS `shift`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `shift` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `d_id` int(10) DEFAULT NULL,
  `date` date NOT NULL COMMENT '轮班日期',
  `time` varchar(45) DEFAULT NULL COMMENT '轮班时段',
  `name` varchar(45) DEFAULT NULL,
  `sex` varchar(45) DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL COMMENT '科室',
  `phone` varchar(45) DEFAULT NULL,
  `text` varchar(45) DEFAULT NULL COMMENT '出勤情况',
  `sign` varchar(45) DEFAULT NULL COMMENT '主任签名',
  `doctorId` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `医生id_idx` (`d_id`),
  CONSTRAINT `医生id` FOREIGN KEY (`d_id`) REFERENCES `doctor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COMMENT='轮班信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shift`
--

LOCK TABLES `shift` WRITE;
/*!40000 ALTER TABLE `shift` DISABLE KEYS */;
INSERT INTO `shift` VALUES (1,12,'2019-06-22','大夜：00：00~8：00','黄中','男','13437884546','外科','迟到','黄上',NULL),(2,6,'2019-06-20','早班：6:00~17:00','王二博','男','13437884564','骨科','工作时间','黄下',NULL),(3,10,'2019-03-11','日班：10：00~21：00','肖沾','男','13437884566','精神科','早退','黄敏',NULL),(4,2,'2018-04-02','小夜：16：00~00：00','孙苗苗','女','13437884524','急诊','病假','杨图',NULL),(5,7,'2019-08-01','小夜：16：00~00：00','王大雅','女','13412384561','妇科','工作时间','黄敏',NULL),(6,8,'2019-01-01','日班：10：00~21：00','王天霸','男','13432284566','口腔科','加班','杨图',NULL),(7,3,'2019-02-03','日班：10：00~21：00','张大大','女','13431335241','护士室','工作时间','黄敏',NULL),(8,4,'2019-03-02','日班：10：00~21：00','杨米','女','13437843643','胸心外科','工作时间','黄敏',NULL),(9,5,'2018-11-09','早班：6:00~17:00','杨阳','男','13432143256','急诊','工作时间','黄敏',NULL),(11,11,'2018-04-06','早班：6:00~17:00','陈肖','男','13442354536','精神科','工作时间','黄敏',NULL),(12,9,'2018-06-30','早班：6:00~17:00','王岩','男','13467884566','外科','工作时间','黄敏',NULL),(13,13,'2019-07-07','早班：6:00~17:00','黄豆','女','13778332566','妇科','工作时间','杨图',NULL),(14,13,'2019-07-06','早班：6:00~17:00','黄豆','女','13778332566','妇科','工作时间','杨图',NULL);
/*!40000 ALTER TABLE `shift` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storage`
--

DROP TABLE IF EXISTS `storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `storage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL COMMENT '药品名称',
  `manufacturers` varchar(45) DEFAULT NULL COMMENT '厂家',
  `amount` int(11) DEFAULT NULL COMMENT '数目',
  `handlers` varchar(45) DEFAULT NULL COMMENT '经手人',
  `temperature` varchar(45) DEFAULT NULL COMMENT '储存温度',
  `qualityOfficer` varchar(45) DEFAULT NULL COMMENT '质管员',
  `warehouseman` varchar(45) DEFAULT NULL COMMENT '仓库员',
  `pattern` varchar(45) DEFAULT NULL COMMENT '模式',
  `species` varchar(45) DEFAULT NULL COMMENT '种类',
  `productionDate` date DEFAULT NULL COMMENT '生产日期',
  `dosageForm` varchar(45) DEFAULT NULL COMMENT '片剂',
  `unitPrice` decimal(10,2) DEFAULT NULL,
  `inDate` date DEFAULT NULL COMMENT '进药时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='药库';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storage`
--

LOCK TABLES `storage` WRITE;
/*!40000 ALTER TABLE `storage` DISABLE KEYS */;
INSERT INTO `storage` VALUES (1,' 头孢克肟片',' 白云山制药总厂',200,' 黄处',' 01',' 林安徽',' 梁尚',' 01',' 处方','2017-06-28',' 片剂',41.00,'2017-07-28');
/*!40000 ALTER TABLE `storage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL COMMENT '用户名/账号',
  `password` varchar(45) DEFAULT NULL COMMENT '密码',
  `role` varchar(45) DEFAULT NULL COMMENT '权限',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='用户';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'xiaowenti','123','患者'),(2,'zhangsan','123','02'),(3,'lisi','123','01'),(4,NULL,'123','医生'),(5,'Jack','123','医生');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'his'
--

--
-- Dumping routines for database 'his'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-07 21:57:02
