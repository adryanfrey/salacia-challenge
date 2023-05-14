import React from 'react'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className={styles.sideBar}>
      <h2>Select Chart Type</h2>
      <nav>
        <ul>
          <li><NavLink className={styles.link} to={'/'} >Pie</NavLink></li>
          <li><NavLink className={styles.link} to={'/barChart'} >Bar</NavLink></li>
          <li><NavLink className={styles.link} to={'/columnChart'} >Column</NavLink></li>
          <li><NavLink className={styles.link} to={'/lineChart'} >Line</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar