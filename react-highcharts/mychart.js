class MyChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartid = 'chart-' + this.uuidv4();
  }

  uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }

  componentDidMount() {
    Highcharts.chart(this.chartid, {
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
      },

      subtitle: {
        text: 'Source: thesolarfoundation.com'
      },

      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },
      series: this.props.data,
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div id={this.chartid}></div>
      </div>
    );
  }
}
MyChart.defaultProps = {
  title: '',
  data: null
};