// ----------------------------- chart data ----------------------------- 
var total_nodes_chart_data=[];
// 右上圖表 x座標（時間）
var total_nodes_chart_date=["Sat Aug 31 2019 00:00:00 GMT+0800 (CST)",
							"Sun Sep 01 2019 00:00:00 GMT+0800 (CST)",
							"Mon Sep 02 2019 00:00:00 GMT+0800 (CST)",
							"Tue Sep 03 2019 00:00:00 GMT+0800 (CST)",
							"Wed Sep 04 2019 00:00:00 GMT+0800 (CST)",
							"Thu Sep 05 2019 00:00:00 GMT+0800 (CST)",
							"Fri Sep 06 2019 00:00:00 GMT+0800 (CST)",
							"Sat Sep 07 2019 00:00:00 GMT+0800 (CST)",
							"Sun Sep 08 2019 00:00:00 GMT+0800 (CST)",
							"Mon Sep 09 2019 00:00:00 GMT+0800 (CST)",
							"Tue Sep 10 2019 00:00:00 GMT+0800 (CST)",
							"Wed Sep 11 2019 00:00:00 GMT+0800 (CST)",
							"Thu Sep 12 2019 00:00:00 GMT+0800 (CST)",
							"Fri Sep 13 2019 00:00:00 GMT+0800 (CST)",
							"Sat Sep 14 2019 00:00:00 GMT+0800 (CST)",
							"Sun Sep 15 2019 00:00:00 GMT+0800 (CST)",
							"Mon Sep 16 2019 00:00:00 GMT+0800 (CST)",
							"Tue Sep 17 2019 00:00:00 GMT+0800 (CST)",
							"Wed Sep 18 2019 00:00:00 GMT+0800 (CST)",
							"Thu Sep 19 2019 00:00:00 GMT+0800 (CST)",
							"Fri Sep 20 2019 00:00:00 GMT+0800 (CST)",
							"Sat Sep 21 2019 00:00:00 GMT+0800 (CST)",
							"Sun Sep 22 2019 00:00:00 GMT+0800 (CST)",
							"Mon Sep 23 2019 00:00:00 GMT+0800 (CST)",
							"Tue Sep 24 2019 00:00:00 GMT+0800 (CST)",
							"Wed Sep 25 2019 00:00:00 GMT+0800 (CST)",
							"Thu Sep 26 2019 00:00:00 GMT+0800 (CST)",
							"Fri Sep 27 2019 00:00:00 GMT+0800 (CST)",
							"Sat Sep 28 2019 00:00:00 GMT+0800 (CST)",
							"Sun Sep 29 2019 00:00:00 GMT+0800 (CST)",
							"Mon Sep 30 2019 00:00:00 GMT+0800 (CST)",
							"Tue Oct 01 2019 00:00:00 GMT+0800 (CST)",
							"Wed Oct 02 2019 00:00:00 GMT+0800 (CST)",
							"Thu Oct 03 2019 00:00:00 GMT+0800 (CST)",
							"Fri Oct 04 2019 00:00:00 GMT+0800 (CST)",
							"Sat Oct 05 2019 00:00:00 GMT+0800 (CST)",
							"Sun Oct 06 2019 00:00:00 GMT+0800 (CST)",
							"Mon Oct 07 2019 00:00:00 GMT+0800 (CST)",
							"Tue Oct 08 2019 00:00:00 GMT+0800 (CST)",
							"Wed Oct 09 2019 00:00:00 GMT+0800 (CST)",
							"Thu Oct 10 2019 00:00:00 GMT+0800 (CST)",
							"Fri Oct 11 2019 00:00:00 GMT+0800 (CST)",
							"Sat Oct 12 2019 00:00:00 GMT+0800 (CST)",
							"Sun Oct 13 2019 00:00:00 GMT+0800 (CST)",
							"Mon Oct 14 2019 00:00:00 GMT+0800 (CST)",
							"Tue Oct 15 2019 00:00:00 GMT+0800 (CST)",
							"Wed Oct 16 2019 00:00:00 GMT+0800 (CST)",
							"Thu Oct 17 2019 00:00:00 GMT+0800 (CST)",
							"Fri Oct 18 2019 00:00:00 GMT+0800 (CST)",
							"Sat Oct 19 2019 00:00:00 GMT+0800 (CST)",
							"Sun Oct 20 2019 00:00:00 GMT+0800 (CST)",
							"Mon Oct 21 2019 00:00:00 GMT+0800 (CST)",
							"Tue Oct 22 2019 00:00:00 GMT+0800 (CST)",
							"Wed Oct 23 2019 00:00:00 GMT+0800 (CST)",
							"Thu Oct 24 2019 00:00:00 GMT+0800 (CST)",
							"Fri Oct 25 2019 00:00:00 GMT+0800 (CST)",
							"Sat Oct 26 2019 00:00:00 GMT+0800 (CST)",
							"Sun Oct 27 2019 00:00:00 GMT+0800 (CST)",
							"Mon Oct 28 2019 00:00:00 GMT+0800 (CST)",
							"Tue Oct 29 2019 00:00:00 GMT+0800 (CST)",
							"Wed Oct 30 2019 00:00:00 GMT+0800 (CST)",
							"Thu Oct 31 2019 00:00:00 GMT+0800 (CST)",
							"Fri Nov 01 2019 00:00:00 GMT+0800 (CST)",
							"Sat Nov 02 2019 00:00:00 GMT+0800 (CST)",
							"Sun Nov 03 2019 00:00:00 GMT+0800 (CST)",
							"Mon Nov 04 2019 00:00:00 GMT+0800 (CST)",
							"Tue Nov 05 2019 00:00:00 GMT+0800 (CST)",
							"Wed Nov 06 2019 00:00:00 GMT+0800 (CST)",
							"Thu Nov 07 2019 00:00:00 GMT+0800 (CST)",
							"Fri Nov 08 2019 00:00:00 GMT+0800 (CST)",
							"Sat Nov 09 2019 00:00:00 GMT+0800 (CST)",
							"Sun Nov 10 2019 00:00:00 GMT+0800 (CST)",
							"Mon Nov 11 2019 00:00:00 GMT+0800 (CST)",
							"Tue Nov 12 2019 00:00:00 GMT+0800 (CST)",
							"Wed Nov 13 2019 00:00:00 GMT+0800 (CST)",
							"Thu Nov 14 2019 00:00:00 GMT+0800 (CST)",
							"Fri Nov 15 2019 00:00:00 GMT+0800 (CST)",
							"Sat Nov 16 2019 00:00:00 GMT+0800 (CST)",
							"Sun Nov 17 2019 00:00:00 GMT+0800 (CST)",
							"Mon Nov 18 2019 00:00:00 GMT+0800 (CST)",
							"Tue Nov 19 2019 00:00:00 GMT+0800 (CST)",
							"Wed Nov 20 2019 00:00:00 GMT+0800 (CST)",
							"Thu Nov 21 2019 00:00:00 GMT+0800 (CST)",
							"Fri Nov 22 2019 00:00:00 GMT+0800 (CST)",
							"Sat Nov 23 2019 00:00:00 GMT+0800 (CST)",
							"Sun Nov 24 2019 00:00:00 GMT+0800 (CST)",
							"Mon Nov 25 2019 00:00:00 GMT+0800 (CST)",
							"Tue Nov 26 2019 00:00:00 GMT+0800 (CST)",
							"Wed Nov 27 2019 00:00:00 GMT+0800 (CST)",
							"Thu Nov 28 2019 00:00:00 GMT+0800 (CST)",
							"Fri Nov 29 2019 00:00:00 GMT+0800 (CST)",
							"Sat Nov 30 2019 00:00:00 GMT+0800 (CST)",
							"Sun Dec 01 2019 00:00:00 GMT+0800 (CST)",
							"Mon Dec 02 2019 00:00:00 GMT+0800 (CST)",
							"Tue Dec 03 2019 00:00:00 GMT+0800 (CST)",
							"Wed Dec 04 2019 00:00:00 GMT+0800 (CST)",
							"Thu Dec 05 2019 00:00:00 GMT+0800 (CST)",
							"Fri Dec 06 2019 00:00:00 GMT+0800 (CST)",
							"Sat Dec 07 2019 00:00:00 GMT+0800 (CST)",
							"Sun Dec 08 2019 00:00:00 GMT+0800 (CST)"];
// 右上圖表 y座標（值）
var total_nodes_chart_value=[9045,
							8970,
							8975,
							8976,
							9057,
							9115,
							9208,
							9138,
							9069,
							8970,
							8885,
							8811,
							8723,
							8674,
							8607,
							8702,
							8735,
							8818,
							8804,
							8740,
							8776,
							8869,
							8950,
							8907,
							8894,
							8929,
							8966,
							8909,
							9001,
							9053,
							9041,
							9117,
							9170,
							9072,
							9050,
							8951,
							8896,
							8953,
							8941,
							8934,
							8900,
							8872,
							8821,
							8832,
							8897,
							8800,
							8833,
							8776,
							8838,
							8870,
							8892,
							8900,
							8838,
							8803,
							8735,
							8668,
							8612,
							8564,
							8584,
							8533,
							8563,
							8614,
							8518,
							8505,
							8466,
							8413,
							8440,
							8487,
							8585,
							8559,
							8498,
							8539,
							8587,
							8665,
							8608,
							8545,
							8617,
							8666,
							8635,
							8683,
							8695,
							8794,
							8837,
							8745,
							8709,
							8734,
							8814,
							8847,
							8904,
							8883,
							8932,
							8911,
							8859,
							8942,
							8855,
							8942,
							9018,
							9032,
							9045,
							9037];

for (var i = 0 ; i < total_nodes_chart_date.length; i++) {
	total_nodes_chart_data.push({date:Date.parse(total_nodes_chart_date[i]), value: total_nodes_chart_value[i]});
}

//last_time 圖表的資料 
last_time_chart_data_x=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
last_time_chart_data_y=[189, 211, 182, 213, 216, 200, 214, 181, 194, 183, 194, 207, 188, 205, 215, 191, 200, 181, 186, 207, 190, 187, 202, 217, 199, 181, 181, 194, 211, 212];

//avg_time 圖表的資料 
avg_time_chart_data_x=["21", "22", "23", "24", "25", "26", "6pm-9pm", "9pm-12am"];
avg_time_chart_data_y=[15, 20, -3, -15, 58, 12, -17, 37];

//storage 圖表的資料 
storage_chart_data_y_1=[10, 110, 125, 198, 26, 182, 105, 18, 75, 69, 152, 57, 183, 124, 143, 144, 170, 131, 79, 199, 94, 26, 126, 151, 198, 144, 165, 9, 24, 80];
storage_chart_data_y_2=[22, 111, 140, 200, 32, 198, 108, 25, 76, 86, 163, 62, 190, 131, 150, 155, 183, 141, 85, 204, 97, 46, 135, 154, 206, 156, 179, 16, 41, 96];
// 這裏x座標反正不顯示，值不重要，但陣列長度需等於value的長度，才不會error
storage_chart_data_x=[];
for (var i = storage_chart_data_y_1.length - 1; i >= 0; i--)
	storage_chart_data_x.push("");

//bandwidth 圖表的資料 
bandwidth_chart_data_y_1=[60, 115, 49, 161, 67, 94, 13, 43, 128, 144, 97, 197, 12, 83, 148, 60, 197, 111, 137, 80, 14, 105, 28, 59, 93, 73, 139, 164, 152, 146];
bandwidth_chart_data_y_2=[72, 133, 55, 165, 85, 102, 27, 45, 131, 155, 113, 214, 15, 97, 160, 66, 198, 126, 155, 93, 20, 111, 35, 73, 99, 74, 155, 176, 172, 161];
// 這裏x座標反正不顯示，值不重要，但陣列長度需等於value的長度，才不會error
bandwidth_chart_data_x=[];
for (var i = bandwidth_chart_data_y_1.length - 1; i >= 0; i--)
	bandwidth_chart_data_x.push("");

//computing 圖表的資料 
computing_chart_data_y_1=[2376, 1605, 2193, 2217, 2263, 2072, 3087, 2793, 2442, 2396, 2472, 1834, 2553, 2030, 2475];
computing_chart_data_y_2=[1770, 1069, 1341, 1218, 1655, 1524, 1987, 1863, 1332, 1490, 1951, 1120, 1421, 1011, 1711];
// 這裏x座標反正不顯示，值不重要，但陣列長度需等於value的長度，才不會error
computing_chart_data_x=[];
for (var i = computing_chart_data_y_1.length - 1; i >= 0; i--)
	computing_chart_data_x.push("");


// ----------------------------- IP list ----------------------------- 
// 對到 ip-時間-顏色
var req_list=[['211.200.192.197', '8 sec', "green"], ['213.186.251.201', '9 sec' ,"green"], ['233.154.152.178', '26 sec',"yellow"], ['130.153.224.224', '33 sec' ,"red"], ['166.162.230.239', '22 min',"green"], ['169.226.179.166', '24 min',"red"], ['226.198.211.236', '33 min',"yellow"], ['203.139.181.251', '43 min',"green"], ['238.244.158.198', '0 hour',"green"], ['137.131.212.238', '2 hour',"red"], ['174.202.178.255', '8 hour',"yellow"], ['141.184.131.169', '8 hour',"green"]];

// ----------------------------- node list ----------------------------- 
// 很直觀的key_name,就對過去
var node_list=[	{"edge_name":"53420-8336 Tokyo", "node_type":"QEdge - 1.0 / ARM-x86", "is_mining":"357 tb", "last_time":"2 sec", "cpu":"ARMv8.2-A", "ram":"2", "up_time":"100%" },
				{"edge_name":"53420-8336 Tokyo", "node_type":"QEdge - 1.0 / ARM-x86", "is_mining":"357 tb", "last_time":"2 sec", "cpu":"ARMv8.2-A", "ram":"2", "up_time":"100%" },
				{"edge_name":"53420-8336 Tokyo", "node_type":"QEdge - 1.0 / ARM-x86", "is_mining":"357 tb", "last_time":"2 sec", "cpu":"ARMv8.2-A", "ram":"2", "up_time":"100%" },
				{"edge_name":"53420-8336 Tokyo", "node_type":"QEdge - 1.0 / ARM-x86", "is_mining":"357 tb", "last_time":"2 sec", "cpu":"ARMv8.2-A", "ram":"2", "up_time":"100%" },
				{"edge_name":"53420-8336 Tokyo", "node_type":"QEdge - 1.0 / ARM-x86", "is_mining":"357 tb", "last_time":"2 sec", "cpu":"ARMv8.2-A", "ram":"2", "up_time":"100%" },
				{"edge_name":"53420-8336 Tokyo", "node_type":"QEdge - 1.0 / ARM-x86", "is_mining":"357 tb", "last_time":"2 sec", "cpu":"ARMv8.2-A", "ram":"2", "up_time":"100%" }
];

//google map 的標點
// 要放點的位置
var dot_pos = {
	// 地點名稱, 座標
    chicago: {
      center: {lat: 41.878, lng: -87.629}
    },
    taipei: {
      center: {lat: 25.033493, lng: 121.564101},
    },
    kyoto: {
      center: {lat: 35.014085, lng: 135.747762}
    },
    sydney: {
      center: {lat: -33.856767, lng: 151.215209},
    },
    london: {
      center: {lat: 51, lng: 0},
    },
    fic1: {
      center: {lat: 3, lng: 10},
    },
    fic2: {
      center: {lat: -20, lng: 48},
    },
    fic3: {
      center: {lat: 57, lng: 30},
    },
    fic4: {
      center: {lat: 45, lng: 122},
    }
};	













