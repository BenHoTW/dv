const width_threshold = 480;

function drawLineChart() {
 if ($("#lineChart").length) {
// if ($("#"+el).length) {
    ctxLine = document.getElementById("lineChart").getContext("2d");
    optionsLine = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "交易筆數"
            }
          }
        ]
      }
    };

    // Set aspect ratio based on window width
    optionsLine.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    configLine = {
      type: "line",
      data: {
        labels: chart_data.shooping_hour_data.labels,
        // labels: [
        //   "January",
        //   "February",
        //   "March",
        //   "April",
        //   "May",
        //   "June",
        //   "July"
        // ],
        datasets: [
          {
            label: chart_data.shooping_hour_data.A.label, //"Latest Hits",
            data: chart_data.shooping_hour_data.A.data,//[88, 68, 79, 57, 50, 55, 70],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            cubicInterpolationMode: "monotone",
            pointRadius: 0
          },
          {
            // label: "Popular Hits",
            // data: [33, 45, 37, 21, 55, 74, 69],
            label: chart_data.shooping_hour_data.B.label, //"Latest Hits",
            data: chart_data.shooping_hour_data.B.data,//[88, 68, 79, 57, 50, 55, 70],
            fill: false,
            borderColor: "rgba(255,99,132,1)",
            cubicInterpolationMode: "monotone",
            pointRadius: 0
          },
          {
            // label: "Featured",
            // data: [44, 19, 38, 46, 85, 66, 79],
            label: chart_data.shooping_hour_data.C.label, //"Latest Hits",
            data: chart_data.shooping_hour_data.C.data,//[88, 68, 79, 57, 50, 55, 70],
            fill: false,
            borderColor: "rgba(153, 102, 255, 1)",
            cubicInterpolationMode: "monotone",
            pointRadius: 0
          }
        ]
      },
      options: optionsLine
    };
//    lineChart = new Chart(document.getElementById(el).getContext("2d"), configLine);
    lineChart = new Chart(ctxLine, configLine);
  }
}

function drawBarChart() {
 if ($("#barChart").length) {
// if ($("#"+el).length) {
    ctxBar = document.getElementById("barChart").getContext("2d");

    optionsBar = {
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 0.2,
            ticks: {
              beginAtZero: true
            },
            // scaleLabel: {
            //   display: true,
            //   labelString: "Hits"
            // }
          }
        ],
        xAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Quantity"
            }
          }
        ]
      }
    };

    optionsBar.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    /**
     * COLOR CODES
     * Red: #F7604D
     * Aqua: #4ED6B8
     * Green: #A8D582
     * Yellow: #D7D768
     * Purple: #9D66CC
     * Orange: #DB9C3F
     * Blue: #3889FC
     */

    configBar = {
      type: "horizontalBar",
      data: {
        labels: chart_data.product_line_by_quantity.labels, //["Red", "Aqua", "Green", "Yellow", "Purple", "Orange", "Blue"],
        datasets: [
          {
            label: chart_data.product_line_by_quantity.label, // "# of Hits",
            data: chart_data.product_line_by_quantity.data,//[33, 40, 28, 49, 58, 38, 44],
            backgroundColor: [
              "#F7604D",
              "#4ED6B8",
              "#A8D582",
              "#D7D768",
              "#9D66CC",
              "#DB9C3F",
              "#3889FC"
            ],
            borderWidth: 0
          }
        ]
      },
      options: optionsBar
    };

    barChart = new Chart(ctxBar, configBar);
  }
}

function drawBarChart_v() {
 if ($("#barChart_v").length) {
// if ($("#"+el).length) {
    ctxBar_v = document.getElementById("barChart_v").getContext("2d");

    optionsBar_v = {
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 0.2,
            ticks: {
              beginAtZero: true
            },
            // scaleLabel: {
            //   display: true,
            //   labelString: "Hits"
            // }
          }
        ],
        xAxes: [
          {
            ticks: {
              beginAtZero: true
            },
//            scaleLabel: {
//              display: true
//              labelString: "Quantity"
//            }
          }
        ]
      }
    };

    optionsBar_v.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    /**
     * COLOR CODES
     * Red: #F7604D
     * Aqua: #4ED6B8
     * Green: #A8D582
     * Yellow: #D7D768
     * Purple: #9D66CC
     * Orange: #DB9C3F
     * Blue: #3889FC
     */

    configBar_v = {
      type: "bar",
      data: {
        labels: chart_data.total_sales_per_branch.labels, //["Red", "Aqua", "Green", "Yellow", "Purple", "Orange", "Blue"],
        datasets: [
          {
            label: chart_data.total_sales_per_branch.label, //"# of Hits",
            data: chart_data.total_sales_per_branch.data, //[33, 40, 28, 49, 58, 38, 44],
            backgroundColor: [
              "#F7604D",
              "#4ED6B8",
              "#A8D582",
              "#D7D768",
              "#9D66CC",
              "#DB9C3F",
              "#3889FC"
            ],
            borderWidth: 0
          }
        ]
      },
      options: optionsBar_v
    };

    barChart_v = new Chart(ctxBar_v, configBar_v);
  }
}

function drawBarChart_vp() {
  if ($("#barChart_vp").length) {
 // if ($("#"+el).length) {
     ctxBar_vp = document.getElementById("barChart_vp").getContext("2d");
 
     optionsBar_vp = {
       responsive: true,
       maintainAspectRatio: false,
        scales: {
           yAxes: [
             {
               barPercentage: 0.1,
              //  categoryPercentage:0.1,
                ticks: {
                  beginAtZero: false
                },
               // scaleLabel: {
               //   display: true,
               //   labelString: "Hits"
               // }
             }
          ],
         xAxes: [
           {
             ticks: {
               beginAtZero: false
             },
 //            scaleLabel: {
 //              display: true
 //              labelString: "Quantity"
 //            }
           }
         ]
       }
     };
 
    //  optionsBar_vp.maintainAspectRatio =
    //    $(window).width() < width_threshold ? false : true;
 
     /**
      * COLOR CODES
      * Red: #F7604D
      * Aqua: #4ED6B8
      * Green: #A8D582
      * Yellow: #D7D768
      * Purple: #9D66CC
      * Orange: #DB9C3F
      * Blue: #3889FC
      */
 
     configBar_vp = {
       type: "bar",
      //  type: "horizontalBar",
       data: {
         labels: chart_data.product_line_by_gross_income.labels, //["Red", "Aqua", "Green", "Yellow", "Purple", "Orange", "Blue"],
         datasets: [
           {
             label: chart_data.product_line_by_gross_income.label, //"# of Hits",
             data: chart_data.product_line_by_gross_income.data, //[33, 40, 28, 49, 58, 38, 44],
             backgroundColor: [
               "#F7604D",
               "#4ED6B8",
               "#A8D582",
               "#D7D768",
               "#9D66CC",
               "#DB9C3F",
               "#3889FC"
             ],
             borderWidth: 0
           }
         ]
       },
       options: optionsBar_vp
     };
 
     barChart_vp = new Chart(ctxBar_vp, configBar_vp);
   }
 }

function drawPieChart() {
  if ($("#pieChart").length) {
    var chartHeight = 300;

    $("#pieChartContainer").css("height", chartHeight + "px");

    ctxPie = document.getElementById("pieChart").getContext("2d");

    optionsPie = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      },
      legend: {
        position: "top"
      }
    };

    configPie = {
      type: "pie",
      data: {
        datasets: [
          {
            // data: [18.24, 6.5, 9.15],
           data: chart_data.payment_methods.data,
            backgroundColor: ["#F7604D", "#4ED6B8", "#A8D582"],
            // label: "Storage"
           label: chart_data.payment_methods.label
          }
        ],
       labels: chart_data.payment_methods.labels
        // labels: [
        //   "Used Storage (18.240GB)",
        //   "System Storage (6.500GB)",
        //   "Available Storage (9.150GB)"
        // ]
      },
      options: optionsPie
    };

    pieChart = new Chart(ctxPie, configPie);
  }
}

function drawDoughnutChart() {
  if ($("#doughnutChart").length) {
    var chartHeight = 300;

    $("#doughnutChartContainer").css("height", chartHeight + "px");

    ctxDoughnut = document.getElementById("doughnutChart").getContext("2d");

    optionsDoughnut = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      },
      legend: {
        position: "top"
      }
    };

    configDoughnut = {
      type: "doughnut",
      data: {
        datasets: [
          {
            // data: [18.24, 6.5, 9.15],
           data: chart_data.sales_by_gender.data,
            backgroundColor: ["#F7604D", "#4ED6B8", "#A8D582"],
            // label: "Storage"
           label: chart_data.sales_by_gender.label
          }
        ],
       labels: chart_data.sales_by_gender.labels
        // labels: [
        //   "Used Storage (18.240GB)",
        //   "System Storage (6.500GB)",
        //   "Available Storage (9.150GB)"
        // ]
      },
      options: optionsDoughnut
    };

    doughnutChart = new Chart(ctxDoughnut, configDoughnut);
  }
}

function drawPolarChart() {
  if ($("#polarChart").length) {
    var chartHeight = 300;

    $("#polarChartContainer").css("height", chartHeight + "px");

    ctxPolar = document.getElementById("polarChart").getContext("2d");

    optionsPolar = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      },
      legend: {
        position: "top"
      }
    };

    configPolar = {
      type: "polarArea",
      data: {
        datasets: [
          {
            // data: [18.24, 6.5, 9.15],
           data: chart_data.product_line_by_total_sales.data,
            //backgroundColor: ["#F7604D", "#4ED6B8", "#A8D582"],
            backgroundColor: [
              "#F7604D",
              "#4ED6B8",
              "#A8D582",
              "#D7D768",
              "#9D66CC",
              "#DB9C3F",
              "#3889FC"
            ],
            // label: "Storage"
           label: chart_data.product_line_by_total_sales.label
          }
        ],
       labels: chart_data.product_line_by_total_sales.labels
        // labels: [
        //   "Used Storage (18.240GB)",
        //   "System Storage (6.500GB)",
        //   "Available Storage (9.150GB)"
        // ]
      },
      options: optionsPolar
    };

    polarChart = new Chart(ctxPolar, configPolar);
  }
}

// update function
function updateLineChart() {
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}

function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
}

function updateBarChart_v() {
  if (barChart_v) {
    barChart_v.options = optionsBar_v;
    barChart_v.update();
  }
}

function updateBarChart_vp() {
  if (barChart_vp) {
    barChart_vp.options = optionsBar_vp;
    barChart_vp.update();
  }
}
