import styles from './styles.module.css'
import React from 'react'
import salaciaLogo from '../../assets/salaciaLogo.svg'

// components
import Chart from '../../components/Chart/Chart'
import Sidebar from '../../components/Sidebar/Sidebar'

const PieChart = () => {

  const chartCustomizedOptions = {
    chartType: 'pie',
    plotOptionsFormat: '{point.name}: {point.percentage:.2f}%'
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