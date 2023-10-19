import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import './maindashboard.css'

function MainDashBoard() {
  return (
    <div className='MainDash'>
        <h1>Dashboard</h1>
        <Cards/>
        <Table/>
    </div>
  )
}

export default MainDashBoard