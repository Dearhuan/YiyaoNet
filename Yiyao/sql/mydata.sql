/*
Navicat MySQL Data Transfer

Source Server         : 13
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : yiyao

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-09-30 12:07:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bigmirror
-- ----------------------------
DROP TABLE IF EXISTS `bigmirror`;
CREATE TABLE `bigmirror` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gid` int(11) DEFAULT NULL,
  `simg` varchar(255) DEFAULT NULL,
  `bimg` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bigmirror
-- ----------------------------
INSERT INTO `bigmirror` VALUES ('1', '972419', 'https://p3.maiyaole.com/img/item/201908/27/380_20190827115347121.jpg', 'https://p4.maiyaole.com/img/item/201908/27/org_20190827115347121.jpg');
INSERT INTO `bigmirror` VALUES ('2', '972419', 'https://p2.maiyaole.com/img/972/972419/330_330.jpg?a=345037559', 'https://p1.maiyaole.com/img/972/972419/org_org.jpg?v=1');
INSERT INTO `bigmirror` VALUES ('3', '972419', 'https://p1.maiyaole.com/img/201403/18/330_20140318165607558.jpg', 'https://p1.maiyaole.com/img/201403/18/org_20140318165607558.jpg?v=1');
INSERT INTO `bigmirror` VALUES ('4', '972419', 'https://p1.maiyaole.com/img/201502/03/330_20150203235013717.jpg', 'https://p1.maiyaole.com/img/201502/03/org_20150203235013717.jpg?v=1');
INSERT INTO `bigmirror` VALUES ('5', '972419', 'https://p1.maiyaole.com/img/item/201808/10/380_20180810095613128.jpg', 'https://p3.maiyaole.com/img/item/201808/10/org_20180810095613128.jpg');
INSERT INTO `bigmirror` VALUES ('6', '972419', 'https://p3.maiyaole.com/img/item/201809/04/380_20180904110533825.jpg', 'https://p4.maiyaole.com/img/item/201809/04/org_20180904110533825.jpg');
INSERT INTO `bigmirror` VALUES ('7', '972419', 'https://p2.maiyaole.com/img/item/201809/04/380_20180904142327206.jpg', 'https://p1.maiyaole.com/img/item/201809/04/org_20180904142327206.jpg');

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `gid` int(11) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `store` varchar(255) DEFAULT NULL,
  `num` int(11) NOT NULL,
  `isChecked` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('1', '三九/999 感冒灵颗粒 10g*9袋 感冒发烧解热镇痛', 'https://p1.maiyaole.com/img/item/201908/27/200_20190827115347121.jpg', '972419', '10.90', '1药网自营', '13', '1', '17506');
INSERT INTO `cart` VALUES ('9', '白云山 板蓝根颗粒 10g*20包 感冒发烧清热解毒，凉血利咽', 'https://p1.maiyaole.com/img/item/201908/27/200_20190827115405774.jpg', '971744', '16.80', '1药网自营', '4', '1', '12145');
INSERT INTO `cart` VALUES ('3', '快克 复方氨酚烷胺胶囊 10粒 普通感冒 流行感冒 发烧', 'https://p2.maiyaole.com/img/item/201909/19/200_20190919171939377.jpg', '971777', '9.70', '1药网自营', '3', '1', '3876');
INSERT INTO `cart` VALUES ('4', '感康 复方氨酚烷胺片 12片 普通感冒 流行感冒', 'https://p1.maiyaole.com/img/item/201908/09/200_20190809155644959.jpg', '971779', '13.60', '1药网自营', '1', '1', '3360');
INSERT INTO `cart` VALUES ('5', '巴米尔 阿司匹林泡腾片 0.5g*10片', 'https://p2.maiyaole.com/img/989/989834/120_120.jpg', '989834', '7.00', '1药网自营', '1', '1', '306');
INSERT INTO `cart` VALUES ('7', '白云山 清开灵颗粒 10g*10袋 呼吸道感染 病毒性感冒 发烧清热解毒，镇静安神', 'https://p2.maiyaole.com/img/item/201905/08/200_2019050816281364.jpg', '971688', '15.00', '1药网自营', '1', '1', '525');

-- ----------------------------
-- Table structure for userlist
-- ----------------------------
DROP TABLE IF EXISTS `userlist`;
CREATE TABLE `userlist` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `password` varchar(16) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of userlist
-- ----------------------------
INSERT INTO `userlist` VALUES ('1', 'helloa', '15243906482', '12345a');
INSERT INTO `userlist` VALUES ('2', 'xxxxxx', '15243906482', '12345a');
INSERT INTO `userlist` VALUES ('3', 'aaaaaa', '15243906482', '12345a');
INSERT INTO `userlist` VALUES ('4', 'kkkkkk', '15243906482', '12345a');
INSERT INTO `userlist` VALUES ('5', 'zzzzzz', '15243906482', '12345a');
INSERT INTO `userlist` VALUES ('7', 'frankk', '18376735428', '12345a');
INSERT INTO `userlist` VALUES ('8', 'jamesss', '15899998888', '12345a');
INSERT INTO `userlist` VALUES ('9', 'helloh', '15243906482', '12345a');

-- ----------------------------
-- Table structure for zhongyaolist
-- ----------------------------
DROP TABLE IF EXISTS `zhongyaolist`;
CREATE TABLE `zhongyaolist` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `gid` int(20) unsigned NOT NULL,
  `src` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` float(20,1) DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `info` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `comment` int(20) unsigned NOT NULL,
  `store` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1178 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of zhongyaolist
-- ----------------------------
INSERT INTO `zhongyaolist` VALUES ('1034', '972419', 'https://p1.maiyaole.com/img/item/201908/27/200_20190827115347121.jpg', '10.9', '三九/999 感冒灵颗粒 10g*9袋 感冒发烧解热镇痛', '用于感冒引起的头痛，发热，鼻塞，流涕，咽痛', '17506', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1035', '971744', 'https://p1.maiyaole.com/img/item/201908/27/200_20190827115405774.jpg', '16.8', '白云山 板蓝根颗粒 10g*20包 感冒发烧清热解毒，凉血利咽', '用于肺胃热盛所致的咽喉肿痛、口咽干燥；急性扁桃体炎见上述证候者', '12145', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1036', '971777', 'https://p2.maiyaole.com/img/item/201909/19/200_20190919171939377.jpg', '9.7', '快克 复方氨酚烷胺胶囊 10粒 普通感冒 流行感冒 发烧', '适用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽喉痛等症状，也可用于流行性感冒的预防和治疗', '3876', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1037', '971772', 'https://p3.maiyaole.com/img/item/201908/27/200_2019082714060815.jpg', '24.2', '芬必得 布洛芬缓释胶囊 0.3g*20粒 普通感冒 流行感冒 发烧 缓解疼痛', '用于缓解轻至中度疼痛如关节痛、肌肉痛、神经痛、头痛、偏头痛、牙痛、痛经，也用于普通感冒或流行性感冒引起的发热', '3642', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1038', '971779', 'https://p1.maiyaole.com/img/item/201908/09/200_20190809155644959.jpg', '13.6', '感康 复方氨酚烷胺片 12片 普通感冒 流行感冒', ' 发烧适用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽喉痛等症状', '3360', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1039', '50087902', 'https://p3.maiyaole.com/img/item/201908/27/200_2019082714055193.jpg', '4.8', '贵州百灵 维c银翘片 24片疏风解表，清热解毒', '用于外感风热所致的流行性感冒，症见发热、头痛、咳嗽、口干、咽喉疼痛', '2540', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1040', '971919', 'https://p1.maiyaole.com/img/item/201908/27/200_20190827120016933.jpg', '18.9', '三精 双黄连口服液 10ml*10支 感冒发烧 流感', ' 流行感冒换季感冒就用三精双黄连，蓝瓶的，家中常备，用于风热感冒，发热，咳嗽，咽痛', '2165', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1041', '971706', 'https://p2.maiyaole.com/img/item/201908/09/200_20190809161010942.jpg', '15.5', '白云山 小柴胡颗粒 10g*10袋 感冒发烧解表散热，疏肝和胃', '用于外感病、邪犯少阳证，症见寒热往来，胸胁苦满，食欲不振、心烦喜吐，口苦咽干', '1957', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1042', '7835068', 'https://p4.maiyaole.com/img/item/201908/27/200_20190827115801847.jpg', '25.2', '以岭 连花清瘟胶囊 0.35g*36粒清瘟解毒，宣肺泄热', '用于治疗流行性感冒属热毒袭肺证，症见：发热或高热，恶寒，肌肉酸痛，鼻塞流涕，咳嗽，头痛，咽干咽痛，舌偏红，苔黄或黄腻等', '1500', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1043', '972669', 'https://p4.maiyaole.com/img/item/201908/27/200_20190827140856938.jpg', '22.3', '白云山 夏桑菊颗粒 10g*20袋 感冒发烧清肝明目，疏风散热，清热解毒', '用于风热感冒，门赤头痛，头晕耳鸣，咽喉肿痛，疔疮肿毒等症，并可用作清凉饮料', '1127', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1044', '972418', 'https://p2.maiyaole.com/img/item/201808/12/200_2018081219144890.jpg', '22.0', '999 感冒灵胶囊 0.5g*12粒解热镇痛', '用于感冒引起的头痛，发热，鼻塞，流涕，咽痛', '1032', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1045', '971734', 'https://p4.maiyaole.com/img/item/201909/20/200_20190920152402697.jpg', '13.9', '散利痛 复方对乙酰氨基酚片(II) 20片 普通感冒 流行感冒 发烧 缓解疼痛', '用于普通感冒或流行性感冒引起的发热，也用于缓解轻至中度疼痛如头痛、关节痛、偏头痛、牙痛、肌肉痛、神经痛、痛经', '868', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1046', '12847915', 'https://p2.maiyaole.com/img/item/201809/06/200_20180906193313523.jpg', '9.9', '同仁堂 板蓝根颗粒 5g*10袋清热解毒，凉血利咽', '用于肺胃热盛所致的咽喉肿痛，口咽干燥；急性扁桃体炎见上述症候者', '750', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1047', '971740', 'https://p4.maiyaole.com/img/item/201908/27/200_20190827140943819.jpg', '7.3', '白云山 禾穗速校 氨咖黄敏胶囊 12粒', '用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽痛等症状', '739', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1048', '50022837', 'https://p1.maiyaole.com/img/item/201702/10/200_20170210181123757.jpg', '51.0', '云南白药 四季感冒片 24片', '用于四季风寒感冒引起的发热头痛，鼻流清涕，咳嗽口干，咽喉疼痛，恶心厌食', '733', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1049', '5421160', 'https://p2.maiyaole.com/img/201403/18/120_2014031814041083.jpg', '19.2', '泰诺林 对乙酰氨基酚缓释片 0.65g*18片', '适用于感冒引起的发热、头痛以及缓解轻中度疼痛如关节痛、肌肉痛、神经痛、偏头痛、牙痛、痛经', '711', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1050', '974636', 'https://p4.maiyaole.com/img/item/201908/27/200_20190827133321405.jpg', '21.5', '幸福科达琳 复方氨酚肾素片 12片 (成人）普通感冒 流行流感 感冒发烧', '适应于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽痛等症状，也可以用于过敏性鼻炎', '693', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1051', '10134723', 'https://p3.maiyaole.com/img/10134/10134723/120_120.jpg?a=1578189550', '10.5', '国金 复方金银花颗粒 10g*10袋清热解毒，凉血消肿', '用于风热感冒，咽炎，扁桃体炎，目痛，牙痛及痈肿疮疖', '649', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1052', '50097411', 'https://p3.maiyaole.com/img/50097/50097411/120_120.jpg?a=981030183', '3.0', '贵州百灵 维C银翘片 18片辛凉解表，清热解毒', '用于流行性感冒引起的发热头痛、咳嗽、口干、咽喉疼痛', '627', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1053', '971778', 'https://p2.maiyaole.com/img/item/201807/12/200_20180712113929225.jpg', '12.7', '仁和可立克 复方氨酚烷胺胶囊 10粒', '使用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽喉痛等症状，也可用于流行性感冒的预防和治疗', '536', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1054', '971688', 'https://p2.maiyaole.com/img/item/201905/08/200_2019050816281364.jpg', '15.0', '白云山 清开灵颗粒 10g*10袋 呼吸道感染 病毒性感冒 发烧清热解毒，镇静安神', '用于外感风热所致发热，烦躁不安，咽喉肿痛；及上呼吸道感染、病毒性感冒、急性咽炎见上述证候者', '525', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1055', '10134708', 'https://p1.maiyaole.com/img/item/201807/04/200_20180704114232699.jpg', '14.7', '午时 午时茶颗粒 6g*20袋祛风解表，化湿和中', '用于外感风寒、内伤食积证，症见恶寒发热、头痛身楚、胸脘满闷、恶心呕吐、腹痛腹泻', '512', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1056', '988601', 'https://p1.maiyaole.com/img/item/201808/12/200_20180812221233205.jpg', '9.8', '施贵宝 加合百服宁 酚咖片 10片', '用于普通感冒或流行性感冒引起的发热、头痛、及缓解轻中度疼痛，如关节炎、神经痛、偏头痛、痛经等', '494', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1057', '971780', 'https://p3.maiyaole.com/img/971/971780/120_120.jpg?a=1444121943', '8.5', '感叹号 复方氨酚烷胺片 12片', '使用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽喉痛等症状', '492', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1058', '1903291', 'https://p1.maiyaole.com/img/item/201811/15/200_20181115151825981.jpg', '20.8', '芬必得 酚咖片 20片', '适用于普通感冒或流行性感冒引起的发热，也用于缓解轻至中度疼痛，如头痛、偏头痛、牙痛、神经痛、肌肉痛、痛经及关节痛等', '474', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1059', '51308390', 'https://p2.maiyaole.com/img/item/201908/09/200_2019080910310535.jpg', '24.5', '江中 板蓝根颗粒 10g*18袋清热解毒，凉血利咽', '用于肺胃热甚所致的咽喉肿口咽干燥；急性扁桃体炎见上述症候者 下单有礼，多买多送', '470', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1060', '971842', 'https://p3.maiyaole.com/img/item/201908/27/200_20190827133439258.jpg', '36.0', '香雪 抗病毒口服液 10ml*12支清热祛湿，凉血解毒', '用于风热感冒，流感', '469', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1061', '972424', 'https://p4.maiyaole.com/img/item/201808/13/200_20180813151044553.jpg', '13.0', '白云山 何济公 阿咖酚散 100包', '用于普通感冒或流行性感冒引起的发热，也用于缓解轻至中度疼痛如头痛、关节痛、偏头痛、牙痛、肌肉痛、神经痛、痛经', '468', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1062', '50088073', 'https://p3.maiyaole.com/img/50088/50088073/120_120.JPG', '12.0', '云南白药 小柴胡颗粒 10g*6袋解表散热，疏肝和胃', '用于外感病，邪犯少阳证，症见寒热往来、胸胁苦满、食欲不振、心烦喜呕、口苦咽干', '460', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1063', '971462', 'https://p2.maiyaole.com/img/item/201808/12/200_20180812175557452.jpg', '8.3', '九寨沟 玄麦甘桔颗粒 10g*20袋清热滋阴，祛痰利咽', '用于阴虚火旺，虚火上浮，口鼻干燥，咽喉肿痛', '373', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1064', '971784', 'https://p4.maiyaole.com/img/item/201908/27/200_20190827133727286.jpg', '9.5', '散利痛 复方对乙酰氨基酚片Ⅱ 10片', '用于普通感冒或流行性感冒引起的发热，也用于缓解轻至中度疼痛如头痛、关节痛、偏头痛、牙痛、肌肉痛、神经痛、痛经', '366', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1065', '50088050', 'https://p3.maiyaole.com/img/201502/16/120_2015021613513887.jpg', '10.5', '刻康 四季感冒片 0.35g*36片清热解表', '用于四季风寒感冒引起的发热头痛，鼻流清涕，咳嗽口干，咽喉疼痛，恶心厌食', '353', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1066', '974472', 'https://p2.maiyaole.com/img/item/201909/20/200_20190920151507123.jpg', '15.5', '以岭 连花清瘟胶囊 24粒清瘟解毒，宣肺泄热', '用于治疗流行性感冒属热毒袭肺证，症见：发热或高热，恶寒，肌肉酸痛，鼻塞流涕，咳嗽，头痛，咽干咽痛，舌偏红，苔黄或黄腻等', '351', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1067', '50168288', 'https://p2.maiyaole.com/img/item/201808/13/200_20180813134901957.jpg', '10.9', '片仔癀 金牡感冒片 0.5g*24片疏风解表、清热解毒', '用于外感风热，发热恶寒，头痛咳嗽，咽喉肿痛', '348', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1068', '1122101', 'https://p2.maiyaole.com/img/1122/1122101/120_120.jpg', '9.5', '葛仙翁 复方板蓝根颗粒 15g*15包清热解毒，凉血', '用于风热感冒，咽喉肿痛', '339', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1069', '980948', 'https://p3.maiyaole.com/img/item/201701/04/200_20170104153058555.jpg', '12.7', '同仁堂 板蓝根颗粒 3g*10袋 （无蔗糖）清热解毒，凉血利咽', '用于肺胃热盛所致的咽喉肿痛、口咽干燥；急性扁桃体炎见上述证候者', '308', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1070', '989834', 'https://p2.maiyaole.com/img/989/989834/120_120.jpg', '7.0', '巴米尔 阿司匹林泡腾片 0.5g*10片', '用于普通感冒或流行性感冒引起的发热，也用于缓慢轻至重度疼痛如头疼、关节痛、偏头痛、牙痛、肌肉痛、神经痛、疼经', '306', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1071', '50093213', 'https://p3.maiyaole.com/img/item/201908/27/200_20190827140922680.jpg', '23.8', '白云山 清开灵颗粒 10g*20袋清热解毒，镇静安神', '用于外感风热时毒、火毒内盛所致高热不退、烦躁不安、咽喉肿痛、舌质红绛、苔黄、脉数上呼吸道感染，病毒性感冒，急性扁桃体炎，急性咽炎，急性气管炎，高热等症属上述证候者', '281', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1072', '971768', 'https://p1.maiyaole.com/img/201403/18/120_20140318161902877.jpg', '8.0', '泰诺林 对乙酰氨基酚缓释片 0.65g*6片', '用于普通感冒或流行性感冒引起的发热，也用于缓解轻至中度疼痛如头痛、关节痛、偏头痛、牙痛、肌肉痛、神经痛、痛经', '279', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1073', '971752', 'https://p2.maiyaole.com/img/971/971752/120_120.jpg?a=90067053', '5.5', '中美史克 必理通 对乙酰氨基酚片 0.5g*10片', '用于普通感冒或流行性感冒引起的发热，也用于缓解轻至中度疼痛如头痛、关节痛、偏头痛、牙痛、肌肉痛、神经痛、痛经', '265', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1074', '7885204', 'https://p3.maiyaole.com/img/item/201809/04/200_20180904113819223.jpg', '15.0', '中族 板蓝根颗粒 10g*20袋清热解毒，凉血利咽', '用于肺胃热盛所致的咽喉肿痛、口咽干燥；急性扁桃体炎见上述证候者', '255', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1075', '50307326', 'https://p1.maiyaole.com/img/201605/06/120_20160506133302937.jpg', '12.5', '百灵鸟 维C银翘片 24片 (双层片)辛凉解表，清热解毒', '用于流行性感冒引起的发热头痛，咳嗽，口干，咽喉疼痛', '244', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1076', '50098187', 'https://p1.maiyaole.com/img/201507/02/120_20150702130635800.jpg', '4.0', '旺方 感冒止咳胶囊 0.5g*12粒淸热解表，止咳化痰', '用于感冒发热，头痛鼻塞，伤风咳嗽， 咽喉肿痛，四肢怠倦，流行性感冒', '235', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1077', '1869080', 'https://p1.maiyaole.com/img/201607/06/120_20160706132306468.jpg', '19.9', '欧意 感冒清热软胶囊 0.65g*24粒疏风散寒，解表清热', '用于风寒感冒，头痛发热，恶寒身痛，鼻流清涕，咳嗽咽干', '234', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1078', '50085418', 'https://p1.maiyaole.com/img/item/201908/27/200_20190827135918666.jpg', '16.5', '联邦缓士芬 布洛芬缓释胶囊 0.3g*24粒', '用于缓解轻至中度疼痛如头痛、关节痛、偏头痛、牙痛、肌肉痛、神经痛、痛经，也用于普通感冒或流行性感冒引起的发热', '227', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1079', '996844', 'https://p1.maiyaole.com/img/201311/06/120_20131106100843501.jpg', '15.9', '云南白药 伤风停胶囊 0.35g*24粒发散风寒', '用于风寒感冒、发热、头痛、流清水鼻涕，鼻炎，中药制剂，服用后不犯困', '217', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1080', '50168916', 'https://p4.maiyaole.com/img/item/201908/27/200_20190827135759540.jpg', '27.0', '仁和可立克 复方氨酚烷胺胶囊 24粒', '用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽痛等症状，也可用于流行性感冒的预防和治疗', '198', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1081', '1601669', 'https://p1.maiyaole.com/img/201608/16/120_20160816175631471.jpg', '7.0', '天康 感冒灵颗粒 10g*9袋解热镇痛', '用于感冒引起的头痛，发热，鼻塞，流涕，咽痛', '173', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1082', '50092800', 'https://p4.maiyaole.com/img/item/201808/16/200_20180816133507643.jpg', '11.0', '万岁 复方板蓝根颗粒 15g*20袋清热解毒，凉血', '用于风热感冒，咽喉肿痛', '172', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1083', '995628', 'https://p3.maiyaole.com/img/item/201907/17/200_2019071709540178.jpg', '8.8', '健丰 夏桑菊颗粒 10g*20袋清肝明目，疏风散热，除湿痹，解疮毒', '用于风热感冒，目赤头痛，头晕耳鸣，咽喉肿痛，疔疮肿毒等症，并可用作清凉饮料', '172', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1084', '11181528', 'https://p3.maiyaole.com/img/11181/11181528/120_120.jpg?a=347784586', '39.8', '太龙 双黄连口服液 20ml*10支治疗感冒防流感，家中常备畅销药', '用于外感风热引起的感冒，症见发热，咳嗽，咽痛', '161', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1085', '50086601', 'https://p4.maiyaole.com/img/item/201808/09/200_20180809182119227.jpg', '13.6', '福森 双黄连口服液 10ml*10支疏风解表，清热解毒', '用于外感风热所致的感冒，症见发热、咳嗽、咽痛', '157', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1086', '974694', 'https://p1.maiyaole.com/img/201604/07/120_20160407145326477.jpg', '18.0', '君泰 双黄连口服液 10ml*10支疏风解表，清热解毒', '用于外感风热所致的感冒，症见发热、咳嗽、咽痛', '155', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1087', '972670', 'https://p2.maiyaole.com/img/item/201808/20/200_20180820091856215.jpg', '22.0', '白云山 星群 夏桑菊颗粒 3g*10袋 （无糖）清肝明目，疏风散热，除湿痹，解疮毒', '用于风热感冒，目赤头痛，头晕耳鸣，咽喉肿痛，疔疮肿毒等症，并可用作清凉饮料', '153', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1088', '2042943', 'https://p1.maiyaole.com/img/2042/2042943/120_120.jpg?a=2077476823', '12.5', '恩威 力克舒 复方氨酚烷胺片 18片', '适用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽痛等症状', '147', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1089', '50092797', 'https://p3.maiyaole.com/img/item/201808/13/200_20180813134019289.jpg', '8.5', '大亚芬克 布洛芬缓释片 0.2g*20片', '用于减轻中度疼痛，如关节痛、神经痛、肌肉痛、偏头痛、头痛、痛经、牙痛；也可用于感冒和流感引起的发热', '123', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1090', '50095125', 'https://p3.maiyaole.com/img/201603/09/120_20160309110941304.jpg', '12.0', '明仁 四季感冒胶囊 0.41g*24粒清热解表', '用于四季风寒感冒引起的发热头痛，鼻流清涕，咳嗽口干，咽喉疼痛，恶心厌食', '105', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1091', '972468', 'https://p4.maiyaole.com/img/item/201808/13/200_20180813161224496.jpg', '8.0', '一禾 二天油 9ml驱风兴奋药', '用于伤风感冒，舟车晕眩，中暑', '102', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1092', '10134753', 'https://p3.maiyaole.com/img/item/201610/21/200_20161021171503964.jpg', '23.8', '百灵鸟 金感胶囊 0.45g*24粒清热解毒，疏风解表', '用于普通感冒、流行性感冒，外感风热症，症见发热，头痛，鼻塞，流涕，咳嗽，咽痛', '96', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1093', '50179456', 'https://p2.maiyaole.com/img/201512/08/120_20151208173251143.jpg', '8.9', '益尔 板蓝根茶 15g*12块清热解毒，凉血利咽', '用于肺胃热盛所致的咽喉肿痛、口咽干燥；急性扁桃体炎见上述证候者', '95', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1094', '50089940', 'https://p3.maiyaole.com/img/201601/25/120_20160125135726423.jpg', '9.0', '腾药 感冒疏风片 24片辛温解表，宣肺和中', '用于风寒感冒，发热咳嗽，头痛怕冷，鼻流清涕，骨节酸痛，四肢疲倦', '81', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1095', '50088118', 'https://p1.maiyaole.com/img/item/201809/30/200_20180930174326356.jpg', '37.0', '香雪 抗病毒口服液 10ml*10支清热祛湿，凉血解毒', '用于风热感冒，流感', '78', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1096', '50168216', 'https://p3.maiyaole.com/img/item/201808/12/200_20180812212014567.jpg', '27.0', '德众 小柴胡片 0.4g*100片解表散热，疏肝和胃', '用于感冒，寒热往来、胸胁不适、没食欲没胃口、心烦、呕吐、口苦咽干', '78', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1097', '50088986', 'https://p1.maiyaole.com/img/201503/16/120_20150316210816910.jpg', '6.6', '明仁 四季感冒片 24片清热解表', '用于四季风寒感冒引起的发热头痛，鼻流清涕，咳嗽口干，咽喉疼痛，恶心厌食', '76', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1098', '50091100', 'https://p3.maiyaole.com/img/item/201907/08/200_20190708110924454.jpg', '19.8', '太极 散列通 复方对乙酰氨基酚片（II） 20片', '用于普通感冒或流行性感冒引起的发热，也用于缓解轻至中度疼痛如头痛、关节痛、偏头痛、牙痛、肌肉痛、神经痛、痛经', '72', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1099', '50086619', 'https://p3.maiyaole.com/img/item/201805/31/200_20180531162625686.jpg', '16.9', '福森 双黄连口服液 20ml*10支疏风解表，清热解毒', '用于外感风热所致的感冒，症见发热、咳嗽、咽痛【温馨提示：有效期至2020.1.31，效期内不影响使用，介意者慎拍】', '71', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1100', '50078151', 'https://p1.maiyaole.com/img/50078/50078151/120_120.jpg?a=1522188957', '7.0', '诺金 精制银翘解毒片 0.25g*40片清热散风，解表退烧', '用于流行性感冒，发冷发烧，四肢酸懒，头痛咳嗽，咽喉肿痛', '69', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1101', '50088649', 'https://p1.maiyaole.com/img/201503/09/120_20150309155450692.jpg', '8.5', '圣泰 清开灵片 0.5g*12片清热解毒，镇静安神', '用于外感风热时毒、火毒内盛所致发热、烦躁不安、咽喉肿痛、舌质红绛、苔黄、脉数者：上呼吸道感染、病毒性感冒、急性咽炎、急性气管炎等病症属上述证候者', '65', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1102', '971761', 'https://p1.maiyaole.com/img/item/201608/25/200_20160825160002459.jpg', '11.0', '德众 羚羊感冒片 24片清热解表', '用于流行性感冒，症见发热恶风、头痛头晕、咳嗽、胸闷、咽喉肿痛', '64', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1103', '50088075', 'https://p2.maiyaole.com/img/50088/50088075/120_120.JPG', '20.0', '云南白药 风热感冒颗粒 10g*6袋疏风清热，利咽解毒', '用于风热感冒，发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰', '62', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1104', '971687', 'https://p4.maiyaole.com/img/item/201808/03/200_20180803100827948.jpg', '15.0', '白云山 清开灵胶囊 0.25g*12粒清热解毒，镇静安神', '用于外感风热所致发热，烦躁不安，咽喉肿痛；及上呼吸道感染、病毒性感冒、急性咽炎见上述证候者', '62', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1105', '51074527', 'https://p1.maiyaole.com/img/item/201808/13/200_20180813182934320.jpg', '5.6', '特一 布洛芬片 0.1g*100片', '用于缓解轻至中度疼痛如头痛.关节痛、偏头痛、牙痛、肌肉痛、神经痛、痛经，也用于普通感冒或流行性感冒引起的发热', '61', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1106', '971831', 'https://p2.maiyaole.com/img/item/201908/09/200_20190809155617562.jpg', '48.5', '京都念慈菴 蜜炼川贝枇杷膏 300ml香港进口，经典好药！润肺化痰、止咳平喘、护喉利咽、生津补气、调心降', '本品适用于伤风咳嗽、痰稠、痰多气喘、咽喉干痒及声音嘶哑', '5452', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1107', '971833', 'https://p1.maiyaole.com/img/item/201908/27/200_20190827140456141.jpg', '27.8', '京都念慈菴 蜜炼川贝枇杷膏 150ml香港进口，经典好药！润肺化痰、止咳平喘、护喉利咽、生津补气、调心降火', '本品适用于伤风咳嗽、痰稠、痰多气喘、咽喉干痒及声音嘶哑', '1343', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1108', '981295', 'https://p4.maiyaole.com/img/item/201808/12/200_2018081217585894.jpg', '26.8', '太极 急支糖浆 200ml清热化痰，宣肺止咳', '用于外感风热所致的咳嗽，症见发热、恶寒、胸膈满闷、咳嗽咽痛；急性支气管炎、慢性支气管炎急性发作见上述证候者', '752', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1109', '971848', 'https://p1.maiyaole.com/img/item/201808/13/200_20180813150023303.jpg', '12.8', '白云山 一力 咳特灵胶囊 30粒镇咳祛痰、平喘消炎，', '用于咳喘及慢性支气管炎', '660', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1110', '974677', 'https://p4.maiyaole.com/img/item/201809/18/200_201809181618078.jpg', '9.5', '青峰 复方鱼腥草片 100片清热解毒', '用于外感风热所致的咽部红肿、咽痛；急性咽炎、急性扁桃体炎', '593', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1111', '972566', 'https://p4.maiyaole.com/img/item/201908/02/200_20190802100528946.jpg', '12.0', '白云山 一力 咳特灵片 100片镇咳，祛痰，平喘，消炎', '用于咳喘及慢性支气管炎咳嗽', '573', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1112', '971825', 'https://p1.maiyaole.com/img/item/201808/10/200_20180810144311972.jpg', '13.5', '太极 急支糖浆 100ml精选治疗支气管炎经典中药材入药，清热化痰、宣肺止咳，消炎', '用于急性支气管炎、慢性支气管炎急性发作', '543', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1113', '981117', 'https://p1.maiyaole.com/img/item/201908/27/200_20190827135859537.jpg', '17.5', '联邦克立停 氢溴酸右美沙芬口服溶液 120ml:180mg', '用于干咳，包括上呼吸道感染（如感冒和咽炎）、支气管炎、支气管等引起的咳嗽', '476', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1114', '974703', 'https://p4.maiyaole.com/img/item/201808/13/200_20180813150353111.jpg', '8.8', '白云山 氢溴酸右美沙芬片 15mg*12片', '用于干咳，包括上呼吸道感染（如感冒和咽炎）、支气管炎等引起的咳嗽', '443', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1115', '50086582', 'https://p2.maiyaole.com/img/item/201908/27/200_20190827135834933.jpg', '35.0', '鹿迪 桔贝合剂 10ml*6支润肺止咳', '用于肺热咳嗽，痰稠色黄，咯痰不爽', '411', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1116', '971890', 'https://p2.maiyaole.com/img/971/971890/120_120.jpg?a=48643182', '10.0', '白云山 强力枇杷露 120ml养阴敛肺，止咳祛痰', '用于支气管炎咳嗽', '396', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1117', '972359', 'https://p1.maiyaole.com/img/item/201808/12/200_20180812184448216.jpg', '6.0', '王老吉 金龙 痰咳净散 6g通窍顺气，止咳，化痰', '用于支气管炎、咽炎等引起的咳嗽多痰、气促、气喘', '260', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1118', '990284', 'https://p4.maiyaole.com/img/item/201811/02/200_20181102182240218.jpg', '29.8', '特一 止咳宝片 24片宣肺祛痰，止咳平喘', '用于外感风寒所致的咳嗽、痰多清稀、咳甚而喘；慢性支气管炎、上呼吸道感染见上述症候者', '250', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1119', '50007280', 'https://p2.maiyaole.com/img/201402/11/120_20140211110510323.jpg', '11.6', '可乐尔 氢溴酸右美沙芬分散片 15mg*24片', '用于干咳，上呼吸道感染（感冒和咽炎）、支气管炎等引起的咳嗽', '241', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1120', '50003559', 'https://p2.maiyaole.com/img/item/201703/10/200_20170310180404540.jpg', '14.2', '桑海 牛黄蛇胆川贝液 10ml*6支清热，化痰，止咳', '用于热痰、燥痰咳嗽、症见咳嗽、痰黄或干咳、咯痰不爽', '233', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1121', '50094417', 'https://p4.maiyaole.com/img/item/201909/01/200_20190901132522544.jpg', '33.8', '同仁堂 养阴清肺丸 9g*10丸养阴润燥，清肺利咽', '用于阴虚肺燥，咽喉干痛，干咳少痰', '225', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1122', '50106967', 'https://p2.maiyaole.com/img/item/201808/03/200_20180803102139693.jpg', '7.0', '罗浮山 咳特灵片 100片镇咳，祛痰，平喘，消炎', '用于咳喘及慢性支气管炎', '206', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1123', '50089039', 'https://p3.maiyaole.com/img/item/201904/22/200_20190422112744992.jpg', '5.0', '金桃 雪梨膏 120g清肺热，润燥止咳', '用于干咳，久咳', '194', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1124', '971794', 'https://p3.maiyaole.com/img/item/201704/01/200_20170401105154263.jpg', '8.8', '白云山 复方愈创木酚磺酸钾口服溶液 100m', '用于感冒及过敏性支气管炎引起的咳嗽多痰', '193', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1125', '7885722', 'https://p4.maiyaole.com/img/item/201808/12/200_20180812180537704.jpg', '19.8', '胡庆余堂 强力枇杷露 200ml养阴敛肺，止咳祛痰', '用于支气管炎咳嗽', '175', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1126', '50094440', 'https://p4.maiyaole.com/img/item/201808/12/200_20180812180720643.jpg', '22.0', '同仁堂 止咳橘红丸 6g*10丸清肺，止咳，化痰', '用于痰热阻肺引起的咳嗽痰多、胸满气短、咽干喉痒', '173', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1127', '971878', 'https://p2.maiyaole.com/img/item/201808/12/200_20180812220429502.jpg', '22.8', '潘高寿 蜜炼川贝枇杷膏 138g清热润肺，止咳平喘，理气化痰', '适用于肺燥之咳嗽，痰多，胸闷，咽喉痛痒，声音沙哑', '164', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1128', '972510', 'https://p4.maiyaole.com/img/item/201807/18/200_20180718151718390.jpg', '16.0', '汇仁 复方鲜竹沥液 10ml*6支清热化痰，止咳', '用于痰热咳嗽，痰黄黏稠【温馨提示：有效期至2019.10.31，效期内不影响使用，介意者慎拍】', '163', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1129', '50089014', 'https://p2.maiyaole.com/img/item/201808/12/200_20180812183124673.jpg', '29.8', '诺金 百合固金片 0.4g*30片养阴润肺，化痰止咳', '用于肺肾阴虚，干咳少痰，咽干喉痛', '161', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1130', '971637', 'https://p3.maiyaole.com/img/item/201808/12/200_20180812191424597.jpg', '16.0', '富露施 乙酰半胱氨酸颗粒 0.1g*10袋', '适用于咳嗽有粘痰而不易咳出，如慢性支气管炎（成人4盒/周，18盒/月；儿童2盒/周，9盒/月）', '157', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1131', '972714', 'https://p2.maiyaole.com/img/item/201808/13/200_20180813151356999.jpg', '19.8', '潘高寿 治咳川贝枇杷露 150ml清热化痰止咳', '用于感冒、支气管炎属痰热阻肺证，症见咳嗽、痰黏或黄', '133', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1132', '50514198', 'https://p2.maiyaole.com/img/item/201903/13/200_20190313100358183.jpg', '32.0', '修正 肺宁颗粒 10g*10袋清热祛痰,镇咳平喘', '用于肺内感染,慢性支气管炎,喘息性支气管炎,急性呼吸道感染等', '131', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1133', '11914342', 'https://p1.maiyaole.com/img/201309/24/17/20130924174024423.jpg', '15.0', '神奇 枇杷止咳胶囊 0.25g*24粒止嗽化痰', '用于咳嗽及支气管炎咳嗽', '125', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1134', '50185235', 'https://p4.maiyaole.com/img/item/201711/16/200_20171116140117121.jpg', '26.2', '富露施 乙酰半胱氨酸颗粒 0.1g*20袋【大包装更划算】', '适用于慢性支气管炎等咳嗽有粘痰而不易咳出（成人2盒/周，9盒/月；儿童1盒/周，4盒/月）', '120', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1135', '50086600', 'https://p2.maiyaole.com/img/item/201808/13/200_20180813133655893.jpg', '36.8', '潘高寿 蛇胆川贝枇杷膏 210g润肺止咳，祛痰定喘', '用于风热犯肺引起的咳嗽痰多、胸闷、气喘', '120', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1136', '50098403', 'https://p3.maiyaole.com/img/item/201809/07/200_20180907113807343.jpg', '5.8', '华南牌 氢溴酸右美沙芬片 15mg*12片镇咳药', '用于上呼吸道感染(如感冒和咽炎)、支气管炎等引起的剧烈咳嗽无痰，干咳，药效长', '113', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1137', '50085083', 'https://p1.maiyaole.com/img/item/201904/03/200_2019040317293851.jpg', '19.0', '立效 养阴清肺丸 6g*6袋养阴润燥，清肺利咽', '用于阴虚肺燥，咽喉干痛，干咳少痰', '106', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1138', '50269077', 'https://p1.maiyaole.com/img/201604/02/120_20160402165728907.jpg', '11.0', '旺方 百合固金片 0.45g*18片养阴润肺，化痰止咳', '用于肺肾阴虚，干咳少痰，咽干喉痛', '106', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1139', '50089106', 'https://p2.maiyaole.com/img/item/201808/12/200_20180812212303123.jpg', '18.0', '中智 克咳片 0.54g*16片止嗽，定喘，祛痰', '用于咳嗽，喘急气短', '103', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1140', '50620408', 'https://p3.maiyaole.com/img/item/201808/10/200_20180810102427674.jpg', '36.8', '太极 急支糖浆 300ml清热化痰，宣肺止咳', '用于外感风热所致的咳嗽，症见发热、恶寒、胸膈满闷、咳嗽咽痛；急性支气管炎、慢性支气管炎急性发作见上述证候者', '103', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1141', '50086344', 'https://p2.maiyaole.com/img/item/201808/12/200_2018081221370340.jpg', '29.8', '本草纲目 川贝雪梨糖浆 100ml养阴润肺', '用于肺热咳嗽，阴虚久咳', '98', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1142', '971475', 'https://p1.maiyaole.com/img/971/971475/120_120.jpg?a=1134058340', '12.0', '邦琪药业 百咳静糖浆 120ml清热化痰、平喘止咳', '用于感冒及急慢性气管炎引起的咳嗽', '94', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1143', '971923', 'https://p3.maiyaole.com/img/item/201609/17/200_20160917153609924.jpg', '2.5', '金石 羧甲司坦片 250mg*12片', '用于治疗慢性支气管炎、支气管哮喘等疾病引起的痰粘稠、咳痰困难等患者', '79', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1144', '2659088', 'https://p1.maiyaole.com/img/2659/2659088/120_120.jpg?a=466634824', '11.5', '孔府 牛黄蛇胆川贝液 10ml*6支清热，化痰，止咳', '用于外感咳嗽中的热痰咳嗽，燥痰咳嗽', '76', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1145', '971476', 'https://p2.maiyaole.com/img/item/201808/13/200_20180813160110439.jpg', '12.0', '邦琪 百咳静糖浆 100ml清热化痰、平喘止咳', '用于外感风热所致的咳嗽，咳痰；感冒，急，慢性支气管炎，百日咳见上述症候者', '74', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1146', '971909', 'https://p2.maiyaole.com/img/item/201805/10/200_20180510180211418.jpg', '24.8', '潘高寿 蛇胆川贝枇杷膏 138g润肺止咳，祛痰定喘', '用于燥邪犯肺引起的咳嗽咯痰、胸闷气喘、鼻燥、咽干喉痒等症', '73', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1147', '50094116', 'https://p1.maiyaole.com/img/201505/17/120_20150517002950318.jpg', '6.0', '金太子 强力枇杷露 120ml养阴敛肺，止咳祛痰', '用于支气管炎咳嗽', '67', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1148', '50085706', 'https://p2.maiyaole.com/img/item/201907/16/200_20190716172428481.jpg', '16.8', '孔府 牛黄蛇胆川贝液 10ml*12支清热，化痰，止咳', '用于外感咳嗽中的热痰咳嗽，燥痰咳嗽', '67', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1149', '971837', 'https://p2.maiyaole.com/img/item/201905/28/200_20190528095703240.jpg', '28.0', '白云山 橘红痰咳煎膏 180g理气祛痰，润肺止咳', '用于感冒，咽喉炎引起的痰多咳嗽、气喘', '65', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1150', '50105126', 'https://p2.maiyaole.com/img/201510/19/120_20151019100945882.jpg', '37.8', '消坦立 乙酰半胱氨酸颗粒 0.2g*10袋', '适用于慢性支气管炎等咳嗽有粘痰而不易咳出的患者', '62', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1151', '50727352', 'https://p1.maiyaole.com/img/item/201808/13/200_20180813115827918.jpg', '25.8', '久欣 小青龙颗粒 13g*6袋解表化饮，止咳平喘', '用于风寒水饮，恶寒发热，无汗，喘咳痰稀', '61', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1152', '971835', 'https://p1.maiyaole.com/img/971/971835/120_120.jpg?a=362603849', '18.0', '香雪 橘红痰咳煎膏 100g理气祛痰，润肺止咳', '用于感冒，咽喉炎引起的痰多咳嗽、气喘', '59', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1153', '991706', 'https://p2.maiyaole.com/img/201512/30/120_20151230172059348.jpg', '13.5', '冯了性 橘红丸 6g*10丸清肺，化痰，止咳', '用于痰热咳嗽，痰多，色黄黏稠，胸闷口干', '59', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1154', '50093215', 'https://p3.maiyaole.com/img/item/201908/09/200_20190809162115617.jpg', '88.8', '护佑 苏黄止咳胶囊 0.45g*24粒疏风宣肺，止咳利咽', '苏黄止咳胶囊用于风邪犯肺，肺气失宣所致的咳嗽，咽痒，痒时咳嗽', '0', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1155', '5421802', 'https://p1.maiyaole.com/img/item/201610/27/200_2016102715142622.jpg', '22.5', '安邦 银黄清肺胶囊 0.15g*24粒清肺化痰，止咳平喘', '用于慢性支气管炎急性发作之痰热壅肺证，症见：咳嗽咯痰，痰黄而粘，胸闷气喘，发热口渴，便干尿黄，舌红，苔黄腻等', '52', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1156', '50126404', 'https://p1.maiyaole.com/img/50126/50126404/120_120.jpg?a=319905709', '22.0', '白加黑 氢溴酸右美沙芬糖浆 100ml', '用于干咳，包括上呼吸道感染（如感冒和咽炎）、支气管炎等引起的咳嗽', '51', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1157', '50175251', 'https://p1.maiyaole.com/img/item/201803/22/200_20180322103910147.jpg', '16.9', '惠美健 强力枇杷露 250ml', '用于支气管炎咳嗽；养阴敛肺，止咳祛痰', '42', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1158', '50097153', 'https://p1.maiyaole.com/img/201608/02/120_20160802095024149.jpg', '18.9', '神奇速可停 强力枇杷露 100ml*2瓶养阴敛肺，止咳祛痰', '用于支气管炎咳嗽', '41', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1159', '50198950', 'https://p3.maiyaole.com/img/item/201808/09/200_20180809110157700.jpg', '3.6', '长恒 麻杏止咳片 0.26g*24片镇咳，祛痰，平喘', '用于急、慢性支气管炎及喘息等', '37', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1160', '50147384', 'https://p2.maiyaole.com/img/50147/50147384/120_120.jpg', '13.8', '白云山 橘红痰咳煎膏 100g', '用于感冒，咽喉炎引起的痰多咳嗽，气喘，理气祛痰，润肺止咳', '33', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1161', '50096733', 'https://p2.maiyaole.com/img/item/201904/22/200_20190422112254714.jpg', '13.9', '华乐沙 羧甲司坦口服溶液 0.2g*10ml*10支', '用于治疗慢性支气管炎、支气管哮喘等疾病引起的痰液粘稠、咳痰困难患者', '32', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1162', '50176199', 'https://p2.maiyaole.com/img/50176/50176199/120_120.jpg?a=1407177754', '6.0', '东信 雪梨膏 120g清肺热，润燥止渴', '用于干咳，久咳', '32', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1163', '50091111', 'https://p2.maiyaole.com/img/50091/50091111/120_120.jpg?a=1732588940', '38.0', '护佑 苏黄止咳胶囊 0.45*9粒疏风宣肺，止咳利咽', '感冒后咳嗽或咳嗽变异性哮喘见上述证候者（7~14盒/疗程）', '0', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1164', '50026669', 'https://p4.maiyaole.com/img/item/201808/12/200_20180812192402884.jpg', '12.5', '美山 羚羊清肺颗粒 6g*12袋清肺利咽，除瘟止嗽', '用于肺胃热盛，感受时邪，身热头晕，四肢酸懒，咳嗽痰盛，咽喉肿痛，鼻衄咳血，口干舌燥', '0', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1165', '50105122', 'https://p2.maiyaole.com/img/50105/50105122/120_120.jpg?a=458513594', '39.0', '消坦立 乙酰半胱氨酸颗粒 0.2g*15袋', '适用于慢性支气管炎等咳嗽有粘痰而不易咳出的患者', '28', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1166', '50098424', 'https://p2.maiyaole.com/img/item/201610/21/200_20161021172525259.jpg', '38.0', '冯了性 蛇胆陈皮散 0.6g*20袋理气化痰，祛风和胃', '用于痰浊阻肺，胃失和降，咳嗽，痰多粘稠，呕吐气逆', '28', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1167', '50510609', 'https://p3.maiyaole.com/img/item/201811/15/200_20181115093729659.jpg', '28.3', '神奇 枇杷止咳胶囊 0.25g*36粒止嗽化痰', '用于咳嗽，及支气管炎咳嗽', '27', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1168', '971836', 'https://p4.maiyaole.com/img/item/201907/16/200_20190716212015836.jpg', '16.0', '香雪 橘红痰咳液 10ml*6支理气祛痰，润肺止咳', '用于感冒，咽喉炎引起的痰多咳嗽、气喘', '25', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1169', '50106223', 'https://p1.maiyaole.com/img/item/201801/18/200_20180118151858814.jpg', '6.5', '太福 蛇胆川贝液 10ml*6支祛风止咳，除痰散结', '用于风热咳嗽，痰多，气喘，胸闷，咳痰不爽或久咳不止', '24', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1170', '50791449', 'https://p4.maiyaole.com/img/item/201704/27/200_20170427164928376.jpg', '14.5', '仁和 化痰平喘片 36片清热化痰，止咳平喘', '用于急、慢性气管炎，肺气肿，咳嗽痰多，胸满气喘', '22', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1171', '50086602', 'https://p3.maiyaole.com/img/50086/50086602/120_120.jpg?a=641177142', '24.9', '明仁 通宣理肺胶囊 360mg*24粒解表散寒，宣肺止嗽', '用于风寒感冒咳嗽，咯痰不畅，发热恶寒，鼻塞流涕，头痛无汗，肢体酸痛', '22', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1172', '50106226', 'https://p3.maiyaole.com/img/item/201901/03/200_20190103094446379.jpg', '5.9', '立效 橘红丸 7.2g*6袋清肺，化痰，止咳', '用于痰热咳嗽，痰多，色黄黏稠，胸闷口干', '21', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1173', '50791447', 'https://p1.maiyaole.com/img/item/201710/30/200_20171030175153144.jpg', '14.5', '仁和 桂龙 咳喘宁片 0.41g*24片止咳化痰，降气平喘', '本品用于风寒或痰湿阻肺引起的咳嗽、气喘、痰涎壅盛等症；以及急、慢性支气管炎', '21', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1174', '50089065', 'https://p2.maiyaole.com/img/201607/29/120_20160729111747530.jpg', '11.9', '云丰 消炎止咳片 12片*2板消炎，镇咳，化痰，定喘', '用于咳嗽痰多，胸闷气逆、气管炎', '0', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1175', '51074524', 'https://p2.maiyaole.com/img/item/201808/13/200_20180813184500448.jpg', '8.0', '康奇力 感冒止咳颗粒 10g*10袋清热解表，止咳化痰', '用于感冒发热，头痛鼻塞，伤风咳嗽，咽喉肿痛，四肢怠倦，流行性感冒', '17', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1176', '50618157', 'https://p2.maiyaole.com/img/item/201610/28/200_20161028105715532.jpg', '17.8', '万通 咳克平胶囊 0.32g*12粒养阴润肺，化痰止咳', '用于燥热伤肺所致的咳嗽，咳痰不爽，咽干喉痛，唇舌干燥', '15', '1药网自营');
INSERT INTO `zhongyaolist` VALUES ('1177', '50175225', 'https://p2.maiyaole.com/img/201511/06/120_20151106203622324.jpg', '23.8', '康弘 感咳双清胶囊 24粒清热解毒', '用于急性上呼吸道感染、急性支气管炎，症见发热、咳嗽、咽痛、头痛、鼻塞', '15', '1药网自营');
SET FOREIGN_KEY_CHECKS=1;
