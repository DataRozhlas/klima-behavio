Highcharts.chart("vis-line-nalehavost", {
    chart: {
      type: "area",
    },
    title: {
      text: "Jak naléhavý problém podle vás představuje životní prostředí?",
      useHTML: true,
    },
    subtitle: {
      text: "Tady přijde nějaký cool popisek?"
              // pridej, kdy se prekryva podnadpis s osou
              + "<span class='mock-empty-line'><br>.</span>",
      useHTML: true,
    },
    credits: {
      href: "https://cvvm.soc.cas.cz/media/com_form2content/documents/c2/a5191/f9/po200414.pdf",
      text: "Zdroj: CVVM",
    },
    xAxis: {
      categories: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
      labels: {
        formatter: function () {
          if (["červen", "červenec", "srpen"].includes(this.value)) {
            return (
              '<span style="font-weight: bold; color: #000">' +
              this.value +
              "</span>"
            );
          } else {
            return this.value;
          }
        },
        tickmarkPlacement: 'on',
      },
      plotBands: [
        {
          color: "#f2f2f2",
          from: 4.8,
          to: 7.2,
          label: {
            text: "Období s největšími<br>srážkami v roce",
            style: {
              color: "#444",
            },
          },
        },
      ],
    },
    yAxis: {
      title: false, // Popis osy v yAxis.labels
      // title: {
      //   text: "Úhrn srážek",
      // },
      labels: {
        formatter: function () {
          if (this.isLast) {
            return this.value + " mm<br>" +
                  '<span class="axis-label-on-tick">srážek</span>' 
                  // + '<br>' + '<span class="light-gray-text">návěstidla</span>'
          }
          return this.value + " mm";
        },
      },
    },
    tooltip: {
      valueSuffix: " %",
      // shared: true
    },
    exporting: {
      enabled: false,
    },
    plotOptions: {
      series: {
          stacking: "normal"
      },
      area: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: true,
        color: colors.default,
        lineWidth: 0.5,
        dataLabels: {
          enabled: false,
        },
        marker: false,
        // marker: {
        //   symbol: 'circle',
        //   radius: 2
        // }
        pointPlacement: 'on'
      },
    },
    series: [
      {
        name: "průměr 1981-2010",
        data: [44, 38, 48, 42, 69, 79, 88, 80, 58, 43, 49, 50],
        color: colors['avg'],
        lineWidth: 2,
        dashStyle: "ShortDash",
        zIndex: 8000,
      },
      {
        name: "2020",
        data: [19, 78, 36, 18, 75, 151],
        color: colors["2020"],
        lineWidth: 3,
        zIndex: 8000,
        // marker: {
        //   symbol: 'circle',
        //   radius: 2
        // }
      },
      {
        name: "2019",
        data: [65, 31, 48, 25, 91, 53, 58, 77, 62, 43, 43, 38],
        // color: colors['2019']
      },
      {
        name: "2018",
        data: [48, 14, 32, 20, 62, 76, 42, 37, 66, 35, 18, 72],
        // color: colors['2018']
      },
      {
        name: "2017",
        data: [33, 24, 42, 77, 44, 69, 90, 68, 67, 81, 49, 38],
      },
      {
        name: "2016",
        data: [40, 62, 30, 40, 58, 82, 115, 41, 37, 65, 38, 28],
      },
      {
        name: "2015",
        data: [53, 12, 48, 30, 49, 58, 36, 67, 32, 52, 74, 20],
      },
    ],
  });