import React from 'react'
import './FeaturedInfo.css'
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material'

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,256</span>
                    <span className="featuredMoneyRate">
                        -11.4
                        <ArrowDownwardOutlined className='featuredIcon Negative' />
                    </span>
                </div>
                <div className="span featuredSub">
                    Compared to Last Month
                </div>

            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,256</span>
                    <span className="featuredMoneyRate">
                        -1.4
                        <ArrowDownwardOutlined className='featuredIcon Negative'/>
                    </span>
                </div>
                <div className="span featuredSub">
                    Compared to Last Month
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,256</span>
                    <span className="featuredMoneyRate">
                        +2.4
                        <ArrowUpwardOutlined  className='featuredIcon'/>
                    </span>
                </div>
                <div>
                <span className="featuredSub">
                    Compared to Last Month
                </span>
                </div>
            </div>

        </div>
    )
}

export default FeaturedInfo