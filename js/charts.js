// ---------------------------------- 右上圖表  ---------------------------------- 
am4core.useTheme(am4themes_animated);
var chart = am4core.create("chart-total-nodes", am4charts.XYChart);

// chart 使用的data
chart.data = total_nodes_chart_data;
// 把最後一筆的資料塞進去
var in_text=document.getElementById("total_node_text").innerHTML=(total_nodes_chart_data[total_nodes_chart_data.length-1])["value"];


// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 60;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.LineSeries());
// series.hiddenState.transitionDuration = 5000;
series.hiddenState.transitionDuration = 5000;
series.sequencedInterpolation = true;
series.tooltip.animationDuration = 500;

// 預設開所有bullet，但因為很小看不太到，當cursor指到時變大
var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.radius = 0.5;
var bullethover = bullet.states.create("hover");
bullethover.properties.scale = 10;

// Create cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.bulletsEnabled = true;
chart.cursor.bulletSize = 10;
chart.cursor.events.on("cursorpositionchanged", function(ev) {
  var get_text=document.getElementById("tooltip_text").innerHTML;
  var in_text=document.getElementById("total_node_text").innerHTML=get_text;

});


// series.slices.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
// line color
series.stroke=am4core.color("#90cfbe");
// line width
series.strokeWidth = 1.5;
series.dataFields.valueY = "value";
series.dataFields.dateX = "date";
series.tooltipHTML = `
<span class="amchart-tooltip-text" id="tooltip_text">{value}</span>
<br><span class="amchart-tooltip-subtext">{date}</span>`;
// series.tooltipHTML = `{value}<br>{date}`;

// tootip設定
// 字體設定在chart.css中
series.tooltip.pointerOrientation = "vertical";
series.tooltip.getFillFromObject = false
series.tooltip.background.strokeWidth = 0;
series.tooltip.background.fill = am4core.color("#1d202b");

// Axis tootip設定
var value_axisTooltip = valueAxis.tooltip;
var date_axisTooltip = dateAxis.tooltip;
value_axisTooltip.background.fill = am4core.color("#1d202b");
date_axisTooltip.background.fill = am4core.color("#1d202b");
value_axisTooltip.background.strokeWidth = 0;
date_axisTooltip.background.strokeWidth = 0;

valueAxis.renderer.labels.template.fill = am4core.color("gray");
valueAxis.renderer.labels.template.fontSize = 12;
valueAxis.renderer.labels.template.fontFamily = "Montserrat";
dateAxis.renderer.labels.template.fill = am4core.color("#ffffff");
dateAxis.renderer.labels.template.fontSize = 12;
dateAxis.renderer.labels.template.fontFamily = "Montserrat";

dateAxis.renderer.grid.template.strokeWidth = 0;
valueAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
valueAxis.renderer.grid.template.strokeDasharray ="dotted";
valueAxis.renderer.grid.template.strokeOpacity = 0.1;

// dateAxis.renderer.line.stroke-dasharray
// 圖表的zoom
//chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.bottomAxesContainer;
chart.scrollbarX.background.fill = am4core.color("#222633");
chart.scrollbarX.thumb.background.fill = am4core.color("#222633");
chart.scrollbarX.startGrip.background.fill = am4core.color("#222633");
chart.scrollbarX.endGrip.background.fill = am4core.color("#222633");
chart.scrollbarX.stroke = am4core.color("#ffffff");
// chart.scrollbarX.endGrip.stroke = am4core.color("#017acd");
// chart.scrollbarX.strokeWidth = 0;

// ---------------------------------- 右中圖表左  ---------------------------------- 
let chart1 = new frappe.Chart( "#chart-last-time", { // or DOM element
    data: {
      labels: last_time_chart_data_x,

      datasets: [
        // {
        //   name: "Some Data", chartType: 'bar',
        //   values: [25, 40, 30, 35, 8, 52, 17, -4]
        // },
        {
          name: "", chartType: 'line',
          values: last_time_chart_data_y
        }
      ]
    },
    axisOptions: {
        // 省略過多的 X座標Label
        xIsSeries: 1,
        xAxisMode: 'tick' // default: 'span'
    },
    // title: "Set Chart title here",
    height: 170,
    type: 'line', // 'axis-mixed' or 'bar', 'line', 'pie', 'percentage'
    colors: ['#90cfbe', '#ffa3ef', 'light-blue'],
    lineOptions: {
        // hide data dots
        hideDots: 1 // default: 0
    },
    tooltipOptions: {
      formatTooltipX: d => (d + '').toUpperCase(),
      formatTooltipY: d => d + '<span class=\"ago\"> 單位（未設） </span>',
    }
});

// ---------------------------------- 右中圖表右  ---------------------------------- 
let chart2 = new frappe.Chart( "#chart-avg-time", { // or DOM element
    data: {
      labels: avg_time_chart_data_x,

      datasets: [
        // {
        //   name: "Some Data", chartType: 'bar',
        //   values: [25, 40, 30, 35, 8, 52, 17, -4]
        // },
        {
          name: "", chartType: 'line',
          values: avg_time_chart_data_y
        }
      ]
    },
    axisOptions: {
        // 省略過多的 X座標Label
        xAxisMode: 'tick' // default: 'span'
    },
    // title: "Set Chart title here",
    height: 170,
    type: 'line', // 'axis-mixed' or 'bar', 'line', 'pie', 'percentage'
    colors: ['#90cfbe', '#ffa3ef', 'light-blue'],
    lineOptions: {
        xIsSeries: true,
        // hide data dots
        hideDots: 1 // default: 0
    },
    tooltipOptions: {
      formatTooltipX: d => (d + '').toUpperCase(),
      formatTooltipY: d => d + ' pts',
    }
});

// ---------------------------------- 左下圖表左  ---------------------------------- 
let chart3 = new frappe.Chart( "#chart-storage", { // or DOM element
    data: {
      labels: storage_chart_data_x,

      datasets: [
        // {
        //   name: "Some Data", chartType: 'bar',
        //   values: [25, 40, 30, 35, 8, 52, 17, -4]
        // },
        {
            name: "", chartType: 'bar',
            values: storage_chart_data_y_1
        },
        {
            name: "", chartType: 'bar',
            values: storage_chart_data_y_2
        }
      ]
    },
    barOptions: {
        stacked: 1    // default 0, i.e. adjacent
    },
    axisOptions: {
        xAxisMode: 'tick' // default: 'span'
    },
    // title: "Set Chart title here",
    isNavigable: true,
    height: 200,
    type: 'bar', // 'axis-mixed' or 'bar', 'line', 'pie', 'percentage'
    colors: ['#90cfbe', '#ffa3ef', 'light-blue'],
    lineOptions: {
        // hide data dots
        hideDots: 1 // default: 0
    },
    tooltipOptions: {
      formatTooltipX: d => (d + '').toUpperCase(),
      formatTooltipY: d => d + '<span class=\"ago\"> /1,000 TB </span>',
    }

});

// ---------------------------------- 左下圖表右  ---------------------------------- 
let chart4 = new frappe.Chart( "#chart-bandwidth", { // or DOM element
    data: {
      labels: bandwidth_chart_data_x,

      datasets: [
        // {
        //   name: "Some Data", chartType: 'bar',
        //   values: [25, 40, 30, 35, 8, 52, 17, -4]
        // },
        {
            name: "", chartType: 'bar',
            values: bandwidth_chart_data_y_1
        },
        {
            name: "", chartType: 'bar',
            values: bandwidth_chart_data_y_2
        }
      ]
    },
    barOptions: {
        stacked: 1    // default 0, i.e. adjacent
    },
    axisOptions: {
        xAxisMode: 'tick' // default: 'span'
    },
    // title: "Set Chart title here",
    height: 200,
    type: 'bar', // 'axis-mixed' or 'bar', 'line', 'pie', 'percentage'
    colors: ['#90cfbe', '#ffa3ef', 'light-blue'],
    lineOptions: {
        // hide data dots
        hideDots: 1 // default: 0
    },
    tooltipOptions: {
      formatTooltipX: d => (d + '').toUpperCase(),
      formatTooltipY: d => d + '<span class=\"ago\"> /1,000 MBps </span>',
    }
});

// ---------------------------------- 右下圖表  ---------------------------------- 
let chart5 = new frappe.Chart( "#chart-computing", { // or DOM element
    data: {
      labels: computing_chart_data_x,

      datasets: [
        {
            name: "", chartType: 'line',
            values: computing_chart_data_y_1
        },
        {
            name: "", chartType: 'line',
            values: computing_chart_data_y_2

        }
      ]
    },
    axisOptions: {
        xAxisMode: 'tick' // default: 'span'
    },
    // title: "Set Chart title here",
    height: 200,
    type: 'line', // 'axis-mixed' or 'bar', 'line', 'pie', 'percentage'
    colors: ['#90cfbe', '#ffa3ef', 'light-blue'],
    lineOptions: {
        regionFill: 1,
        // hide data dots
        hideDots: 1 // default: 0
    },
    tooltipOptions: {
      formatTooltipX: d => (d + '').toUpperCase(),
      formatTooltipY: d => d + '<span class=\"ago\"> H/s </span>',
    }
});
