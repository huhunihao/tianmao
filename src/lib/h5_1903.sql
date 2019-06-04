-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-04 08:29:29
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `h5_1903`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(30) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `num` int(30) NOT NULL COMMENT '商品库存',
  `pic` varchar(255) NOT NULL COMMENT '商品图片',
  `details` varchar(255) NOT NULL COMMENT '商品详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `pic`, `details`) VALUES
(1, '【天猫超市】Apple/苹果 iPhone X 全网通手机iphone10 无线充电', 6078, 4398, '[{"title":"small","src":"../img/phone1.jpg"}]', '<h1>\r\n证书编号：2017011606002271证书状态：有效产品名称：TD-LTE 数字移动电话机3C规格型号：A1865(电源适配器可选：A1443 输出：5.0VDC 1A)产品名称：Apple/苹果 iPhone XApple型号: iPhone X机身颜色: 银色 深空灰色存储容量: 256GB\r\n</h1>'),
(2, '奥利奥故宫食品启饼皇上朕的心意礼盒山楂夹心饼干休闲网红零食', 199, 7500, '[{"title":"small","src":"../img/phone2.jpg"}]', '<h1>\r\n生产许可证编号：SC10811310111839厂名：亿滋食品(北京)有限公司厂址：北京市北京经济技术开发区东区经海三路148号厂家联系方式：4008185536保质期：360 天品牌: 奥利奥系列: 夹心饼干465g产地: 中国大陆省份: 江苏省是否为有机食品: 否包装方式: 包装是否进口: 国产净含量: 465g\r\n</h1>'),
(3, '费列罗金球榛果威化巧克力24粒婚庆表白婚庆喜糖商务表白情侣礼物', 199, 13575, '[{"title":"small","src":"../img/phone3.jpg"}]', '<h1>\r\n包装种类: 礼盒装产地: 中国大陆省份: 上海包装方式: 包装是否含有代可可脂: 否食品口味: 原味（不带封套）\r\n</h1>'),
(4, '【天猫超市】小米手环3 NFC智能蓝牙计步器天气心率睡眠监测手表', 231, 21465, '[{"title":"small","src":"../img/phone4.jpg"}]', '<h1>\r\n包装严实，没有压到\r\n</h1>'),
(5, 'ILIFE智意X785扫地机器人智能家用全自动吸尘器擦地拖地一体机', 5999, 6497, '[{"title":"small","src":"../img/phone5.jpg"}]', '<h1>\r\n尘盒容量: 0.6L噪音: 0-65dB最高高度: 7.6cm保修期: 12个月续航时间: 2小时清扫模式: 吸口+滚刷式\r\n</h1>'),
(6, '长虹熨烫机挂烫机家用蒸汽熨斗手持熨衣服神器挂式电熨斗烫衣小型', 188, 3135, '[{"title":"small","src":"../img/phone6.jpg"}]', '<h1>\r\n水箱容量: 1.9L(含)-2.2L(含)智能类型: 不支持智能保修期: 36个月挂烫机类型: 立式挂烫机\r\n</h1>');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `user_name` varchar(20) NOT NULL COMMENT '用户名',
  `user_email` varchar(30) NOT NULL COMMENT '用户邮箱',
  `user_pwd` varchar(30) NOT NULL COMMENT '用户密码',
  `user_sex` tinyint(2) DEFAULT NULL COMMENT '用户性别'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_pwd`, `user_sex`) VALUES
(100000001, 'chenyi', '46546454@qq.com', '123456', 1),
(100000002, 'yuer', 'yuer@163.com', '112233', 1),
(100000003, 'zhangsan', 'zhangsan@163.com', '123456789', 1),
(100000004, 'lisi', 'lisi@163.com', '163163', 1),
(100000011, '你好', '511637940@qq.com', '123456', 1),
(100000007, 'wangwang', '46546454@qq.com', '123456', 1),
(100000012, 'abcd', '511637940@qq.com', '123456', NULL),
(100000013, '111', '511637940@qq.com', '123456', NULL),
(100000014, '123', '511637940@qq.com', '123456', NULL),
(100000015, 'lian', '511637940@qq.com', '123456', NULL),
(100000016, 'bbbb', '511637940@qq.com', '123456', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=7;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID', AUTO_INCREMENT=100000017;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
