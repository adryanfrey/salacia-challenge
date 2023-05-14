import styles from './styles.module.css'
import React from 'react'
import salaciaLogo from '../../assets/salaciaLogo.svg'

// components
import Chart from '../../components/Chart/Chart'
import Sidebar from '../../components/Sidebar/Sidebar'

const PieChart = () => {

  const chartCustomizedOptions = {
    chart: {
      type: 'pie'
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.2f}%',
          style: {
            fontSize: 14
          }
        }
      }
    },
  }

  return (
    <div className={styles.container}>
      <div className={styles.container2}>

        <div className={styles.sideBarContainer}>
          <img className={styles.logo} src={salaciaLogo} alt="logo" />
          <Sidebar />
        </div>

        <div className={styles.chartContainer}>
          <Chart chartCustomizedOptions={chartCustomizedOptions} />
        </div>

      </div>
    </div>
  )
}

export default PieChart