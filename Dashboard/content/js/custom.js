document.addEventListener("DOMContentLoaded", function () {
  var options = {
    chart: {
      type: "pie",
      height: "100%",
    },
    series: [25, 75],
    labels: ["Category A", "Category B"],
    colors: ["#e1d0f7", "#6b12d9"], // Set colors here
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
});
document.addEventListener("DOMContentLoaded", function () {
  var options = {
    chart: {
      type: "bar",
      height: 50,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    series: [
      {
        data: [75],
      },
    ],
    xaxis: {
      categories: ["Single Bar"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    colors: ["#4ea135"],
  };

  var chart1 = new ApexCharts(document.querySelector("#chartline1"), options);
  chart1.render();
  var chart2 = new ApexCharts(document.querySelector("#chartline2"), options);
  chart2.render();
});
document.addEventListener("DOMContentLoaded", function () {
  var options = {
    chart: {
      type: "bar",
      height: 50,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    series: [
      {
        data: [75],
      },
    ],
    xaxis: {
      categories: ["Single Bar"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    colors: ["#f23030"],
  };

  var chartlinered = new ApexCharts(
    document.querySelector("#chartlinered"),
    options
  );
  chartlinered.render();
});

document.addEventListener("DOMContentLoaded", function () {
  var options = {
    chart: {
      type: "bar",
      height: 50,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    series: [
      {
        data: [75],
      },
    ],
    xaxis: {
      categories: ["Single Bar"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    colors: ["#4ea135"],
  };

  var chart51 = new ApexCharts(
    document.querySelector("#chartlinebtm51"),
    options
  );
  chart51.render();
  var chart52 = new ApexCharts(
    document.querySelector("#chartlinebtm52"),
    options
  );
  chart52.render();
  var chart54 = new ApexCharts(
    document.querySelector("#chartlinebtm54"),
    options
  );
  chart54.render();
  var chart55 = new ApexCharts(
    document.querySelector("#chartlinebtm55"),
    options
  );
  chart55.render();
});

document.addEventListener("DOMContentLoaded", function () {
  var data = [
    30, 40, 35, 50, 49, 60, 70, 91, 80, 55, 45, 35, 50, 49, 60, 70, 91, 80, 55,
    45, 30, 40, 35, 50, 49, 60, 70, 91, 80, 55,
  ];

  var options = {
    chart: {
      height: 320,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Bars",
        type: "bar",
        data: data,
      },
      {
        name: "Line",
        type: "line",
        data: data,
      },
    ],
    xaxis: {
      categories: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    },
    markers: {
      size: 4,
      colors: ["#FFF"],
      strokeColors: "#3469bb",
      strokeWidth: 1,
      hover: {
        size: 2,
      },
    },
    colors: ["#d5e5f7", "#3469bb"],
    stroke: {
      width: [0, 2], // 0 for bar, 2 for line
    },
  };

  var chart = new ApexCharts(
    document.querySelector("#barWithDotsAndLine"),
    options
  );
  chart.render();

  // Apply custom legend color using CSS
  var legend = document.querySelector(".apexcharts-legend");
  if (legend) {
    var legendItems = legend.querySelectorAll(".apexcharts-legend-series");
    legendItems.forEach(function (item, index) {
      item.style.color = options.colors[index]; // Use chart colors for legend items
    });
  }

  // Apply custom marker colors using CSS
  var markers = document.querySelectorAll(
    ".apexcharts-marker path, .apexcharts-series-markers path"
  );
  markers.forEach(function (marker, index) {
    marker.style.fill = options.colors[index];
    marker.style.stroke = options.markers.strokeColors;
  });
});

//
flatpickr("#datepicker", {
  dateFormat: "Y-m-d",
  minDate: "today",
  maxDate: "2025-12-31",
  defaultDate: "today",
  enableTime: true,
  time_24hr: true,
  weekNumbers: true,
  onChange: function (selectedDates, dateStr, instance) {
    console.log("Selected date: ", dateStr);
  },
});
