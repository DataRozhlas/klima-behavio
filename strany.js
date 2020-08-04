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
    'kducsl': '#FFD444',
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
    return ['M', x, y, 'L', x, y + h, 'L', x + w, y + h / 2, 'z'];
}
if (Highcharts.VMLRenderer) {
    Highcharts.VMLRenderer.prototype.symbols.cross = Highcharts.SVGRenderer.prototype.symbols.cross;
}

let i = 0
const ser = data.reverse().map(v => {
    console.log(v)
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
            }
        }, {
            x: v[2],
            y: i,
            name: 'rok 2020',
            marker: {
                symbol: 'arrow',
                lineColor: stranyColors[partyNorm(v[0])],
                lineWidth: 2
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
        text: 'Téma životního prostředí posílilo u voličů KDU-ČSL o 45 procent. Nejméně u vládních stran o 10-20 procent.'
    },
    credits: {
        text : 'Zdroj: Behavio',
        href: '',
        style: {
            cursor: 'arrow'
        }
    },
    yAxis: {
        visible: false,
    },
    xAxis: {
    	gridLineWidth: 1,
        min: 0,
        max: 100,
        labels: {
            format: '{value} %'
        }  
    },
    legend: {
        enabled: false
    },
    tooltip: {
        formatter: function() {
            console.log(this)
            return `<span style="color: ${this.series.color};">${this.series.name}</span><br>${this.key}: ${this.x} %`
        }
    },
    plotOptions: {
        line: {
            label: {
                enabled: true,
            }
        },
        series: {
            dataLabels: {
              enabled: true,
              formatter: function () {
                if ( this.point === this.series.data[0] ) {
                  return `<span style="font-size:0.8em; color: ${this.series.color};">${this.series.name}</span>`
                }
              }
            }
          }
    },
    series: ser
});