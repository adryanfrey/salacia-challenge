import './App.css';
import { useEffect } from 'react';

// highcharts lib
import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting'
import highchartsAccessibility from "highcharts/modules/accessibility"
import drilldown from "highcharts/modules/drilldown.js"

// json data
import data from './data/data.json'

// hooks
import { processData } from './utils/processData';

function App() {

  const processedData = processData(data)

  const firstLevelSeries = processedData.map((scope) => {
    return {
      name: scope.name,
      y: scope.totalEmission,
      drilldown: scope.name
    }
  })

  // handle the scope drill down
  const drillDownSeries = processedData.map((scope) => {
    let data = []

    scope.categories.forEach((category) => {
      let object = {
        name: category.name,
        y: category.totalEmission,
        drilldown: category.name
      }

      data.push(object)
    })

    return {
      name: 'CO2e Emission',
      id: scope.name,
      data
    }
  })

  // handle the category drill down and add it to the drillDownSeries
  processedData.forEach((scope) => {
    return scope.categories.forEach((category) => {
      let data = []

      category.activities.forEach((activity) => {
        let object = { name: activity[0], y: activity[1] }

        data.push(object)
      })

      drillDownSeries.push({
        name: 'CO2e Emission',
        id: category.name,
        data
      })
    })
  })

  // highcharts config
  Exporting(Highcharts)
  highchartsAccessibility(Highcharts)
  drilldown(Highcharts)

  useEffect(() => {

    Highcharts.chart('chartContainer', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'CO2e Emissions'
      },
      subtitle: {
        text: 'Salacia Challenge'
      },
      accessibility: {
        announceNewData: {
          enabled: true
        },
        point: {
          valueSuffix: '%'
        }
      },
      tooltip: {
        valueSuffix: ' Tonnes',
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.percentage:.2f}%'
          }
        }
      },
      series: [
        {
          name: 'CO2e Emission',
          colorByPoint: true,
          data: firstLevelSeries,
        },
      ],
      drilldown: {
        series: drillDownSeries
      },

    })

  }, [])

  return (
    <div className="App">
      <div id='chartContainer'>

      </div>
    </div>
  );
}

export default App;
