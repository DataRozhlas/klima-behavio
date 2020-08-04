
Highcharts.chart('vis-stacked-bar-codelate', {
    chart: {
        type: 'bar',
        height: 500
    },
    title: {
        text: 'Co vy osobně děláte pro ochranu životního prostředí?', 
        useHTML: true,
    },
    subtitle: {
        useHTML: true,
        text: 'Většina Čechů říká, že třídí odpadky, omezit konzumaci masa se ale chce jen málokomu' + '<br><span style="color: #fff">.</span>',
    },
    xAxis: {
        categories: ['třídím odpadky', 'šetřím vodou (sprchování, mytí nádobí..)', 'omezuji igelitky', 'vyhýbám se nadbytečným obalům', 'kupuji lokální potraviny', 'nosím si vlastní láhev na vodu', 'celkově omezuji spotřebu', 'nekupuji balenou vodu', 'nakupuji věci z druhé ruky', 'jezdím MHD místo autem', 'nelétám letadlem', 'používám přírodní kosmetiku', 'vzdělávám se o ekologii', 'podepisuji petice', 'snižuji konzumaci masa', 'chodím na demonstrace za klima']
    },
    yAxis: {
        title: false,
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
        bar: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true,
            pointPadding: 0.1,
            groupPadding: 0.15,
            borderWidth: 0,
            stacking: 'normal',
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
        name: 'nedělám a nechci',
        data :[2, 6, 8, 8, 9, 19, 14, 19, 29, 32, 41, 30, 30, 51, 54, 82],
        color: colors['red']
    },
    {
        name: 'nedělám, ale chci',
        data :[5, 12, 11, 25, 26, 17, 25, 21, 14, 17, 11, 23, 26, 19, 20, 14],
        color: colors['red-light']
    },
    {
      name: 'už dělám',
      data :[93, 82, 81, 67, 65, 64, 61, 60, 57, 51, 48, 47, 44, 30, 26, 4],
      color: colors['blue']
    },    
  ]
  });