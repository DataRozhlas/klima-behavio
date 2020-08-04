Highcharts.chart("vis-line-nalehavost", {
    chart: {
      type: "area",
      height: 450
    },
    title: {
      text: "Jak naléhavý problém podle vás představuje životní prostředí?",
      useHTML: true,
    },
    subtitle: {
      text: "Podíl lidí, kteří pokládají životní prostředí za velmi naléhavý problém, se v posledních deseti letech opět zvyšuje"
              // pridej, kdy se prekryva podnadpis s osou
              + "<span class='mock-empty-line'><br>.</span>",
      useHTML: true,
    },
    credits: {
      href: "https://cvvm.soc.cas.cz/media/com_form2content/documents/c2/a5191/f9/po200414.pdf",
      text: "Zdroj: CVVM",
    },
    xAxis: {
      categories: ["2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
      labels: {
        tickmarkPlacement: 'on',
      },
      plotBands: [
        {
          color: '#f9f9f9',
          from: 2,
          to: 4,
          label: {
            text: "chybí<br>data",
            style: {
              color: "#333",
            },
          },
        },
      ],
    },
    yAxis: {
      // title: false, // Popis osy v yAxis.labels
      title: {
        text: "Procent respondentů",
      },
      max: 100,
      // labels: {
      //   formatter: function () {
      //     if (this.isLast) {
      //       return this.value + " %<br>" +
      //             '<span class="axis-label-on-tick">respondentů</span>' 
      //             // + '<br>' + '<span class="light-gray-text">návěstidla</span>'
      //     }
      //     return this.value + " %";
      //   },
      // },
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
        fillColor: {
          pattern: {
            path: {
                d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
                strokeWidth: 3
            },
            width: 10,
            height: 10,
            opacity: 1, 
            color: '#00ff00'
          },
        },
        // marker: {
        //   symbol: 'circle',
        //   radius: 2
        // }
        pointPlacement: 'on'
      },
    },
    series: [
      {
        name: "je to docela naléhavé",
        data: [51.5, 52.8, 52.2, null, 43.3, 50.7, 51.5, 50.6, 46.5, 50.7, 49.1, 49.5, 46.4, 46.5, 49.5, 50.5, 45.4, 45.1], //48.1
        fillColor: colors['red-light'],
        color: colors['red-light'],
      },
      {
        name: "je to velmi naléhavé",
        data: [32.8, 31, 27.9, null, 42.3, 35.8, 28.7, 24.7, 22.3, 26.4, 24.9, 26, 26.3, 24.4, 28.5, 29.5, 34.1, 39.1], // 35.1
        fillColor: colors['red'],
        color: colors['red']
      },
      {
        name: "je to docela naléhavé",
        data: [null, null, 52.2, 48.1, 43.3], //, 50.7, 51.5, 50.6, 46.5, 50.7, 49.1, 49.5, 46.4, 46.5, 49.5, 50.5, 45.4, 45.1],
        fillColor: {
          pattern: {
            color: colors['red-light']
          }
        },
        showInLegend: false,
        color: colors['red-light'],
      },
      {
        name: "je to velmi naléhavé",
        data: [null, null, 27.9, 35.1, 42.3], //, 35.8, 28.7, 24.7, 22.3, 26.4, 24.9, 26, 26.3, 24.4, 28.5, 29.5, 34.1, 39.1],
        fillColor: {
          pattern: {
            color: colors['red']
          }
        },
        showInLegend: false,
        color: colors['red']
      }
    ],
  });