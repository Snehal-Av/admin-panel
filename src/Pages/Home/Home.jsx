import React from 'react'
import './Home.css'
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo'
import Chart from '../../Components/Chart/Chart'
import { userData } from '../../dummyData'
import WidgetLg from '../../Components/WidgetLg/WidgetLg'
import WidgetSm from '../../Components/WidgetSm/WidgetSm'

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active Users" />
        <div className='homeWidget'>
        <WidgetSm/>
          <WidgetLg/>
          
        </div>
    </div>
  )
}

export default Home