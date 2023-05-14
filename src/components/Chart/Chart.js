import React, {useState} from 'react'

// highcharts lib
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Exporting from 'highcharts/modules/exporting'
import highchartsAccessibility from "highcharts/modules/accessibility"
import drilldown from "highcharts/modules/drilldown.js"

// json data
import data from '../../data/data.json'

// hooks
import { processData } from '../../utils/processData';

const Chart = ({chartCustomizedOptions}) => {

    // states
    const processedData = processData(data)

    // first level data from the chart
    const firstLevelSeries = processedData.map((scope) => {
        return {
            name: scope.name,
            y: +scope.totalEmission.toFixed(2),
            drilldown: scope.name,
        }
    })

    // handle the scope drill down
    const drillDownSeries = processedData.map((scope) => {
        let data = []

        scope.categories.forEach((category) => {
            let object = {
                name: category.name,
                y: +category.totalEmission.toFixed(2),
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
        scope.categories.forEach((category) => {
            let data = []

            category.activities.forEach((activity) => {
                let object = { name: activity[0], y: +activity[1].toFixed(2) }

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

    const chartOptions = {
        chart: {
            type: chartCustomizedOptions.chart.type,
        },
        title: {
            text: 'CO2e Emissions',
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
        plotOptions: {...chartCustomizedOptions.plotOptions},
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
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Tonnes'
            }
        },
        legend: {
            enabled: false
        }
    }

    return (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    )
}

export default Chart