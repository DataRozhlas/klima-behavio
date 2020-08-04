Highcharts.chart("vis-line-nalehavost", {
    chart: {
      type: "area",
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
      categories: ["2003","2004","2005","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
      labels: {
        tickmarkPlacement: 'on',
      },
    },
    yAxis: {
      title: false, // Popis osy v yAxis.labels
      // title: {
      //   text: "Úhrn srážek",
      // },
      max: 100,
      labels: {
        formatter: function () {
          if (this.isLast) {
            return this.value + " %<br>" +
                  '<span class="axis-label-on-tick">respondentů</span>' 
                  // + '<br>' + '<span class="light-gray-text">návěstidla</span>'
          }
          return this.value + " %";
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
    /*   {
        name: "neví",
        data: [3.3, 3.4, 3, 2.4, 1.3, 2.5, 2.6, 3.3, 2.3, 3, 1.9, 2.1, 3.5, 1.5, 3, 1.3, 1.1],
    //    color: colors['avg'],
    //    lineWidth: 2,
    //    dashStyle: "ShortDash",
        zIndex: 8000,
      },
      {
        name: "není to naléhavé",
        data: [12.4, 12.8, 16.9, 12, 12.2, 17.3, 22, 27.9 ,20.7, 22.9, 22.6, 25.2, 25.5, 20.5, 17.1, 19.2, 14.7],
     //   color: colors["2020"],
     //   lineWidth: 3,
        zIndex: 8000,
        // marker: {
        //   symbol: 'circle',
        //   radius: 2
        // }
      }, */
      {
        name: "je to docela naléhavé",
        data: [51.5, 52.8, 52.2, 43.3, 50.7, 51.5, 50.6, 46.5, 50.7, 49.1, 49.5, 46.4, 46.5, 49.5, 50.5, 45.4, 45.1],
        fillColor: '#FAAA92',
        color: '#FAAA92'
      },
      {
        name: "je to velmi naléhavé",
        data: [32.8, 31, 27.9, 42.3, 35.8, 28.7, 24.7, 22.3, 26.4, 24.9, 26, 26.3, 24.4, 28.5, 29.5, 34.1, 39.1],
        fillColor: colors['2020'],
        color: colors['2020']
      }
    ],
  });