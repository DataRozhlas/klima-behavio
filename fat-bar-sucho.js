
Highcharts.chart('vis-fat-bar-sucho', {
  chart: {
      type: 'bar'
  },
  title: {
      text: 'Projevilo se už sucho nějak ve vašem životě?', 
      useHTML: true,
  },
  subtitle: {
      useHTML: true,
      text: 'Většina lidí říká, že už sucho pocítili na vlastní kůži'
  },
  xAxis: {
      visible: false,
      // categories: ['Bude to lepší.', 'Stejně jako dneska.', 'Bude to obtížnější.', 'Lidský život na Zemi<br>už nebude.']
  },
  yAxis: {
      title: false,
      // gridLines: false,
      min: 0,
      max: 100,
      // showFirstLabel: false,
      labels: {
       formatter: function() {
        //   if (this.isLast) {
        //     return this.value + '<br>' +
        //                 '<span class="light-gray-text">jízd za</span>' + '<br>' +
        //                 '<span class="light-gray-text">návěstidla</span>'
        //   } else {
           return this.value + ' %'
         }
       } 
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
    text : 'Zdroj: Behavio',
    href: '',
    style: {
        cursor: 'arrow'
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      pointWidth: 400,
      borderRadius: 2,
      borderWidth: 2, 
      borderColor: '#fff'

    },
      bar: {
          dataLabels: {
              enabled: true,
              align: 'left',
              y: -90,
              format: '{y}%',
              style: {
                textOutline: false
              }
          },
          enableMouseTracking: false,
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
    name: 'nevím',
    data: [2],
    color: '#aaa'
  },
  {
    name: 'neprojevilo se',
    data: [44],
    color: colors['blue']
  },
  {
    name: 'trochu',
    data: [44],
    color: colors['red-light']
  },
  {
    name: 'hodně',
    data: [11],
    color: colors['red']
  },
]
});