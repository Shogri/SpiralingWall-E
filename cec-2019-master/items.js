class Item {
	constructor(id, x, y, type, coveredBy) {
		this.id = id;
		this.x = x;
		this.y = y;
		this.type = type;
		this.coveredBy = coveredBy;
	}
}

exports.itemsCount = function(items, type) {
	var itemCount = 0;
	items.forEach(function(item) {
		switch (item.type) {
			case type:
				itemCount++;
				break;
		}
	});
	return itemCount;
}

exports.presentationItems = [
	new Item(0, 1, 1, "GARBAGE", [1]),
	new Item(1, 1, 1, "GARBAGE"),
	new Item(2, 1, 1, "RECYCLE"),
	new Item(3, 1, 1, "ORGANIC"),
	new Item(4, 1, 1, "ORGANIC"),
	new Item(5, 1, 2, "GARBAGE"),
	new Item(6, 1, 2, "ORGANIC"),
	new Item(7, 1, 2, "ORGANIC"),
	new Item(8, 1, 3, "GARBAGE", [9]),
	new Item(9, 1, 3, "RECYCLE"),
	new Item(10, 2, 1, "GARBAGE"),
	new Item(11, 2, 1, "RECYCLE"),
	new Item(12, 2, 1, "ORGANIC"),
	new Item(13, 2, 1, "ORGANIC"),
	new Item(14, 2, 2, "GARBAGE", [15]),
	new Item(15, 2, 2, "ORGANIC"),
	new Item(16, 2, 2, "ORGANIC"),
	new Item(17, 2, 3, "RECYCLE"),
	new Item(18, 2, 3, "RECYCLE", [19]),
	new Item(19, 2, 3, "ORGANIC"),
	new Item(20, 2, 7, "GARBAGE", [22]),
	new Item(21, 2, 7, "RECYCLE", [23]),
	new Item(22, 2, 7, "ORGANIC"),
	new Item(23, 2, 7, "ORGANIC"),
	new Item(24, 3, 17, "GARBAGE"),
	new Item(25, 3, 17, "RECYCLE"),
	new Item(26, 3, 17, "ORGANIC"),
	new Item(27, 3, 17, "ORGANIC"),
	new Item(28, 3, 17, "ORGANIC"),
	new Item(29, 3, 18, "GARBAGE"),
	new Item(30, 3, 18, "RECYCLE"),
	new Item(31, 3, 18, "ORGANIC"),
	new Item(32, 4, 18, "GARBAGE"),
	new Item(33, 4, 18, "GARBAGE"),
	new Item(34, 4, 18, "RECYCLE"),
	new Item(35, 4, 18, "ORGANIC"),
	new Item(36, 4, 18, "ORGANIC"),
	new Item(37, 4, 24, "RECYCLE", [38]),
	new Item(38, 4, 24, "RECYCLE"),
	new Item(39, 4, 25, "GARBAGE"),
	new Item(40, 4, 25, "RECYCLE"),
	new Item(41, 5, 24, "GARBAGE"),
	new Item(42, 5, 24, "RECYCLE"),
	new Item(43, 5, 25, "GARBAGE"),
	new Item(44, 5, 25, "GARBAGE"),
	new Item(45, 5, 25, "ORGANIC"),
	new Item(46, 5, 25, "ORGANIC"),
	new Item(47, 7, 14, "GARBAGE"),
	new Item(48, 7, 14, "RECYCLE"),
	new Item(49, 7, 14, "ORGANIC"),
	new Item(50, 8, 7, "GARBAGE"),
	new Item(51, 8, 7, "RECYCLE"),
	new Item(52, 8, 7, "RECYCLE"),
	new Item(53, 8, 7, "ORGANIC"),
	new Item(54, 8, 7, "ORGANIC"),
	new Item(55, 8, 14, "GARBAGE"),
	new Item(56, 8, 14, "GARBAGE"),
	new Item(57, 8, 14, "RECYCLE"),
	new Item(58, 8, 14, "ORGANIC"),
	new Item(59, 9, 8, "GARBAGE"),
	new Item(60, 9, 8, "RECYCLE"),
	new Item(61, 9, 8, "RECYCLE", [62]),
	new Item(62, 9, 8, "ORGANIC"),
	new Item(63, 9, 8, "ORGANIC"),
	new Item(64, 10, 9, "GARBAGE"),
	new Item(65, 10, 9, "RECYCLE"),
	new Item(66, 10, 9, "RECYCLE"),
	new Item(67, 10, 9, "ORGANIC"),
	new Item(68, 10, 9, "ORGANIC"),
	new Item(69, 11, 10, "GARBAGE", [70]),
	new Item(70, 11, 10, "RECYCLE", [72]),
	new Item(71, 11, 10, "ORGANIC"),
	new Item(72, 11, 10, "ORGANIC"),
	new Item(73, 12, 20, "GARBAGE", [74, 75, 76, 77]),
	new Item(74, 12, 20, "GARBAGE"),
	new Item(75, 12, 20, "RECYCLE"),
	new Item(76, 12, 20, "RECYCLE"),
	new Item(77, 12, 20, "ORGANIC"),
	new Item(78, 12, 20, "ORGANIC"),
	new Item(79, 12, 21, "GARBAGE"),
	new Item(80, 12, 21, "ORGANIC"),
	new Item(81, 12, 21, "ORGANIC"),
	new Item(82, 13, 20, "RECYCLE"),
	new Item(83, 13, 21, "GARBAGE"),
	new Item(84, 14, 5, "GARBAGE"),
	new Item(85, 14, 5, "RECYCLE"),
	new Item(86, 14, 5, "ORGANIC"),
	new Item(87, 14, 6, "GARBAGE", [89]),
	new Item(88, 14, 6, "RECYCLE"),
	new Item(89, 14, 6, "ORGANIC"),
	new Item(90, 14, 6, "ORGANIC"),
	new Item(91, 14, 13, "GARBAGE", [92, 94]),
	new Item(92, 14, 13, "RECYCLE"),
	new Item(93, 14, 13, "ORGANIC"),
	new Item(94, 14, 13, "ORGANIC"),
	new Item(95, 14, 14, "GARBAGE"),
	new Item(96, 14, 14, "RECYCLE"),
	new Item(97, 14, 14, "ORGANIC"),
	new Item(98, 14, 14, "ORGANIC"),
	new Item(99, 18, 9, "GARBAGE"),
	new Item(100, 19, 8, "GARBAGE", [101]),
	new Item(101, 19, 8, "GARBAGE", [102]),
	new Item(102, 19, 8, "ORGANIC"),
	new Item(103, 19, 8, "ORGANIC"),
	new Item(104, 19, 9, "RECYCLE", [105]),
	new Item(105, 19, 9, "RECYCLE", [106]),
	new Item(106, 19, 9, "ORGANIC"),
	new Item(107, 19, 9, "ORGANIC"),
	new Item(108, 19, 10, "GARBAGE"),
	new Item(109, 19, 10, "ORGANIC"),
	new Item(110, 19, 10, "ORGANIC"),
	new Item(111, 20, 9, "GARBAGE", [112]),
	new Item(112, 20, 9, "GARBAGE", [113]),
	new Item(113, 20, 9, "GARBAGE"),
	new Item(114, 20, 9, "ORGANIC"),
	new Item(115, 20, 9, "ORGANIC"),
	new Item(116, 20, 10, "RECYCLE"),
	new Item(117, 20, 10, "RECYCLE"),
	new Item(118, 20, 11, "GARBAGE"),
	new Item(119, 20, 11, "RECYCLE"),
	new Item(120, 20, 11, "ORGANIC"),
	new Item(121, 20, 11, "ORGANIC"),
	new Item(122, 21, 10, "GARBAGE"),
	new Item(123, 21, 10, "ORGANIC"),
	new Item(124, 21, 10, "ORGANIC"),
	new Item(125, 22, 17, "GARBAGE"),
	new Item(126, 22, 17, "RECYCLE"),
	new Item(127, 22, 17, "ORGANIC"),
	new Item(128, 22, 17, "ORGANIC"),
	new Item(129, 22, 18, "GARBAGE"),
	new Item(130, 22, 18, "RECYCLE", [131]),
	new Item(131, 22, 18, "RECYCLE"),
	new Item(132, 22, 18, "ORGANIC"),
	new Item(133, 22, 18, "ORGANIC"),
	new Item(134, 22, 19, "RECYCLE"),
	new Item(135, 22, 19, "RECYCLE"),
	new Item(136, 23, 2, "GARBAGE"),
	new Item(137, 23, 2, "RECYCLE"),
	new Item(138, 23, 2, "RECYCLE"),
	new Item(139, 23, 3, "GARBAGE"),
	new Item(140, 23, 3, "RECYCLE"),
	new Item(141, 23, 3, "RECYCLE"),
	new Item(142, 23, 3, "ORGANIC"),
	new Item(143, 23, 4, "GARBAGE", [144]),
	new Item(144, 23, 4, "GARBAGE"),
	new Item(145, 23, 4, "GARBAGE", [146]),
	new Item(146, 23, 4, "GARBAGE"),
	new Item(147, 23, 4, "RECYCLE", [148]),
	new Item(148, 23, 4, "RECYCLE", [149]),
	new Item(149, 23, 4, "RECYCLE"),
	new Item(150, 23, 4, "ORGANIC"),
	new Item(151, 23, 4, "ORGANIC"),
	new Item(152, 23, 5, "GARBAGE"),
	new Item(153, 23, 5, "GARBAGE"),
	new Item(154, 23, 5, "RECYCLE", [155]),
	new Item(155, 23, 5, "RECYCLE", [156]),
	new Item(156, 23, 5, "RECYCLE"),
	new Item(157, 23, 17, "GARBAGE"),
	new Item(158, 23, 17, "RECYCLE"),
	new Item(159, 23, 17, "ORGANIC"),
	new Item(160, 23, 17, "ORGANIC"),
	new Item(161, 23, 18, "GARBAGE"),
	new Item(162, 23, 18, "RECYCLE"),
	new Item(163, 23, 18, "ORGANIC"),
	new Item(164, 23, 18, "ORGANIC"),
	new Item(165, 23, 19, "GARBAGE"),
	new Item(166, 23, 19, "RECYCLE"),
	new Item(167, 23, 19, "ORGANIC"),
	new Item(168, 23, 19, "ORGANIC"),
	new Item(169, 23, 25, "RECYCLE"),
	new Item(170, 24, 25, "GARBAGE"),
	new Item(171, 24, 25, "RECYCLE"),
	new Item(172, 24, 25, "ORGANIC"),
	new Item(173, 24, 25, "ORGANIC"),
	new Item(174, 24, 25, "ORGANIC"),
	new Item(175, 24, 26, "GARBAGE"),
	new Item(176, 24, 26, "RECYCLE"),
	new Item(177, 24, 26, "ORGANIC"),
	new Item(178, 25, 5, "GARBAGE"),
	new Item(179, 25, 5, "RECYCLE"),
	new Item(180, 25, 25, "GARBAGE"),
	new Item(181, 25, 25, "RECYCLE"),
	new Item(182, 25, 25, "ORGANIC"),
	new Item(183, 25, 26, "GARBAGE", [184]),
	new Item(184, 25, 26, "RECYCLE"),
	new Item(185, 25, 26, "ORGANIC"),
	new Item(186, 26, 5, "RECYCLE", [187]),
	new Item(187, 26, 5, "RECYCLE"),
	new Item(188, 27, 5, "GARBAGE", [189]),
	new Item(189, 27, 5, "GARBAGE", [190]),
	new Item(190, 27, 5, "GARBAGE")
];

exports.designItems = [
	new Item(0, 2, 2, "GARBAGE"),
	new Item(1, 2, 2, "RECYCLE"),
	new Item(2, 2, 2, "ORGANIC"),
	new Item(3, 3, 2, "GARBAGE", [5]),
	new Item(4, 3, 2, "RECYCLE"),
	new Item(5, 3, 2, "ORGANIC"),
	new Item(6, 3, 2, "ORGANIC"),

	new Item(7, 13, 4, "GARBAGE", [10]),
	new Item(8, 13, 4, "RECYCLE"),
	new Item(9, 13, 4, "ORGANIC"),
	new Item(10, 13, 4, "ORGANIC"),
	new Item(11, 14, 4, "GARBAGE"),
	new Item(12, 14, 4, "RECYCLE"),
	new Item(13, 14, 4, "ORGANIC"),
	new Item(14, 14, 4, "ORGANIC"),

	new Item(15, 9, 8, "GARBAGE"),
	new Item(16, 8, 9, "GARBAGE", [17]),
	new Item(17, 8, 9, "GARBAGE", [18]),
	new Item(18, 8, 9, "ORGANIC"),
	new Item(19, 8, 9, "ORGANIC"),
	new Item(20, 9, 9, "RECYCLE", [21]),
	new Item(21, 9, 9, "RECYCLE", [22]),
	new Item(22, 9, 9, "ORGANIC"),
	new Item(23, 9, 9, "ORGANIC"),
	new Item(24, 10, 9, "GARBAGE"),
	new Item(25, 10, 9, "ORGANIC"),
	new Item(26, 10, 9, "ORGANIC"),
	new Item(27, 9, 10, "GARBAGE", [28]),
	new Item(28, 9, 10, "GARBAGE", [29]),
	new Item(29, 9, 10, "GARBAGE"),
	new Item(30, 9, 10, "ORGANIC"),
	new Item(31, 9, 10, "ORGANIC"),
	new Item(32, 10, 10, "RECYCLE"),
	new Item(33, 10, 10, "RECYCLE"),
	new Item(34, 11, 10, "GARBAGE"),
	new Item(35, 11, 10, "RECYCLE"),
	new Item(36, 11, 10, "ORGANIC"),
	new Item(37, 11, 10, "ORGANIC"),
	new Item(38, 10, 11, "GARBAGE"),
	new Item(39, 10, 11, "ORGANIC"),
	new Item(40, 10, 11, "ORGANIC"),

	new Item(41, 16, 12, "GARBAGE"),
	new Item(42, 16, 12, "RECYCLE"),
	new Item(43, 16, 12, "ORGANIC"),
	new Item(44, 16, 12, "ORGANIC"),
	new Item(45, 17, 12, "GARBAGE"),
	new Item(46, 17, 12, "RECYCLE", [47]),
	new Item(47, 17, 12, "RECYCLE"),
	new Item(48, 17, 12, "ORGANIC"),
	new Item(49, 17, 12, "ORGANIC"),
	new Item(50, 18, 12, "RECYCLE"),
	new Item(51, 18, 12, "RECYCLE"),
	new Item(52, 16, 13, "GARBAGE"),
	new Item(53, 16, 13, "RECYCLE"),
	new Item(54, 16, 13, "ORGANIC"),
	new Item(55, 16, 13, "ORGANIC"),
	new Item(56, 17, 13, "GARBAGE"),
	new Item(57, 17, 13, "RECYCLE"),
	new Item(58, 17, 13, "ORGANIC"),
	new Item(59, 17, 13, "ORGANIC"),
	new Item(60, 18, 13, "GARBAGE"),
	new Item(61, 18, 13, "RECYCLE"),
	new Item(62, 18, 13, "ORGANIC"),
	new Item(63, 18, 13, "ORGANIC"),

	new Item(64, 2, 13, "GARBAGE"),
	new Item(65, 2, 13, "RECYCLE"),
	new Item(66, 2, 13, "RECYCLE"),
	new Item(67, 3, 13, "GARBAGE"),
	new Item(68, 3, 13, "RECYCLE"),
	new Item(69, 3, 13, "RECYCLE"),
	new Item(70, 3, 13, "ORGANIC"),
	new Item(71, 4, 13, "GARBAGE", [72]),
	new Item(72, 4, 13, "GARBAGE"),
	new Item(73, 4, 13, "GARBAGE", [74]),
	new Item(74, 4, 13, "GARBAGE"),
	new Item(75, 4, 13, "RECYCLE", [76]),
	new Item(76, 4, 13, "RECYCLE", [77]),
	new Item(77, 4, 13, "RECYCLE"),
	new Item(78, 4, 13, "ORGANIC"),
	new Item(79, 4, 13, "ORGANIC"),
	new Item(80, 5, 13, "GARBAGE"),
	new Item(81, 5, 13, "GARBAGE"),
	new Item(82, 5, 13, "RECYCLE", [153]),
	new Item(83, 5, 13, "RECYCLE", [154]),
	new Item(84, 5, 13, "RECYCLE"),
	new Item(85, 5, 15, "GARBAGE"),
	new Item(86, 5, 15, "RECYCLE"),
	new Item(87, 5, 16, "RECYCLE", [88]),
	new Item(88, 5, 16, "RECYCLE"),
	new Item(89, 5, 17, "GARBAGE", [90]),
	new Item(90, 5, 17, "GARBAGE", [91]),
	new Item(91, 5, 17, "GARBAGE"),

	new Item(92, 16, 17, "GARBAGE", [93, 94, 95, 96]),
	new Item(93, 16, 17, "GARBAGE"),
	new Item(94, 16, 17, "RECYCLE"),
	new Item(95, 16, 17, "RECYCLE"),
	new Item(96, 16, 17, "ORGANIC"),
	new Item(97, 16, 17, "ORGANIC"),
	new Item(98, 17, 17, "GARBAGE"),
	new Item(99, 17, 17, "ORGANIC"),
	new Item(100, 17, 17, "ORGANIC"),
	new Item(101, 16, 18, "RECYCLE"),
	new Item(102, 17, 18, "GARBAGE"),

	new Item(103, 4, 6, "GARBAGE"),
	new Item(104, 4, 6, "RECYCLE"),
	new Item(105, 4, 6, "RECYCLE"),
	new Item(106, 4, 6, "ORGANIC"),
	new Item(107, 4, 6, "ORGANIC"),
	new Item(108, 5, 5, "GARBAGE"),
	new Item(109, 5, 5, "RECYCLE"),
	new Item(110, 5, 5, "RECYCLE", [111]),
	new Item(111, 5, 5, "ORGANIC"),
	new Item(112, 5, 5, "ORGANIC"),
	new Item(113, 6, 4, "GARBAGE"),
	new Item(114, 6, 4, "RECYCLE"),
	new Item(115, 6, 4, "RECYCLE"),
	new Item(116, 6, 4, "ORGANIC"),
	new Item(117, 6, 4, "ORGANIC"),
	new Item(118, 7, 3, "GARBAGE", [119]),
	new Item(119, 7, 3, "RECYCLE", [121]),
	new Item(120, 7, 3, "ORGANIC"),
	new Item(121, 7, 3, "ORGANIC")
];