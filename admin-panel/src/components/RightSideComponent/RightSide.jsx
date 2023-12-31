import React from 'react'
import CustomerReview from '../CustomerReview/CustomerReview'
import Updates from '../UpdatesComponent/Updates'
import './rightside.css'

function RightSide() {
  return (
    <div className="RightSide">
        <div>
            <h3>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3>Customer Review</h3>
            <CustomerReview/>
        </div>
    </div>
  )
}

export default RightSide