import React from 'react'
import styles from './styles.module.css'
import salaciaLogo from '../../assets/salaciaLogo.svg'

// components
import Chart from '../../components/Chart/Chart'
import Sidebar from '../../components/Sidebar/Sidebar'

const ColumnChart = () => {

  const chartCustomizedOptions = {
    chartType: 'column',
    plotOptionsFormat: '{point.y}'
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

export default ColumnChart