
Highcharts.chart('vis-bar-sucho', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Projevilo se už sucho nějak ve vašem životě?', 
        useHTML: true,
    },
    subtitle: {
        useHTML: true,
        text: 'Většina lidí říká, že už sucho pocítili na vlastní kůži' + '<br><span style="color: #fff">.</span>',
    },
    xAxis: {
        categories: ['hodně', 'trochu', 'neprojevilo se', 'nevím']
    },
    yAxis: {
        title: {
            text: 'procento odpovědí'
        },
        // showFirstLabel: false,
        // labels: {
          // formatter: function() {
          //   if (this.isLast) {
          //     return this.value + '<br>' +
          //                 '<span class="light-gray-text">jízd za</span>' + '<br>' +
          //                 '<span class="light-gray-text">návěstidla</span>'
          //   } else {
          //     return this.value
          //   }
          // } 
        // }
    }, 
      tooltip: {
        valueSuffix: ' %',
        shared: true
      },
    exporting: {
        enabled: false
    },
    credits: {
      text : 'Zdroj: Behavio'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true,
            pointPadding: 0.1,
            groupPadding: 0.15,
            borderWidth: 0,
        }
    },
    series: [
    /*{ Mockup
      name: 'název řady',
      data: [44, 38, 48, 42, 69, 79, 88, 80, 58, 43, 49, 50],
      color: colors.avg,  // pokud chceš nastavit spešl barvu pro sérii dat
      lineWidth: 2, 
      dashStyle: 'ShortDash',
      zIndex: 8000,
      marker: {
        symbol: 'circle', 
        radius: 2
      }
    },*/
    {
      name: 'všichni respondenti',
      data :[11, 44, 44, 2],
      color: colors['red']
    }
  ]
  });