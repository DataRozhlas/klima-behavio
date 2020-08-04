const data = [
    ['KDU-ČSL',23.3,68.6],
    ['TOP 09',24,56.7],
    ['SPD',null,46.2],
    ['ODS',19.8,45.3],
    ['Piráti',27.3,45.2],
    ['STAN',null,42.3],
    ['ČSSD',28.1,38.6],
    ['KSČM',15,38.3],
    ['ANO',18.3,38.3],
  ]

const stranyColors = {
    'ano': '#282661',
    'kducsl': '#F0C432', //FFD444
    'kscm': '#8C0000',
    'ods': '#2070CA',
    'pirati': '#3A3A3A',
    'spd': '#E2A52E',
    'stan': '#516D7A',
    'top09': '#834BA6',
    'cssd': '#E63812'
  }

function partyNorm(v) {
    return v.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace('-', '').replace(' ', '').toLowerCase()
}

Highcharts.SVGRenderer.prototype.symbols.arrow = function (x, y, w, h) {
    return ['M', x, y, 'L', x + w*0.7, y + h / 2, 'L', x, y + h, 'z'];
}
if (Highcharts.VMLRenderer) {
    Highcharts.VMLRenderer.prototype.symbols.cross = Highcharts.SVGRenderer.prototype.symbols.cross;
}

let i = 0
const ser = data.reverse().map(v => {
    i += 10
    startRok = 'rok 2013'
    if (['ANO', 'Piráti'].includes(v[0])) {
        startRok = 'rok 2014'
    }
    if (v[1] === null) {
        return {
            color: stranyColors[partyNorm(v[0])],
            name: v[0],
            data: [{
                x: v[2],
                y: i,
                name: 'rok 2020',
                marker: {
                    symbol: 'square',
                    radius: 3
                }
            }]
        }
    }    
    return {
        color: stranyColors[partyNorm(v[0])],
        name: v[0],
        data: [{
            x: v[1],
            y: i,
            name: startRok,
            marker: {
                symbol: 'circle',
                radius: 2.5
            }
        }, {
            x: v[2],
            y: i,
            name: 'rok 2020',
            marker: {
                symbol: 'arrow',
                lineColor: stranyColors[partyNorm(v[0])],
                lineWidth: 3, 
                lineCap: 'round',
                radius: 1.5 
            }
        }]
    }  
})

Highcharts.chart('partaje', {
    title: {
        useHTML: true,
        text: 'Podíl voličů, kteří považují životní prostředí za naléhavý problém'
    },
    subtitle: {
        useHTML: true,
        text: 'V rozmezí let 2013 <span style="font-width: bold">&rarr;</span> 2020 zvedli voliči KDU-ČSL, posílilo u nich o 45 procent. U vládních stran o 10 až 20 procent'
    },
    credits: {
        text : 'Zdroj: CVVM',
        href: 'https://cvvm.soc.cas.cz/media/com_form2content/documents/c2/a5191/f9/po200414.pdf',
        style: {
            cursor: 'arrow'
        }
    },
    yAxis: {
        visible: false,
    },
    xAxis: {
      gridLineWidth: 1,
      tickWidth: 0,
        min: 0,
        max: 100,
        labels: {
            format: '{value} %'
        },
        plotLines: [{
          // color: 'black',
          dashStyle: 'dot',
          value: 22,
          width: 0,
          zIndex: 10000,
          label: {
            text: '2013', //rok<br>
            rotation: 0,
            textAlign: 'center',
            y: 15,
            // align: 'center',
            style: {
              color: '#888',
            }
          }
        },{
          dashStyle: 'dot',
          value: 68,
          width: 0,
          zIndex: 10000,
          label: {
            text: '<br>2020',
            rotation: 0,
            textAlign: 'center',
            y: 15,
            // align: 'center',
            style: {
              color: '#888',
              // fontWeight: 'bold',
            }
          }
        }],
    },
    legend: {
        enabled: false
    },
    tooltip: {
        formatter: function() {
            return `<span style="color: ${this.series.color};">${this.series.name}</span><br>${this.key}: ${this.x} %`
        }
    },
    plotOptions: {
        line: {
            label: {
                enabled: true,
            }, 
            lineWidth: 1.5, 
            // dashStyle: 'Dash'
        },
        series: {
            dataLabels: {
              enabled: true,
              align: 'right',
              y: 10,
              x: -5,
              formatter: function () {
                if ( this.point === this.series.data[0] ) {
                  return `<span class="" style="font-size:0.85em; color: ${this.series.color};">${this.series.name}</span>` //font-weight: 400;
                }
              }
            }
          }
    },
    series: ser
});