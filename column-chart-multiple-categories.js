
Highcharts.chart('vis-column-2050', {
  chart: {
      type: 'bar'
  },
  title: {
      text: 'Jak se bude podle vás žít lidem na Zemi v roce 2050?', 
      useHTML: true,
  },
  subtitle: {
      useHTML: true,
      text: 'Muži jsou větší optimisti' + '<br><span style="color: #fff">.</span>',
  },
  xAxis: {
      categories: ['Bude to lepší.', 'Stejně jako dneska.', 'Bude to obtížnější.', 'Lidský život na Zemi už nebude.']
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
    name: 'muži',
    data :[17,16,63,4],
    color: colors['2019']
  },
  {
    name: 'ženy',
    data: [8,14,75,3],
    color: colors['2020']
    // color: colors[function() { console.log(this); return '2020' }()]
  },
]
});