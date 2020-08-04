
Highcharts.chart('vis-bar-sucho-klima', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Jak se sucho projevilo ve vašem životě a co si myslíte o změně klimatu?', 
        useHTML: true,
    },
    subtitle: {
        useHTML: true,
        text: 'Koho se už sucho dotklo, ten častěji považuje změnu klimatu za reálný problém' + '<br><span style="color: #fff">.</span>',
    },
    xAxis: {
        categories: ['hodně', 'trochu', 'neprojevilo se', 'nevím']
    },
    yAxis: {
        title: false,
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
      name: 'myslí si, že změna klimatu je velký problém dneška',
      data :[12, 47, 39, 2],
      color: colors['red']
    },
    {
        name: 'myslí si, že změna klimatu je nafouknutá bublina',
        data :[6, 33, 60, 1],
        color: colors['blue']
      }
  ]
  });